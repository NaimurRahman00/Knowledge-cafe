import './App.css'
import Header from './componant/header/Header'
import Blogs from './componant/blogs/Blogs'
import Bookmarks from './Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blogs => {
    const newBookmarks = [...bookmarks, blogs];
    setBookmarks(newBookmarks);
    console.log(bookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex md:justify-between'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
