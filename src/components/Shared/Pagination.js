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
                role="button"
                title="First Page"
                aria-label="First Page"
                aria-disabled={isPreviousDisabled}
            >
                <ChevronFirst aria-hidden="true" focusable="false" />
            </button>
            <button
                onClick={() => setPage(page - 1)}
                disabled={isPreviousDisabled}
                className="btn-primary"
                role="button"
                title="Previous Page"
                aria-label="Previous Page"
                aria-disabled={isPreviousDisabled}
            >
                <ChevronLeft aria-hidden="true" focusable="false" />
            </button>

            <span className="hidden md:block grow text-center text-gray-950">
                Page {page} of {totalPages}
            </span>

            <span className="md:hidden grow text-center text-gray-950">
                {page} of {totalPages}
            </span>

            <button
                onClick={() => setPage(page + 1)}
                disabled={isNextDisabled}
                className="btn-primary"
                role="button"
                title="Next Page"
                aria-label="Next Page"
                aria-disabled={isNextDisabled}
            >
                <ChevronRight aria-hidden="true" focusable="false" />
            </button>
            <button
                onClick={() => setPage(totalPages)}
                disabled={isNextDisabled}
                className="btn-primary"
                role="button"
                title="Last Page"
                aria-label="Last Page"
                aria-disabled={isNextDisabled}
            >
                <ChevronLast aria-hidden="true" focusable="false" />
            </button>
        </div>
    );
}

export default memo(Pagination);
