"use client";

import { useTheme } from "~hooks";

export default function SwitchThemeButton() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      className="overflow-hidden"
      type="button"
      aria-label="switch theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          key="sun icon"
          className="icon switch-theme-nav icon-tabler icon-tabler-sun-high"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
          <path d="M6.343 17.657l-1.414 1.414"></path>
          <path d="M6.343 6.343l-1.414 -1.414"></path>
          <path d="M17.657 6.343l1.414 -1.414"></path>
          <path d="M17.657 17.657l1.414 1.414"></path>
          <path d="M4 12h-2"></path>
          <path d="M12 4v-2"></path>
          <path d="M20 12h2"></path>
          <path d="M12 20v2"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          key="moon icon"
          className="icon switch-theme-nav icon-tabler icon-tabler-moon"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
        </svg>
      )}
    </button>
  );
}
