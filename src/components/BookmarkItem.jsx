const BookmarkItem = ({ query, name, onAction }) => {
    return (
        <div className="bookmark-item">
            <div className="bookmark-info">
                <p className="bookmark-name">{name || query}</p>
            </div>
            <button
                className="remove-button"
                onClick={() => onAction("remove", query)}
            >
                Remove
            </button>
            <button onClick={() => onAction("view", query)}>View</button>
            <button onClick={() => onAction("edit", query)}>Edit Name</button>
        </div>
    );
};

export default BookmarkItem;
