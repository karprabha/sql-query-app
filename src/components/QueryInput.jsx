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
            </div>
        </form>
    );
};

export default QueryInput;
