// import { prototype } from "postcss/lib/previous-map";
import { IoBookmarkOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="my-4 border-b-2 pb-4">
      <img className="rounded-xl" src={cover} alt="" />
      <div className="flex justify-between items-center my-6">
        <div className="flex gap-5 items-center">
          <div className="w-16 rounded-full overflow-hidden">
            <img src={author_img} alt="" />
          </div>
          <div className="text-left">
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <p>{reading_time} Min read</p>
          <button onClick={() => handleBookmarks(blog)} className="bg-white">
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h2 className="md:text-[40px] font-bold text-left">Title: {title}</h2>
      <h2 className="text-left">
        {hashtags.map((tag, index) => (
          <span key={index} className="mr-4">
            {tag}
          </span>
        ))}
      </h2>
      <div className="text-left my-3">
        <button
          onClick={() => handleMarkAsRead(reading_time)}
          className="text-white"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
