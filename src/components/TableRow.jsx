const TableRow = ({ row }) => {
    return (
        <tr>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    );
};

export default TableRow;
