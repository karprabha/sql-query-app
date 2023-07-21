const VirtualizedRow = ({ index, style, data }) => {
    const row = data[index];
    return (
        <div style={style} className="table-row">
            <table style={{ width: "100%", tableLayout: "fixed" }}>
                <tbody>
                    <tr>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="table-cell">
                                {cell}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default VirtualizedRow;
