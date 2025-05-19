import { memo } from "react";

function Select({ options, value, setValue }) {
    return (
        <select
            className="py-2 px-4 border border-gray-300 rounded cursor-pointer"
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default memo(Select);
