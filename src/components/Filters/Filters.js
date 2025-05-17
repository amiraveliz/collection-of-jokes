"use client";

import { useJokeStore } from "@/stores/useJokeStore";

const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export default function Filters() {
    const { limit, setLimit } = useJokeStore();

    return (
        <div className="w-full max-w-4xl mx-auto text-black/90">
            <select
                className="py-2 px-4 border border-gray-300 rounded mb-2 block ml-auto"
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
        </div>
    );
}
