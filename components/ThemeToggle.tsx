'use client';

import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type Theme = 'light' | 'dark';

// Starts from the system setting and overrides it for this page visit only.
// Nothing is persisted, so a reload goes back to the system setting.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const fromSystem = () => {
      if (!document.documentElement.dataset.theme) {
        setTheme(query.matches ? 'dark' : 'light');
      }
    };
    fromSystem();
    query.addEventListener('change', fromSystem);
    return () => query.removeEventListener('change', fromSystem);
  }, []);

  // Render nothing until mounted: the server can't know the visitor's system theme.
  if (!theme) return null;

  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="resume-topnav-icon"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      onClick={() => {
        document.documentElement.dataset.theme = next;
        setTheme(next);
      }}
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
}
