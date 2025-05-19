import { memo } from "react";

function TableFallback({ loading, error }) {
    if (loading) {
        return <div className="p-8">Loading...</div>;
    }

    if (!loading && !error) {
        return <div className="p-8">No items found.</div>;
    }

    return null;
}

export default memo(TableFallback);
