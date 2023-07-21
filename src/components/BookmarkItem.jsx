import truncateString from "../utils/truncateString";

const BookmarkItem = ({ query, name, onAction }) => {
    const truncatedName = name ? truncateString(name, 40) : "";
    const truncatedQuery = truncateString(query, 40);

    return (
        <div className="item bookmark-item">
            <div className="info bookmark-info">
                <p className="bookmark-name">
                    {truncatedName || truncatedQuery}
                </p>
            </div>
            <div className="button-container">
                <button
                    className="button remove-button"
                    onClick={() => onAction("remove", query)}
                >
                    Remove
                </button>
                <button
                    className="button view-button"
                    onClick={() => onAction("view", query)}
                >
                    View
                </button>
                <button
                    className="button execute-button"
                    onClick={() => onAction("execute", query)}
                >
                    Execute
                </button>
                <button
                    className="button edit-button"
                    onClick={() => onAction("edit", query)}
                >
                    Edit Name
                </button>
            </div>
        </div>
    );
};

export default BookmarkItem;
