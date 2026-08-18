'use client'

import { useState } from "react";
import ThemeToggle from "../darktheme/darktheme";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const links = [
    ["Sobre", "#sobre"], ["Experiência", "#experiencias"], ["Projetos", "#projetos"], ["Contato", "#contato"],
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handlePrint = () => window.print();
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="print:hidden fixed left-0 right-0 top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8">
                <a href="#sobre" className="flex items-center gap-3" onClick={closeMenu}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-lg font-black text-white shadow-lg shadow-emerald-900/10 dark:bg-emerald-500 dark:text-zinc-950">L</span>
                    <span className="hidden text-sm font-bold tracking-tight text-zinc-900 dark:text-white sm:block">Leandro Auzier</span>
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    {links.map(([label, href]) => <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-emerald-400">{label}</a>)}
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button onClick={handlePrint} className="hidden items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 sm:flex" aria-label="Baixar currículo">
                        <Download size={16} /><span>Currículo PDF</span>
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="rounded-xl p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 md:hidden" aria-expanded={isOpen} aria-label="Abrir menu principal">
                        {isOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-zinc-200/70 px-5 pb-4 dark:border-zinc-800 md:hidden">
                    <div className="flex flex-col gap-1 pt-3">{links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-700 hover:bg-emerald-50 dark:text-zinc-200 dark:hover:bg-zinc-800">{label}</a>)}</div>
                </motion.div>}
            </AnimatePresence>
        </nav>
    );
}
