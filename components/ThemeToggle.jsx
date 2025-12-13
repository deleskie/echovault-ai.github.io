import { useEffect, useState } from "react";
import { useI18n } from "./I18nProvider";

const STORAGE_KEY = "echovault-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [ready, setReady] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = stored || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
    document.documentElement.dataset.theme = next;
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={t.themeToggle.aria}
      aria-pressed={theme === "dark"}
      disabled={!ready}
    >
      <span className="theme-toggle-knob" />
      <span className="theme-toggle-label">
        {theme === "dark" ? t.themeToggle.dark : t.themeToggle.light}
      </span>
    </button>
  );
}
