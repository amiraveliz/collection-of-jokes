"use client";

import { useJokeStore } from "@/stores/useJokeStore";
import { useEffect } from "react";

import Limit from "./Limit";
import Search from "./Search";

export default function Filters() {
    const { limit, setLimit, fetchJokes, search, setSearch } = useJokeStore();

    useEffect(() => {
        fetchJokes();
    }, [limit, search, fetchJokes]);

    return (
        <div className="w-full max-w-4xl mx-auto text-black/90 flex gap-4">
            <Search setSearch={setSearch} />
            <Limit limit={limit} setLimit={setLimit} />
        </div>
    );
}
