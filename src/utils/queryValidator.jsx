const MAX_QUERY_LENGTH = 2000;
const ALLOWED_SYMBOLS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.()*-_ \n";

const isQueryValid = (query) => {
    if (query.trim() === "" || query.length > MAX_QUERY_LENGTH) {
        return false;
    }

    for (const char of query) {
        if (!ALLOWED_SYMBOLS.includes(char)) {
            return false;
        }
    }

    return true;
};

export default isQueryValid;
