import { memo, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ToggleTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "";
        }
    }, [isDarkMode]);

    const handleToggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="max-w-4xl py-4 w-full mx-auto">
            <button
                className="ml-auto flex hover:opacity-70"
                role="button"
                title={`Toggle Theme to ${isDarkMode ? "Light" : "Dark"} Mode`}
                aria-label={`Toggle Theme to ${
                    isDarkMode ? "Light" : "Dark"
                } Mode`}
                onClick={handleToggleTheme}
            >
                {isDarkMode ? <Sun /> : <Moon />}
            </button>
        </div>
    );
}

export default memo(ToggleTheme);
