import { useJokeStore } from "@/stores/useJokeStore";
import Select from "../Shared/Select";
import { useShallow } from "zustand/react/shallow";

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
            text="Select limit of rows per page"
        />
    );
}
