import truncateString from "../utils/truncateString";

const HistoryItem = ({ query, id, timestamp, onAction }) => {
    const truncatedQuery = truncateString(query, 40);
    return (
        <div className="item history-item">
            <div className="info item-info">
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
                    className="button view-button"
                    onClick={() => onAction("view", query, id)}
                >
                    View
                </button>
                <button
                    className="button execute-button"
                    onClick={() => onAction("execute", query, id)}
                >
                    Execute
                </button>
                <button
                    className="button remove-button"
                    onClick={() => onAction("remove", query, id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default HistoryItem;
