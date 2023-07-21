import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import VirtualizedTable from "./VirtualizedTable";

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

    const csvData = {
        columns: data.columns,
        rows: data.rows,
    };

    return (
        <div>
            <div className="button-container">
                <CSVLink
                    data={csvData.rows}
                    headers={csvData.columns}
                    filename={"exportedData.csv"}
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <button className="export-button">Export</button>
                </CSVLink>
                {renderBookmarkButton()}
            </div>
            {data.rows.length > 80 ? (
                <VirtualizedTable rows={data.rows} columns={data.columns} />
            ) : (
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
            )}
        </div>
    );
};

export default ResultTable;
