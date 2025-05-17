"use client";

import { useJokeStore } from "@/stores/useJokeStore";
import { useEffect } from "react";

export default function Home() {
    const { jokes, totalPages, page, sort, setPage, setSort, fetchJokes } =
        useJokeStore();

    useEffect(() => {
        fetchJokes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, sort]);

    const handleSort = (field) => {
        setSort(field);
    };

    if (jokes.length === 0) return <div className="p-8">Loading...</div>;

    return (
        <div className="p-8 flex justify-center flex-col items-center">
            <h1 className="text-6xl font-light text-center mb-4">
                Collection of Jokes
            </h1>
            <div className="p-4">
                <table className="w-full border border-gray-200">
                    <thead className=" text-gray-700 hidden md:table-header-group">
                        <tr>
                            {["id", "type", "setup", "punchline"].map(
                                (col, index) => (
                                    <th
                                        key={index}
                                        onClick={() => handleSort(col)}
                                        scope="col"
                                        className="p-3 cursor-pointer select-none border-b border-gray-200"
                                        aria-sort={
                                            sort.field === col
                                                ? sort.direction === "asc"
                                                    ? "ascending"
                                                    : "descending"
                                                : "none"
                                        }
                                    >
                                        <div className="text-center gap-1">
                                            {col}
                                            {sort.field === col &&
                                                (sort.direction === "asc"
                                                    ? "▲"
                                                    : "▼")}
                                        </div>
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody className="">
                        {jokes.map((row) => (
                            <tr
                                key={row.id}
                                className="flex flex-col md:table-row border-b border-gray-200"
                            >
                                <td className="text-center p-3 md:p-2 relative md:table-cell">
                                    {row.id}
                                </td>
                                <td className="text-center p-3 md:p-2 relative md:table-cell">
                                    {row.type}
                                </td>
                                <td className="text-center p-3 md:p-2 relative md:table-cell">
                                    {row.setup}
                                </td>
                                <td className="text-center p-3 md:p-2 relative md:table-cell">
                                    {row.punchline}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between items-center mt-4 text-sm">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="bg-gray-400/90 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded "
                    >
                        Prev
                    </button>
                    <span>
                        Page {page} of {totalPages}
                    </span>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                        className="bg-gray-400/90 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
