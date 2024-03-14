import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarks }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 my-8">
      {blogs.map((blog, index) => (
        <Blog key={index} handleBookmarks={handleBookmarks} blog={blog}></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarks: PropTypes.func
};

export default Blogs;
