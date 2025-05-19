import { useEffect, useState, memo } from "react";

import useDebounce from "@/hooks/useDebounce";

function Search({ setValue, description }) {
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearchValue = useDebounce(searchValue);

    useEffect(() => {
        setValue(debouncedSearchValue);
    }, [debouncedSearchValue, setValue]);

    return (
        <input
            placeholder={description}
            type="text"
            aria-label={description}
            value={searchValue}
            className="w-full py-2 px-4 border border-gray-300 dark:border-secondary/50 rounded"
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export default memo(Search);
