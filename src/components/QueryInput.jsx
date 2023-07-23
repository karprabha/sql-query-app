import { useState } from "react";
import isQueryValid from "../utils/queryValidator";

const QueryInput = ({ onExecute, onClear }) => {
    const [query, setQuery] = useState("");
    const [isValidQuery, setIsValidQuery] = useState(false);
    const [selectedPredefinedQuery, setSelectedPredefinedQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const predefinedQueries = [
        "(small-dataset) SELECT * FROM Employee",
        "(medium-dataset) SELECT * FROM Student",
        "(large-dataset) SELECT * FROM Product",
    ];

    const handleQueryChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        setIsValidQuery(isQueryValid(inputValue).valid);
        if (isQueryValid(inputValue).valid) setErrorMessage("");
        else setErrorMessage(isQueryValid(inputValue).errorMessage);
    };

    const handleExecute = (event) => {
        event.preventDefault();
        if (isValidQuery) {
            onExecute(query);
        }
    };

    const handleClear = () => {
        setQuery("");
        setErrorMessage("");
        setIsValidQuery(false);
        onClear();
    };

    const handlePredefinedQueryChange = (event) => {
        const selectedQuery = event.target.value;

        setSelectedPredefinedQuery(selectedQuery);
        setQuery(selectedQuery);
        setIsValidQuery(isQueryValid(selectedQuery).valid);
        if (isQueryValid(selectedQuery).valid) setErrorMessage("");
        else setErrorMessage(isQueryValid(selectedQuery).errorMessage);
    };

    return (
        <form onSubmit={handleExecute}>
            <div className="input-container">
                <textarea
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Enter your SQL query..."
                />
                <div className="button-container">
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
                </div>

                <div className="input-options-and-btns">
                    <div className="input-btn-contianer">
                        <button
                            type="submit"
                            className={
                                isValidQuery
                                    ? "execute-button valid"
                                    : "execute-button"
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
                    </div>
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
            </div>
        </form>
    );
};

export default QueryInput;
