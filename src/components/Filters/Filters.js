import Limit from "./Limit";
import SearchJokes from "./SearchJokes";

export default async function Filters() {
    return (
        <div className="w-full max-w-4xl mx-auto text-black/90 flex gap-4">
            <SearchJokes />
            <Limit />
        </div>
    );
}
