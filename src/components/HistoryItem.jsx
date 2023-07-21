const HistoryItem = ({ query, id, timestamp, onAction }) => {
    return (
        <div className="history-item">
            <div className="item-info">
                <div>
                    <strong>Query:</strong>{" "}
                    {query.length > 20 ? query.substring(0, 20) + "..." : query}
                </div>
                <div>
                    <strong>Timestamp:</strong> {timestamp}
                </div>
            </div>
            <button onClick={() => onAction("view", query, id)}>View</button>
            <button onClick={() => onAction("execute", query, id)}>
                Execute
            </button>
            <button onClick={() => onAction("remove", query, id)}>
                Remove
            </button>
        </div>
    );
};

export default HistoryItem;
