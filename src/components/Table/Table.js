"use client";

import { useJokeStore } from "@/stores/useJokeStore";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect } from "react";
import Pagination from "./Pagination";

export default function Table() {
    const { jokes, page, sort, setSort, fetchJokes } = useJokeStore();

    useEffect(() => {
        fetchJokes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, sort]);

    const handleSort = (field) => {
        setSort(field);
    };

    if (jokes.length === 0) return <div className="p-8">Loading...</div>;

    return (
        <div className="w-full max-w-4xl mx-auto py-4">
            <table className="w-[inherit] border border-gray-200">
                <thead className=" text-gray-700 hidden md:table-header-group">
                    <tr>
                        {[
                            { key: "id", label: "Id", width: "90px" },
                            { key: "type", label: "Type", width: "140px" },
                            { key: "setup", label: "Setup", width: "auto" },
                        ].map((col) => (
                            <th
                                key={col.key}
                                onClick={() => handleSort(col.key)}
                                scope="col"
                                style={{ width: col.width }}
                                className="p-3 cursor-pointer select-none border-b border-gray-200"
                                aria-sort={
                                    sort.field === col.key
                                        ? sort.direction === "asc"
                                            ? "ascending"
                                            : "descending"
                                        : "none"
                                }
                            >
                                <div className="flex items-center">
                                    {col.label}
                                    {sort.field === col.key &&
                                        (sort.direction === "asc" ? (
                                            <ArrowUp size={16} />
                                        ) : (
                                            <ArrowDown size={16} />
                                        ))}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="">
                    {jokes.map((row) => (
                        <tr
                            key={row.id}
                            className="flex flex-col md:table-row border-b border-gray-200"
                        >
                            <td className="p-3 md:p-2 relative md:table-cell">
                                {row.id}
                            </td>
                            <td className="p-3 md:p-2 relative md:table-cell">
                                {row.type}
                            </td>
                            <td className="p-3 md:p-2 relative md:table-cell">
                                {row.setup} Punchline: {row.punchline}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination />
        </div>
    );
}
