const MAX_QUERY_LENGTH = 2000;
const ALLOWED_SYMBOLS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.()*-_ \n";

const isQueryValid = (query) => {
    const trimmedQuery = query.trim();

    if (trimmedQuery === "") {
        return {
            valid: false,
            errorMessage: "Query cannot be empty.",
        };
    }

    if (trimmedQuery.length > MAX_QUERY_LENGTH) {
        return {
            valid: false,
            errorMessage: "Query exceeds the maximum allowed length.",
        };
    }

    for (const char of trimmedQuery) {
        if (!ALLOWED_SYMBOLS.includes(char)) {
            return {
                valid: false,
                errorMessage: `Invalid character ${char} found in the query.`,
            };
        }
    }

    return {
        valid: true,
        errorMessage: "",
    };
};

export default isQueryValid;
