import { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

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

    const renderBookmarkButton = () => {
        return (
            <button
                className={`bookmark-button ${bookmarked ? "bookmarked" : ""}`}
                onClick={handleBookmarkClick}
            >
                {bookmarked ? "Bookmarked" : "Bookmark"}
            </button>
        );
    };

    return (
        <div>
            <div className="button-container">
                <button className="export-button">Export</button>
                {renderBookmarkButton()}
            </div>
            <div className="result-table-container">
                <table>
                    <TableHeader columns={data.columns} />
                    <tbody>
                        {data.rows.map((row, index) => (
                            <TableRow key={index} row={row} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultTable;
