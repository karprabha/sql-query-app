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
            <button
                className="remove-button"
                onClick={() => onAction("remove", query)}
            >
                Remove
            </button>
            <button onClick={() => onAction("view", query)}>View</button>
            <button onClick={() => onAction("execute", query)}>Execute</button>
            <button onClick={() => onAction("edit", query)}>Edit Name</button>
        </div>
    );
};

export default BookmarkItem;
