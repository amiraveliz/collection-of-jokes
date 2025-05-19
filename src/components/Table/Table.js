"use client";

import { useJokeStore } from "@/stores/useJokeStore";
import { ArrowDown, ArrowUp } from "lucide-react";
import Pagination from "../Shared/Pagination";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";
import TableFallback from "./TableFallback";

export default function Table() {
    const {
        jokes,
        loading,
        error,
        sort,
        setSort,
        page,
        setPage,
        totalPages,
        limit,
        search,
        fetchJokes,
    } = useJokeStore(
        useShallow((state) => ({
            jokes: state.jokes,
            loading: state.loading,
            sort: state.sort,
            setSort: state.setSort,
            page: state.page,
            setPage: state.setPage,
            totalPages: state.totalPages,
            limit: state.limit,
            search: state.search,
            fetchJokes: state.fetchJokes,
        }))
    );

    useEffect(() => {
        fetchJokes();
    }, [page, sort.field, sort.direction, limit, search, fetchJokes]);

    const handleSort = (field) => {
        setSort(field);
    };

    if (loading || error || jokes.length === 0) {
        return (
            <TableFallback
                loading={loading}
                error={error}
                hasData={jokes.length > 0}
            />
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto py-4 text-black/90">
            <table className="w-[inherit] border border-gray-200">
                <thead className=" hidden md:table-header-group">
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
                                className="p-2 cursor-pointer border-b border-gray-200"
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
                            <td className="p-2 relative md:table-cell">
                                {row.id}
                            </td>
                            <td className="p-2 relative md:table-cell">
                                {row.type}
                            </td>
                            <td className="p-2 relative md:table-cell">
                                <span className="font-bold block">
                                    {row.setup}
                                </span>{" "}
                                {row.punchline}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </div>
    );
}
