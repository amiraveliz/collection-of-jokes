export default function TableFallback({ loading, error, hasJokes }) {
    if (!loading && error)
        return (
            <div className="p-8">Failed to load jokes. Please try again</div>
        );
    if (loading) return <div className="p-8">Loading...</div>;
    if (!hasJokes) return <div className="p-8">No jokes found.</div>;
    return null;
}
