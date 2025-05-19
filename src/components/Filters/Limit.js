import { useShallow } from "zustand/react/shallow";

import { useJokeStore } from "@/stores/useJokeStore";
import Select from "../Shared/Select";

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export default function Limit() {
    const { limit, setLimit } = useJokeStore(
        useShallow((state) => ({
            limit: state.limit,
            setLimit: state.setLimit,
        }))
    );

    return (
        <Select
            options={PAGE_SIZE_OPTIONS}
            value={limit}
            setValue={setLimit}
            description="Select a limit of rows per page"
        />
    );
}
