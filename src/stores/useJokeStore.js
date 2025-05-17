import { create } from "zustand";

export const useJokeStore = create((set, get) => ({
    jokes: [],
    total: 0,
    page: 1,
    sort: { field: "id", direction: "asc" },
    totalPages: 0,

    setPage: (page) => set({ page }),

    setSort: (field) =>
        set((state) => ({
            sort: {
                field,
                direction:
                    state.sort.field === field && state.sort.direction === "asc"
                        ? "desc"
                        : "asc",
            },
        })),

    fetchJokes: async () => {
        const { page, sort } = get();
        const res = await fetch(
            `/api/jokes?page=${page}&limit=10&sortBy=${sort.field}&order=${sort.direction}`
        );
        const data = await res.json();
        set({
            jokes: data.items,
            total: data.total,
            totalPages: data.totalPages,
        });
    },
}));
