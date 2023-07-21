import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import ResultTable from "../components/ResultTable";
import getQueryData from "../utils/getQueryData";
import QueryView from "../components/QueryView";
import HistoryItem from "../components/HistoryItem";

const History = () => {
    const [results, setResults] = useState(null);
    const [historyList, setHistoryList] = useState([]);
    const [selectedQuery, setSelectedQuery] = useState(null);
    const [viewQueryModal, setViewQueryModal] = useState(false);

    useEffect(() => {
        const historyData = JSON.parse(localStorage.getItem("history")) || [];

        const sortedHistory = historyData.slice().sort((a, b) => {
            const dateA = a.timestamp.split(" ")[0];
            const dateB = b.timestamp.split(" ")[0];
            const timeA = a.timestamp.split(" ")[1];
            const timeB = b.timestamp.split(" ")[1];

            return dateB.localeCompare(dateA) || timeB.localeCompare(timeA);
        });

        setHistoryList(sortedHistory);
    }, []);

    useEffect(() => {
        const fetchedResults = getQueryData(selectedQuery);
        setResults(fetchedResults);
    }, [selectedQuery]);

    const handleHistoryAction = (action, query, id) => {
        switch (action) {
            case "remove":
                removeItem(id);
                break;
            case "view":
                viewQuery(query);
                break;
            case "execute":
                executeQuery(query);
                break;
            default:
                break;
        }
    };

    const removeItem = (id) => {
        const updatedHistory = historyList.filter((item) => item.id !== id);
        localStorage.setItem("history", JSON.stringify(updatedHistory));
        setHistoryList(updatedHistory);
    };

    const removeAllItems = () => {
        localStorage.removeItem("history");
        setHistoryList([]);
    };

    const executeQuery = (query) => {
        setSelectedQuery(query);
        setViewQueryModal(false);
    };

    const viewQuery = (query) => {
        setSelectedQuery(query);
        setViewQueryModal(true);
    };

    const handleCloseModal = () => {
        setSelectedQuery(null);
        setResults(null);
    };

    const shouldShowExecuteModal = () => selectedQuery && !viewQueryModal;
    const shouldShowViewModal = () => selectedQuery && viewQueryModal;

    return (
        <div className="history-container">
            <h2>Query History</h2>

            {historyList.length > 0 ? (
                <button
                    onClick={removeAllItems}
                    className="clear-history-button"
                >
                    Clear History
                </button>
            ) : (
                <p className="no-history-message">No history items yet.</p>
            )}

            {historyList.map(({ query, timestamp, id }) => (
                <HistoryItem
                    key={id}
                    id={id}
                    query={query}
                    timestamp={timestamp}
                    onAction={handleHistoryAction}
                />
            ))}

            {shouldShowViewModal() && (
                <Modal query={selectedQuery} onClose={handleCloseModal}>
                    <QueryView query={selectedQuery} />
                </Modal>
            )}

            {shouldShowExecuteModal() && (
                <Modal query={selectedQuery} onClose={handleCloseModal}>
                    {results ? (
                        <ResultTable data={results} query={selectedQuery} />
                    ) : (
                        <p className="data-not-found-message">
                            Unable to Fetch Data
                        </p>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default History;
