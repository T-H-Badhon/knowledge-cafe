import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {authorName,authorQualification,authonImage,blogTitle,blogDuration,blogImage,id}=props.blog;
    const {bF}=props
    return (
        <div className='Blog-container'>
            <div>
                <img className='img-fluid' src={blogImage} alt="" />
            </div>
            <div>
                <h2>{blogTitle}</h2>
                <div>
                    <h4>{authorName}</h4>
                    <h6>{authorQualification}</h6>
                </div>
                <button onClick={()=>bF(id)}>bookmark</button>
            </div>
            
        </div>
    );
};

export default Blog;