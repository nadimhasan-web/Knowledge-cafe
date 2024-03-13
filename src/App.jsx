import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const markReadingTime = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove read blog from bookmarks
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs addToBookmarks={addToBookmarks} markReadingTime={markReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
