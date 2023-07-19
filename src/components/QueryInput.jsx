import { useState } from "react";
import isQueryValid from "../utils/queryValidator";

const QueryInput = ({ onExecute, onClear }) => {
    const [query, setQuery] = useState("");
    const [isValidQuery, setIsValidQuery] = useState(false);

    const handleQueryChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        setIsValidQuery(isQueryValid(inputValue));
    };

    const handleExecute = () => {
        if (isValidQuery) {
            onExecute(query);
        }
    };

    const handleClear = () => {
        setQuery("");
        setIsValidQuery(false);
        onClear();
    };

    return (
        <div className="input-container">
            <textarea
                value={query}
                onChange={handleQueryChange}
                placeholder="Enter your SQL query..."
                className={isValidQuery ? "valid" : "invalid"}
            />
            <button
                onClick={handleExecute}
                className={
                    isValidQuery ? "execute-button valid" : "execute-button"
                }
            >
                Execute
            </button>
            <button onClick={handleClear} className="clear-button">
                Clear
            </button>
        </div>
    );
};

export default QueryInput;
