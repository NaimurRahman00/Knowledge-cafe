import "./App.css";
import Header from "./componant/header/Header";
import Blogs from "./componant/blogs/Blogs";
import Bookmarks from "./Bookmarks";
import { useState } from "react";
import ReadingTime from "./componant/reading time/ReadingTime";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  const handleBookmarks = (blogs) => {
    const newBookmarks = [...bookmarks, blogs];
    setBookmarks(newBookmarks);
    console.log(bookmarks);
  };

  const handleMarkAsRead = (time) => {
    console.log("mark as read!");
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex md:justify-between">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <div className="md:w-1/3 ml-12 mt-12">
          <ReadingTime handleMarkAsRead={handleMarkAsRead}></ReadingTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
