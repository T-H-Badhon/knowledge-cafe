import React from 'react';
import './Bookmarks.css'

const Bookmarks = (props) => {
    const {bookmarks}=props;

    return (
        <div>
            {
                bookmarks.map(bookmark=><h5>{bookmark.blogTitle}</h5>)
            }
        </div>
    );
};

export default Bookmarks;