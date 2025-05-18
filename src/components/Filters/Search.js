import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

function Search({ setSearch }) {
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearchValue = useDebounce(searchValue);

    useEffect(() => {
        setSearch(debouncedSearchValue);
    }, [debouncedSearchValue, setSearch]);

    return (
        <div className="grow">
            <input
                placeholder="Search..."
                type="text"
                value={searchValue}
                className="w-full py-2 px-4 border border-gray-300 rounded"
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
        </div>
    );
}

export default Search;
