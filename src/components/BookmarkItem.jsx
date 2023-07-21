const BookmarkItem = ({ query, name, onAction }) => {
    return (
        <div className="bookmark-item">
            <div className="bookmark-info">
                <p className="bookmark-name">
                    {name ||
                        (query.length > 20
                            ? query.substring(0, 20) + "..."
                            : query)}
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
