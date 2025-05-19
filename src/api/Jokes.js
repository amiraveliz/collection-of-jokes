const JokesAPI = {
    getJokes: async ({ page, limit, sort, search, signal }) => {
        try {
            const params = new URLSearchParams({
                page,
                limit,
                sortBy: sort.field,
                order: sort.direction,
                search: search,
            });
            const response = await fetch(`/api/jokes?${params.toString()}`, {
                signal,
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Failed to fetch jokes");
            }

            return {
                jokes: data.items,
                totalPages: data.totalPages,
            };
        } catch (error) {
            return {
                error: error.message,
            };
        }
    },
};

export default JokesAPI;
