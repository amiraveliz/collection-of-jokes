import { useShallow } from "zustand/react/shallow";

import { useJokeStore } from "@/stores/useJokeStore";
import Search from "../Shared/Search";

function SearchFilter() {
    const { setSearch } = useJokeStore(
        useShallow((state) => ({ setSearch: state.setSearch }))
    );

    return (
        <div className="grow">
            <Search setValue={setSearch} description="Search for a joke..." />
        </div>
    );
}

export default SearchFilter;
