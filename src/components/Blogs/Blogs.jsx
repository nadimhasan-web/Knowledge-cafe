import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({addToBookmarks, markReadingTime}) => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    addToBookmarks={addToBookmarks}
                    markReadingTime={markReadingTime}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    addToBookmarks: PropTypes.func.isRequired,
    markReadingTime: PropTypes.func.isRequired,
}
export default Blogs;