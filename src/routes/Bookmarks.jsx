import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import ResultTable from "../components/ResultTable";
import getQueryData from "../utils/getQueryData";

const Bookmarks = () => {
    const [results, setResults] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);
    const [selectedQuery, setSelectedQuery] = useState(null);
    const [customBookmarkName, setCustomBookmarkName] = useState("");
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        const bookmarkData =
            JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(bookmarkData);
    }, [selectedQuery, customBookmarkName]);

    const handleRemoveBookmark = (query) => {
        const updatedBookmarks = bookmarks.filter(
            (bookmark) => bookmark.query !== query
        );

        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

        setBookmarks(updatedBookmarks);
    };

    const handleViewQuery = (query) => {
        setSelectedQuery(query);
    };

    useEffect(() => {
        const fetchedResults = getQueryData(selectedQuery);
        setResults(fetchedResults);
    }, [selectedQuery]);

    const handleCloseModal = () => {
        setSelectedQuery(null);
        setResults(null);
    };

    const handleShowEditModal = (query) => {
        setSelectedQuery(query);
        setShowEditModal(true);

        const bookmark = bookmarks.find((bookmark) => bookmark.query === query);
        setCustomBookmarkName(bookmark?.name || "");
    };

    const handleCloseEditModal = () => {
        setSelectedQuery(null);
        setShowEditModal(false);
    };

    const handleRenameBookmark = () => {
        const updatedBookmarks = bookmarks.map((bookmark) => {
            if (bookmark.query === selectedQuery) {
                return { ...bookmark, name: customBookmarkName };
            }
            return bookmark;
        });

        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
        setShowEditModal(false);
        handleCloseEditModal();
    };

    const renderBookmarks = () => {
        return bookmarks.map((bookmark, index) => (
            <div key={index} className="bookmark-item">
                <div className="bookmark-info">
                    <p className="bookmark-name">
                        {bookmark.name ? bookmark.name : bookmark.query}
                    </p>
                </div>
                <button
                    className="remove-button"
                    onClick={() => handleRemoveBookmark(bookmark.query)}
                >
                    Remove
                </button>
                <button onClick={() => handleViewQuery(bookmark.query)}>
                    View
                </button>
                <button onClick={() => handleShowEditModal(bookmark.query)}>
                    Edit Name
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
            {showEditModal && (
                <Modal onClose={handleCloseEditModal}>
                    <div>
                        <input
                            type="text"
                            value={customBookmarkName}
                            onChange={(event) =>
                                setCustomBookmarkName(event.target.value)
                            }
                        />
                        <button onClick={handleRenameBookmark}>Save</button>
                    </div>
                </Modal>
            )}
            {!showEditModal && selectedQuery && (
                <Modal query={selectedQuery} onClose={handleCloseModal}>
                    {results && (
                        <ResultTable data={results} query={selectedQuery} />
                    )}{" "}
                </Modal>
            )}
        </div>
    );
};

export default Bookmarks;
