import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import ResultTable from "../components/ResultTable";
import getQueryData from "../utils/getQueryData";
import BookmarkItem from "../components/BookmarkItem";
import EditBookmark from "../components/EditBookmark";

const Bookmarks = () => {
    const [results, setResults] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);
    const [selectedQuery, setSelectedQuery] = useState(null);
    const [editModal, setEditModal] = useState(false);

    useEffect(() => {
        const bookmarkData =
            JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(bookmarkData);
    }, []);

    const handleBookmarkAction = (action, query) => {
        switch (action) {
            case "remove":
                removeBookmark(query);
                break;
            case "view":
                viewQuery(query);
                break;
            case "edit":
                showEditModal(query);
                break;
            default:
                break;
        }
    };

    const removeBookmark = (query) => {
        const updatedBookmarks = bookmarks.filter(
            (bookmark) => bookmark.query !== query
        );
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
    };

    const viewQuery = (query) => {
        setSelectedQuery(query);
        setEditModal(false);
    };

    useEffect(() => {
        if (!selectedQuery) return;

        const fetchedResults = getQueryData(selectedQuery);
        setResults(fetchedResults);
    }, [selectedQuery]);

    const handleCloseModal = () => {
        setSelectedQuery(null);
        setResults(null);
    };

    const showEditModal = (query) => {
        setSelectedQuery(query);
        setEditModal(true);
    };

    const handleRenameBookmark = (newName) => {
        const updatedBookmarks = bookmarks.map((bookmark) =>
            bookmark.query === selectedQuery
                ? { ...bookmark, name: newName }
                : bookmark
        );

        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
        setSelectedQuery(null);
    };

    const shouldShowEditModal = () => selectedQuery && editModal;
    const shouldShowViewModal = () => selectedQuery && !editModal;

    return (
        <div className="bookmark-container">
            <h2>Bookmarked Queries</h2>
            {bookmarks.length > 0 ? (
                <div className="bookmark-list">
                    {bookmarks.map(({ query, name }, index) => (
                        <BookmarkItem
                            key={index}
                            query={query}
                            name={name}
                            onAction={handleBookmarkAction}
                        />
                    ))}
                </div>
            ) : (
                <p>No bookmarked queries yet.</p>
            )}
            {shouldShowEditModal() && (
                <Modal onClose={() => setSelectedQuery(null)}>
                    <EditBookmark
                        bookmark={bookmarks.find(
                            (b) => b.query === selectedQuery
                        )}
                        onClose={() => setSelectedQuery(null)}
                        onSave={handleRenameBookmark}
                    />
                </Modal>
            )}
            {shouldShowViewModal() && (
                <Modal query={selectedQuery} onClose={handleCloseModal}>
                    {results && (
                        <ResultTable data={results} query={selectedQuery} />
                    )}
                </Modal>
            )}
        </div>
    );
};

export default Bookmarks;
