import { memo } from "react";

function TableFallback({ loading, error, hasRows }) {
    if (loading && !hasRows) {
        return <div className="p-8">Loading...</div>;
    }

    if (error && !hasRows) {
        return (
            <div className="p-8">Failed to load items. Please try again</div>
        );
    }

    if (!loading && !error && !hasRows) {
        return <div className="p-8">No items found.</div>;
    }

    return null;
}

export default memo(TableFallback);
