import { create } from "zustand";

export const useJokeStore = create((set, get) => ({
    jokes: [],
    total: 0,
    page: 1,
    limit: 10,
    sort: { field: "id", direction: "asc" },
    totalPages: 0,
    search: "",
    loading: false,

    fetchJokes: async () => {
        set({ loading: true });
        const { page, sort, limit, search } = get();
        const res = await fetch(
            `/api/jokes?page=${page}&limit=${limit}&sortBy=${sort.field}&order=${sort.direction}&search=${search}`
        );
        const data = await res.json();
        set({
            jokes: data.items,
            total: data.total,
            totalPages: data.totalPages,
        });
        set({ loading: false });
    },

    setPage: async (page) => set({ page }),

    setLimit: async (limit) => set({ limit, page: 1 }),

    setSearch: async (search) => set({ search, page: 1 }),

    setSort: async (field) =>
        set((state) => ({
            sort: {
                field,
                direction:
                    state.sort.field === field && state.sort.direction === "asc"
                        ? "desc"
                        : "asc",
            },
        })),
}));
