import { create } from "zustand";

export const useJokeStore = create((set, get) => ({
    jokes: [],
    total: 0,
    page: 1,
    limit: 10,
    sort: { field: "id", direction: "asc" },
    totalPages: 0,

    setPage: (page) => set({ page }),

    setLimit: (limit) => set({ limit, page: 1 }),

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
        const { page, sort, limit } = get();
        const res = await fetch(
            `/api/jokes?page=${page}&limit=${limit}&sortBy=${sort.field}&order=${sort.direction}`
        );
        const data = await res.json();
        set({
            jokes: data.items,
            total: data.total,
            totalPages: data.totalPages,
        });
    },
}));
