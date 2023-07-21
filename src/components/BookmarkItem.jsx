import truncateString from "../utils/truncateString";

const BookmarkItem = ({ query, name, onAction }) => {
    const truncatedName = name ? truncateString(name, 40) : "";
    const truncatedQuery = truncateString(query, 40);

    return (
        <div className="bookmark-item">
            <div className="bookmark-info">
                <p className="bookmark-name">
                    {truncatedName || truncatedQuery}
                </p>
            </div>
            <div className="button-container">
                <button
                    className="remove-button"
                    onClick={() => onAction("remove", query)}
                >
                    Remove
                </button>
                <button
                    className="view-button"
                    onClick={() => onAction("view", query)}
                >
                    View
                </button>
                <button
                    className="execute-button"
                    onClick={() => onAction("execute", query)}
                >
                    Execute
                </button>
                <button
                    className="edit-button"
                    onClick={() => onAction("edit", query)}
                >
                    Edit Name
                </button>
            </div>
        </div>
    );
};

export default BookmarkItem;
