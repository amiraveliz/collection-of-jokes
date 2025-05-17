import {
    ChevronFirst,
    ChevronLast,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function Pagination({ totalPages, page, setPage }) {
    return (
        <div className="flex gap-1 items-center mt-4 text-sm">
            <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                className="btn-primary"
            >
                <ChevronFirst />
            </button>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="btn-primary"
            >
                <ChevronLeft />
            </button>

            <span className="grow text-center text-gray-950">
                Page {page} of {totalPages}
            </span>

            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="btn-primary"
            >
                <ChevronRight />
            </button>
            <button
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                className="btn-primary"
            >
                <ChevronLast />
            </button>
        </div>
    );
}
