"use client";

import Filters from "@/components/Filters/Filters";
import JokesTable from "@/components/JokesTable/JokesTable";
import { useJokeStore } from "@/stores/useJokeStore";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

export default function Home() {
    const { sort, page, limit, search, fetchJokes } = useJokeStore(
        useShallow((state) => ({
            jokes: state.jokes,
            sort: state.sort,
            page: state.page,
            limit: state.limit,
            search: state.search,
            fetchJokes: state.fetchJokes,
        }))
    );

    useEffect(() => {
        fetchJokes();
    }, [page, sort.field, sort.direction, limit, search, fetchJokes]);

    return (
        <div className="p-8 flex justify-start flex-col items-center min-h-screen bg-secondary/20">
            <h1 className="text-6xl font-light text-center mb-4 text-primary-300">
                Collection of Jokes
            </h1>
            <Filters />
            <JokesTable />
        </div>
    );
}
