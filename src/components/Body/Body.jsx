import React, { useEffect, useState } from 'react';
import './Body.css'
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';

const Body = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('FakeData.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])


    const [bookmarksT,setBookmarksT]=useState([]);
   const [time,setTime]=useState(0)


    const bookmarkF=(id)=>{
        
        const newBT=blogs.find(blog=> blog.id==id)
        const newtime=time+newBT.blogDuration;
        setTime(newtime)
        const newBookmarksT=[...bookmarksT,newBT]
        setBookmarksT(newBookmarksT);
    }
    
    return (
        <div className='Body-container'>
            <div className="blog-container">
                {
                    blogs.map(blog=> <Blog blog={blog} key={blog.id} bF={bookmarkF}></Blog>)
                }
            </div>
            <div className="bookmark-container">
                <h6>spend time: {time}</h6>
                <Bookmarks bookmarks={bookmarksT}></Bookmarks>
            </div>
        </div>
    );
};

export default Body;