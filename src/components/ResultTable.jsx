import { useState, useEffect } from "react";

const ResultTable = ({ data, query }) => {
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        const isBookmarked =
            bookmarks.findIndex((bookmark) => bookmark.query === query) !== -1;

        setBookmarked(isBookmarked);
    }, [query]);

    const handleBookmarkClick = () => {
        setBookmarked((prevBookmarked) => !prevBookmarked);

        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

        const updatedBookmarks = bookmarked
            ? bookmarks.filter((bookmark) => bookmark.query !== query)
            : [...bookmarks, { query }];

        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    };

    const renderRows = () => {
        return data.rows.map((row, index) => (
            <tr key={index}>
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                ))}
            </tr>
        ));
    };

    const renderHeaders = () => {
        return data.columns.map((column, index) => (
            <th key={index}>{column}</th>
        ));
    };
    return (
        <div>
            <div className="button-container">
                <button className="export-button">Export</button>
                <button
                    className={
                        bookmarked
                            ? "bookmark-button bookmarked"
                            : "bookmark-button"
                    }
                    onClick={handleBookmarkClick}
                >
                    {bookmarked ? "Bookmarked" : "Bookmark"}
                </button>
            </div>
            <div className="result-table-container">
                <table>
                    <thead>
                        <tr>{renderHeaders()}</tr>
                    </thead>
                    <tbody>{renderRows()}</tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultTable;
