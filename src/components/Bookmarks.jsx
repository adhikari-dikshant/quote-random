import React from 'react';
import { useSelector } from 'react-redux';

const Bookmarks = () => {
    const bookmarks = useSelector((state) => state.bookmarks);

    return (
        <div>
            <h1>Bookmarked Quotes</h1>
            <ul>
                {bookmarks.map((bookmark, index) => (
                    <li key={index}>
                        <p>{bookmark.quote}</p>
                        <p>- {bookmark.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bookmarks;
