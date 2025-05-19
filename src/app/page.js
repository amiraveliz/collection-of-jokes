"use client";

import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import Filters from "@/components/Filters/Filters";
import JokesTable from "@/components/JokesTable/JokesTable";
import ToggleTheme from "@/components/ToggleTheme/ToggleTheme";
import { useJokeStore } from "@/stores/useJokeStore";

export default function Home() {
    const { sort, page, limit, search, fetchJokes } = useJokeStore(
        useShallow((state) => ({
            sort: state.sort,
            page: state.page,
            limit: state.limit,
            search: state.search,
            fetchJokes: state.fetchJokes,
        }))
    );

    useEffect(() => {
        fetchJokes();
    }, [sort.field, sort.direction, page, limit, search, fetchJokes]);

    return (
        <div className="p-4 md:p-8 flex justify-start flex-col items-center min-h-screen">
            <ToggleTheme />
            <h1 className="text-5xl sm:text-6xl font-light text-center mb-4 text-primary-300 dark:text-secondary/90 dark:font-semibold">
                Collection of Jokes
            </h1>
            <Filters />
            <JokesTable />
        </div>
    );
}
