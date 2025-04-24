'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "../darktheme/darktheme";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="print:hidden bg-white dark:bg-zinc-900 fixed w-full z-20 top-0 start-0 border-b border-zinc-200 dark:border-zinc-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 flex items-center bg-green-500 text-white justify-center rounded-full text-xl font-bold">
                            L
                        </div>
                        <span className="hidden md:flex text-2xl font-semibold whitespace-nowrap dark:text-white">
                            leandroauzier
                        </span>
                    </div>
                    <div className="flex md:order-2 gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => router.push("/print")}
                            className="print:hidden text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
                        >
                            Imprimir Currículo
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir menu principal</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* animação do colapse button */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full md:hidden mt-4"
                            >
                                <ul className="flex flex-col p-4 font-medium border border-zinc-100 rounded-lg bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700">
                                    <li><a href="#" className="block py-2 px-3 text-white bg-green-700 rounded-sm">Home</a></li>
                                    <li><a href="#sobre" className="block py-2 px-3 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-sm">Sobre mim</a></li>
                                    <li><a href="#experiencias" className="block py-2 px-3 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-sm">Experiências</a></li>
                                    <li><a href="#projetos" className="block py-2 px-3 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-sm">Projetos</a></li>
                                    <li><a href="#contato" className="block py-2 px-3 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-sm">Contato</a></li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    );
}
