import {
    ChevronFirst,
    ChevronLast,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { memo } from "react";

function Pagination({ totalPages, page, setPage }) {
    const isPreviousDisabled = page === 1 || totalPages === 0;
    const isNextDisabled = page === totalPages || totalPages === 0;

    return (
        <div className="flex gap-1 items-center mt-4 text-sm">
            <button
                onClick={() => setPage(1)}
                disabled={isPreviousDisabled}
                className="btn-primary"
                title="First Page"
                aria-label="First Page"
                aria-disabled={isPreviousDisabled}
            >
                <ChevronFirst />
            </button>
            <button
                onClick={() => setPage(page - 1)}
                disabled={isPreviousDisabled}
                className="btn-primary"
                title="Previous Page"
                aria-label="Previous Page"
                aria-disabled={isPreviousDisabled}
            >
                <ChevronLeft />
            </button>

            <span className="hidden md:block grow text-center">
                Page {page} of {totalPages}
            </span>

            <span className="md:hidden grow text-center">
                {page} of {totalPages}
            </span>

            <button
                onClick={() => setPage(page + 1)}
                disabled={isNextDisabled}
                className="btn-primary"
                title="Next Page"
                aria-label="Next Page"
                aria-disabled={isNextDisabled}
            >
                <ChevronRight />
            </button>
            <button
                onClick={() => setPage(totalPages)}
                disabled={isNextDisabled}
                className="btn-primary"
                title="Last Page"
                aria-label="Last Page"
                aria-disabled={isNextDisabled}
            >
                <ChevronLast />
            </button>
        </div>
    );
}

export default memo(Pagination);
