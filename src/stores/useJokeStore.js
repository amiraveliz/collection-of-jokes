import JokesAPI from "@/api/Jokes";
import { create } from "zustand";

let abortController = null;

export const useJokeStore = create((set, get) => ({
    jokes: [],
    page: 1,
    limit: 10,
    sort: { field: "id", direction: "asc" },
    totalPages: 0,
    search: "",
    loading: false,
    error: null,

    setPage: (page) => set({ page }),

    setLimit: (limit) => set({ limit, page: 1 }),

    setSearch: (search) => set({ search, page: 1 }),

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
        get().abortFetch();
        abortController = new AbortController();
        const signal = abortController.signal;

        set({ loading: true, error: null });

        const { page, sort, limit, search } = get();

        const data = await JokesAPI.getJokes({
            page,
            limit,
            sort,
            search,
            signal,
        });

        if (data.error) {
            set({
                loading: false,
                error: data.error,
            });
            return;
        }

        set({
            jokes: data.jokes,
            totalPages: data.totalPages,
            loading: false,
        });
    },

    abortFetch: () => {
        if (abortController) {
            abortController.abort();
        }
    },
}));
