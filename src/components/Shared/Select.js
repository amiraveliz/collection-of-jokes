import { ChevronDown } from "lucide-react";
import { memo } from "react";

function Select({ options, value, setValue, text }) {
    return (
        <div className="relative inline-block">
            <select
                className="w-[72px] appearance-none py-2 px-4 border border-gray-300 dark:border-secondary/50 rounded cursor-pointer"
                value={value}
                aria-label={text}
                role="listbox"
                aria-controls="select-options"
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option} role="option">
                        {option}
                    </option>
                ))}
            </select>
            <ChevronDown
                size={16}
                aria-hidden="true"
                focusable="false"
                className="absolute -translate-y-2/4 pointer-events-none right-4 top-2/4"
            />
        </div>
    );
}

export default memo(Select);
