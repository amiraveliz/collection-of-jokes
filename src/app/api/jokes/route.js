import { allJokes } from "./handler";

export function GET(request) {
    const searchParams = request.nextUrl.searchParams;

    const jokes = allJokes();

    const id = searchParams.get("id");

    if (id) {
        const joke = jokes.find((j) => j.id === id);
        if (joke) {
            return Response.json({ joke }, { status: 200 });
        } else {
            return Response.json({ error: "Not Found" }, { status: 404 });
        }
    }

    const searchValue = searchParams.get("search") || "";
    let filteredJokes = [...jokes];

    if (searchValue) {
        filteredJokes = jokes.filter(
            (joke) =>
                joke.setup.toLowerCase().includes(searchValue.toLowerCase()) ||
                joke.punchline
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                joke.type.toLowerCase().includes(searchValue.toLowerCase())
        );
        if (filteredJokes.length === 0) {
            return Response.json(
                {
                    items: [],
                    total: 0,
                    totalPages: 0,
                },
                { status: 200 }
            );
        }
    }

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const sortBy = searchParams.get("sortBy") || "id";
    const order = searchParams.get("order") || "asc";

    const sorted = filteredJokes.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return order === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return order === "asc" ? 1 : -1;
        return 0;
    });
    const start = (page - 1) * limit;
    const paginated = sorted.slice(start, start + limit);
    const totalPages = Math.ceil(filteredJokes.length / limit);

    return Response.json(
        {
            items: paginated,
            total: paginated.length,
            totalPages,
        },
        { status: 200 }
    );
}
