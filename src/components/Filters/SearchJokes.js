"use client";

import { useJokeStore } from "@/stores/useJokeStore";
import Search from "../Shared/Search";
import { useShallow } from "zustand/react/shallow";

function SearchJokes() {
    const { setSearch } = useJokeStore(
        useShallow((state) => ({ setSearch: state.setSearch }))
    );

    return (
        <div className="grow">
            <Search setValue={setSearch} />
        </div>
    );
}

export default SearchJokes;
