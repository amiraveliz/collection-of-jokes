import { useShallow } from "zustand/react/shallow";
import { motion } from "motion/react";

import { useJokeStore } from "@/stores/useJokeStore";
import Pagination from "../Shared/Pagination";
import TableContent from "../Shared/TableContent";

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
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-4xl mx-auto py-4"
        >
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
        </motion.div>
    );
}
