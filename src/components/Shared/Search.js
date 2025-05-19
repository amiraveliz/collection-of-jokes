import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState, memo } from "react";

function Search({ setValue, text }) {
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearchValue = useDebounce(searchValue);

    useEffect(() => {
        setValue(debouncedSearchValue);
    }, [debouncedSearchValue, setValue]);

    return (
        <input
            placeholder={text}
            type="text"
            aria-label={text}
            value={searchValue}
            className="w-full py-2 px-4 border border-gray-300 dark:border-secondary/50 rounded"
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export default memo(Search);
