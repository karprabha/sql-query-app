import { useState, useEffect } from "react";
import QueryInput from "../components/QueryInput";
import ResultTable from "../components/ResultTable";
import getQueryData from "../utils/getQueryData";

const Home = () => {
    const [results, setResults] = useState(null);
    const [executedQuery, setExecutedQuery] = useState({});

    const handleExecuteQuery = (query) => {
        const fetchedResults = getQueryData(query);
        setResults(fetchedResults);

        const timestamp = new Date().toLocaleString();
        setExecutedQuery({ query, timestamp });
    };

    useEffect(() => {
        if (!executedQuery.query) return;
        const historyData = JSON.parse(localStorage.getItem("history")) || [];
        const updatedHistory = [...historyData, executedQuery];
        localStorage.setItem("history", JSON.stringify(updatedHistory));
    }, [executedQuery]);

    const handleClearResults = () => {
        setResults(null);
    };

    return (
        <div className="home-container">
            <QueryInput
                onExecute={handleExecuteQuery}
                onClear={handleClearResults}
            />
            {results && <ResultTable data={results} />}{" "}
        </div>
    );
};

export default Home;
