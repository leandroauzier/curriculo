'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative inline-flex items-center">
      <span className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      <input
        type="checkbox"
        id="theme-switch"
        className="sr-only peer"
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <label
        htmlFor="theme-switch"
        className="relative flex items-center p-0.5 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600"
      >
        <span className="w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></span>
      </label>
    </div>
  );
}