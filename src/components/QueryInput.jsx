import { useState } from "react";
import isQueryValid from "../utils/queryValidator";

const QueryInput = ({ onExecute, onClear }) => {
    const [query, setQuery] = useState("");
    const [isValidQuery, setIsValidQuery] = useState(false);
    const [selectedPredefinedQuery, setSelectedPredefinedQuery] = useState("");

    const predefinedQueries = ["q1", "q2"];

    const handleQueryChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        setIsValidQuery(isQueryValid(inputValue));
    };

    const handleExecute = (event) => {
        event.preventDefault();
        if (isValidQuery) {
            onExecute(query);
        }
    };

    const handleClear = () => {
        setQuery("");
        setIsValidQuery(false);
        onClear();
    };

    const handlePredefinedQueryChange = (event) => {
        const selectedQuery = event.target.value;

        setSelectedPredefinedQuery(selectedQuery);
        setQuery(selectedQuery);
        setIsValidQuery(isQueryValid(selectedQuery));
    };

    return (
        <form onSubmit={handleExecute}>
            <div className="input-container">
                <textarea
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Enter your SQL query..."
                    className={isValidQuery ? "valid" : "invalid"}
                />

                <button
                    type="submit"
                    className={
                        isValidQuery ? "execute-button valid" : "execute-button"
                    }
                >
                    Execute
                </button>
                <button
                    type="button"
                    onClick={handleClear}
                    className="clear-button"
                >
                    Clear
                </button>
                <select
                    value={selectedPredefinedQuery}
                    onChange={handlePredefinedQueryChange}
                >
                    <option value="">Select a predefined query</option>
                    {predefinedQueries.map((query, index) => (
                        <option key={index} value={query}>
                            {query}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};

export default QueryInput;
