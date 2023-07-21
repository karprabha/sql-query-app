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
            <div className="button-container">
                <button
                    className="view-button"
                    onClick={() => onAction("view", query, id)}
                >
                    View
                </button>
                <button
                    className="execute-button"
                    onClick={() => onAction("execute", query, id)}
                >
                    Execute
                </button>
                <button
                    className="remove-button"
                    onClick={() => onAction("remove", query, id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default HistoryItem;
