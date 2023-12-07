import React, { useState, useEffect } from 'react';
import twitterIcon from '../twitter.svg'; // Assuming you have the Twitter icon
// import { useDispatch } from 'react-redux';
// import { addToBookmarks } from "../actions/addToBookmark";

const Quote = () => {
    // State variables to manage quote, author, tags, and selected tag
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');
    //    const dispatch = useDispatch();

    {/*const handleBookmark = () => {
        dispatch(addToBookmarks({ quote, author }));
    };*/}

    // Fetch tags from the Quotable API on component mount
    useEffect(() => {
        fetchTags();
        getQuote(); // Initially load a random quote
    }, []);

    // Fetch tags from the Quotable API's /tags endpoint
    const fetchTags = async () => {
        try {
            const response = await fetch('https://api.quotable.io/tags');
            const data = await response.json();
            setTags(data);
        } catch (error) {
            console.error('Error fetching tags:', error);
        }
    };

    // Fetch a random quote based on the selected tag (if any)
    const getQuote = async () => {
        try {
            let url = 'https://api.quotable.io/random';
            if (selectedTag) {
                url += `?tags=${selectedTag}`;
            }
            const response = await fetch(url);
            const randomQuote = await response.json();
            setQuote(randomQuote.content);
            setAuthor(randomQuote.author);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    // Handle tag selection change in the dropdown
    const handleTagChange = (event) => {
        setSelectedTag(event.target.value);
    };

    // Handle button click to get a new quote
    const handleClick = () => {
        getQuote();
    };

    // Rendering the Quotes component
    return (
        <div id="quote-box">
            <div id="text">
                <p>{quote}</p>
            </div>
            <div id="author">
                <p>{author}</p>
            </div>

            {/* Dropdown to select tags */}
            <select value={selectedTag} onChange={handleTagChange}>
                <option value="">Select a tag</option>
                {/* Mapping through fetched tags to display them as options */}
                {tags.map((tag, index) => (
                    <option key={index} value={tag.slug}>
                        {tag.name}
                    </option>
                ))}
            </select>

            {/* Buttons section with Twitter icon for sharing and a button to get a new quote */}
            <div id="buttons">
                <div className="social-media">
                    <a href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} id="tweet-quote">
                        <span>
                            <img src={twitterIcon} alt="Twitter Icon" />
                        </span>
                    </a>
                </div>
                <button onClick={handleClick} id="new-quote">
                    New Quote
                </button>
                {/*<button onClick={handleBookmark} id="bookmark-quote">
                    Bookmark Quote
                </button>*/}
            </div>
        </div>
    );
};

export default Quote;
