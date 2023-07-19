const ResultTable = ({ data }) => {
    const renderRows = () => {
        return data.rows.map((row, index) => (
            <tr key={index}>
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                ))}
            </tr>
        ));
    };

    const renderHeaders = () => {
        return data.columns.map((column, index) => (
            <th key={index}>{column}</th>
        ));
    };
    return (
        <div>
            <div className="button-container">
                <button className="export-button">Export</button>
                <button className="bookmark-button">Bookmark</button>
            </div>
            <table>
                <thead>
                    <tr>{renderHeaders()}</tr>
                </thead>
                <tbody>{renderRows()}</tbody>
            </table>
        </div>
    );
};

export default ResultTable;
