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
            className="w-full table-fixed border border-gray-200 dark:border-secondary/50"
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
                            className="p-2 border-b border-gray-200 dark:border-secondary/50"
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
                                className="flex items-center gap-1 w-full text-left cursor-pointer hover:opacity-70"
                            >
                                {col.label}
                                {sortField === col.key &&
                                    (sortDirection === "asc" ? (
                                        <ArrowUp size={16} />
                                    ) : (
                                        <ArrowDown size={16} />
                                    ))}
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
                            className="flex flex-col md:table-row border-b border-gray-200 dark:border-secondary/50"
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
                        className="flex flex-col md:table-row border-b border-gray-200 dark:border-secondary/50"
                    >
                        <td
                            colSpan={columns.length}
                            className="p-2 text-center"
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
