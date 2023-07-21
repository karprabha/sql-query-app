import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import VirtualizedRow from "./VirtualizedRow";

const VirtualizedTable = ({ columns, rows }) => {
    return (
        <div className="virtualized-table-container">
            <div className="virtualized-table-header">
                <table style={{ width: "100%", tableLayout: "fixed" }}>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} className="table-cell">
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="virtualized-table-body">
                <div style={({ width: "60vw" }, { height: "60vw" })}>
                    <AutoSizer>
                        {({ height, width }) => (
                            <FixedSizeList
                                height={height}
                                itemCount={rows.length}
                                itemSize={40}
                                width={width}
                                itemData={rows}
                            >
                                {VirtualizedRow}
                            </FixedSizeList>
                        )}
                    </AutoSizer>
                </div>
            </div>
        </div>
    );
};

export default VirtualizedTable;
