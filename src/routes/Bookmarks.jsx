import { useState, useEffect } from "react";

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const bookmarkData =
            JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(bookmarkData);
    }, []);

    const handleRemoveBookmark = (query) => {
        const updatedBookmarks = bookmarks.filter(
            (bookmark) => bookmark.query !== query
        );

        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

        setBookmarks(updatedBookmarks);
    };

    const renderBookmarks = () => {
        return bookmarks.map((bookmark, index) => (
            <div key={index} className="bookmark-item">
                <div className="bookmark-info">
                    <p className="bookmark-query">{bookmark.query}</p>
                    <p className="bookmark-timestamp">{bookmark.timestamp}</p>
                </div>
                <button
                    className="remove-button"
                    onClick={() => handleRemoveBookmark(bookmark.query)}
                >
                    Remove
                </button>
            </div>
        ));
    };

    return (
        <div className="bookmark-container">
            <h2>Bookmarked Queries</h2>
            {bookmarks.length > 0 ? (
                <div className="bookmark-list">{renderBookmarks()}</div>
            ) : (
                <p>No bookmarked queries yet.</p>
            )}
        </div>
    );
};

export default Bookmarks;
