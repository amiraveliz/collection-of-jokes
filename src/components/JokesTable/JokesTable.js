import { useJokeStore } from "@/stores/useJokeStore";
import Pagination from "../Shared/Pagination";
import { useShallow } from "zustand/react/shallow";
import TableContent from "../Shared/TableContent";
import TableFallback from "../Shared/TableFallback";

const COLUMNS = [
    { key: "id", label: "Id", width: "10%" },
    { key: "type", label: "Type", width: "15%" },
    { key: "setup", label: "Setup", width: "40%" },
    { key: "punchline", label: "Punchline", width: "35%" },
];

export default function JokesTable() {
    const { jokes, loading, error, sort, setSort, page, setPage, totalPages } =
        useJokeStore(
            useShallow((state) => ({
                jokes: state.jokes,
                loading: state.loading,
                error: state.error,
                sort: state.sort,
                setSort: state.setSort,
                page: state.page,
                setPage: state.setPage,
                totalPages: state.totalPages,
            }))
        );

    if (error) {
        return (
            <div className="p-8">Failed to load items. Please try again</div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto py-4 text-black/90">
            <TableContent
                columns={COLUMNS}
                rows={jokes}
                sortDirection={sort.direction}
                sortField={sort.field}
                handleSort={setSort}
                loading={loading}
                totalPages={totalPages}
            />
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </div>
    );
}
