import { allJokes } from "./handler";

export function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    const jokes = allJokes();

    if (id) {
        const joke = jokes.find((j) => j.id === id);
        if (joke) {
            return Response.json({ joke }, { status: 200 });
        } else {
            return Response.json({ error: "Not Found" }, { status: 404 });
        }
    }

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const sortBy = searchParams.get("sortBy") || "id";
    const order = searchParams.get("order") || "asc";

    const sorted = [...jokes].sort((a, b) => {
        if (a[sortBy].toString().localeCompare(b[sortBy].toString()) < 0)
            return order === "asc" ? -1 : 1;
        if (a[sortBy].toString().localeCompare(b[sortBy].toString()) > 0)
            return order === "asc" ? 1 : -1;
        return 0;
    });

    const start = (page - 1) * limit;
    const paginated = sorted.slice(start, start + limit);
    const totalPages = Math.ceil(jokes.length / limit);

    return Response.json(
        {
            items: paginated,
            total: paginated.length,
            totalPages,
        },
        { status: 200 }
    );
}
