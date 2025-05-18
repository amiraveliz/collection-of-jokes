import { useEffect, useState } from "react";

const useDebounce = (dependency) => {
    const [value, setValue] = useState(dependency);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setValue(dependency);
        }, 500);

        return () => window.clearTimeout(timeoutId);
    }, [dependency]);

    return value;
};

export default useDebounce;
