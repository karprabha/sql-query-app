import { useState, useEffect } from "react";

const History = () => {
    const [historyList, setHistoryList] = useState([]);

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

    return (
        <div className="history-container">
            <h2>Query History</h2>
            <ul>
                {historyList.map((item, index) => (
                    <li key={index}>
                        <div>
                            <strong>Query:</strong> {item.query}
                        </div>
                        <div>
                            <strong>Timestamp:</strong> {item.timestamp}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
