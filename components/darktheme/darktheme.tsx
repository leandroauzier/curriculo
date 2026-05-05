'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-3 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-900"
    >
      <span className="text-xs uppercase tracking-[0.2em]">
        {isDark ? 'Escuro' : 'Claro'}
      </span>
      <span
        className={`relative h-6 w-11 rounded-full transition-colors ${isDark ? 'bg-green-500' : 'bg-zinc-400'}`}
        aria-hidden="true"
      >
        <span className="absolute inset-y-0 left-1 flex items-center text-[10px] text-white">
          {isDark ? '' : 'ON'}
        </span>
        <span className="absolute inset-y-0 right-1 flex items-center text-[10px] text-white">
          {isDark ? 'ON' : ''}
        </span>
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${isDark ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </span>
    </button>
  );
}
