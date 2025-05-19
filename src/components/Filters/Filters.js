import Limit from "./Limit";
import SearchFilter from "./SearchFilter";

export default function Filters() {
    return (
        <div className="w-full max-w-4xl mx-auto flex gap-4">
            <SearchFilter />
            <Limit />
        </div>
    );
}
