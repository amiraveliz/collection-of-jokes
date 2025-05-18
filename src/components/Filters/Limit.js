const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export default function Limit({ limit, setLimit }) {
    return (
        <select
            className="py-2 px-4 border border-gray-300 rounded"
            value={limit}
            onChange={(event) => {
                setLimit(event.target.value);
            }}
        >
            {PAGE_SIZE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}
