import { useState } from "react";
import QueryInput from "../components/QueryInput";
import ResultTable from "../components/ResultTable";
import getQueryData from "../utils/getQueryData";

const Home = () => {
    const [results, setResults] = useState(null);

    const handleExecuteQuery = (query) => {
        const fetchedResults = getQueryData(query);
        setResults(fetchedResults);
    };

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
