import truncateString from "../utils/truncateString";

const HistoryItem = ({ query, id, timestamp, onAction }) => {
    const truncatedQuery = truncateString(query, 40);
    return (
        <div className="history-item">
            <div className="item-info">
                <div>
                    <strong>Query:</strong>
                    {truncatedQuery}
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
