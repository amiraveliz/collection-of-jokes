import { useJokeStore } from "@/stores/useJokeStore";
import {
    ChevronFirst,
    ChevronLast,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function Pagination() {
    const { totalPages, page, setPage } = useJokeStore();

    return (
        <div className="flex items-center mt-4 text-sm">
            <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                className="hover:bg-gray-400/30 font-bold py-2 px-4 rounded"
            >
                <ChevronFirst />
            </button>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="hover:bg-gray-400/30 font-bold py-2 px-4 rounded"
            >
                <ChevronLeft />
            </button>

            <span className="grow text-center">
                Page {page} of {totalPages}
            </span>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="hover:bg-gray-400/30 font-bold py-2 px-4 rounded"
            >
                <ChevronRight />
            </button>
            <button
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                className="hover:bg-gray-400/30 font-bold py-2 px-4 rounded"
            >
                <ChevronLast />
            </button>
        </div>
    );
}
