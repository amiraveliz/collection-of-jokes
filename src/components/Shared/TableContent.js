import { ArrowDown, ArrowUp } from "lucide-react";
import { memo } from "react";

function TableContent({ columns, rows, sortField, sortDirection, handleSort }) {
    return (
        <table className="w-full table-fixed border border-gray-200">
            <thead className="hidden md:table-header-group">
                <tr>
                    {columns.map((col) => (
                        <th
                            key={col.key}
                            scope="col"
                            style={{ width: col.width }}
                            className="p-2 border-b border-gray-200"
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
                                className="flex items-center gap-1 w-full text-left cursor-pointer"
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
            <tbody className="">
                {rows.map((row) => (
                    <tr
                        key={row.id}
                        className="flex flex-col md:table-row border-b border-gray-200"
                    >
                        {columns.map((col) => (
                            <td
                                key={col.key}
                                className="p-2 relative md:table-cell"
                            >
                                {row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default memo(TableContent);
