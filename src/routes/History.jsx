import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import ResultTable from "../components/ResultTable";
import getQueryData from "../utils/getQueryData";

const History = () => {
    const [results, setResults] = useState(null);
    const [historyList, setHistoryList] = useState([]);
    const [selectedQuery, setSelectedQuery] = useState(null);

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

    const handleViewQuery = (query) => {
        setSelectedQuery(query);
    };

    const handleCloseModal = () => {
        setSelectedQuery(null);
        setResults(null);
    };

    return (
        <div className="history-container">
            <h2>Query History</h2>
            <ul>
                {historyList.map(({ query, timestamp }, index) => (
                    <li key={index}>
                        <div>
                            <strong>Query:</strong> {query}
                        </div>
                        <div>
                            <strong>Timestamp:</strong> {timestamp}
                        </div>
                        <button onClick={() => handleViewQuery(query)}>
                            View
                        </button>
                    </li>
                ))}
            </ul>

            {selectedQuery && (
                <Modal query={selectedQuery} onClose={handleCloseModal}>
                    {results && (
                        <ResultTable data={results} query={selectedQuery} />
                    )}{" "}
                </Modal>
            )}
        </div>
    );
};

export default History;
