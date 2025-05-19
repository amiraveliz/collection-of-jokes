import { ArrowDown, ArrowUp } from "lucide-react";
import { memo } from "react";
import TableFallback from "./TableFallback";

function TableContent({
    columns,
    rows,
    sortField,
    sortDirection,
    handleSort,
    loading,
    error,
    totalPages,
}) {
    return (
        <table
            className="w-full table-fixed border border-gray-200"
            role="table"
            aria-label="Collection of Jokes"
        >
            <thead className="hidden md:table-header-group" role="rowgroup">
                <tr role="row">
                    {columns.map((col) => (
                        <th
                            key={col.key}
                            scope="col"
                            style={{ width: col.width }}
                            className="p-2 border-b border-gray-200"
                            role="columnheader"
                            aria-sort={
                                sortField === col.key
                                    ? sortDirection === "asc"
                                        ? "ascending"
                                        : "descending"
                                    : "none"
                            }
                        >
                            <button
                                onClick={() => handleSort(col.key)}
                                disabled={totalPages === 0}
                                className="flex items-center gap-1 w-full text-left cursor-pointer"
                                role="button"
                            >
                                {col.label}
                                {sortField === col.key && (
                                    <span className="transition-transform duration-200">
                                        {sortDirection === "asc" ? (
                                            <ArrowUp size={16} />
                                        ) : (
                                            <ArrowDown size={16} />
                                        )}
                                    </span>
                                )}
                            </button>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody role="rowgroup">
                {rows.length > 0 &&
                    rows.map((row) => (
                        <tr
                            key={row.id}
                            role="row"
                            className="flex flex-col md:table-row border-b border-gray-200"
                        >
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className="p-2 relative md:table-cell"
                                    role="cell"
                                    data-label={col.label}
                                >
                                    <span className="md:hidden font-bold">
                                        {col.label}:{" "}
                                    </span>
                                    {row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                {rows.length === 0 && (
                    <tr
                        role="row"
                        className="flex flex-col md:table-row border-b border-gray-200"
                    >
                        <td
                            colSpan={columns.length}
                            className="p-2 text-center text-gray-500"
                            role="cell"
                        >
                            <TableFallback loading={loading} error={error} />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default memo(TableContent);
