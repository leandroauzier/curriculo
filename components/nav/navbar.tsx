'use client'
import { useRouter } from "next/navigation";
import ThemeToggle from "../darktheme/darktheme";
export default function Navbar() {
    const router = useRouter();
    return (
        <div>
            <nav className="print:hidden bg-white dark:bg-zinc-900 fixed w-full z-20 top-0 start-0 border-b border-zinc-200 dark:border-zinc-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="flex h-10 w-10 items-center bg-green-500 text-white justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">L</div>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            leandroauzier
                        </span>
                    </a>
                    <div className="flex md:order-2 gap-4 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <ThemeToggle />
                        <button
                            onClick={() => router.push("/print")}
                            className="print:hidden text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
                        >
                            Imprimir Currículo
                        </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-100 rounded-lg bg-zinc-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-green-700 rounded-sm md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#sobre" className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700">
                                    Sobre mim
                                </a>
                            </li>
                            <li>
                                <a href="#experiencias" className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700">
                                    Experiências
                                </a>
                            </li>
                            <li>
                                <a href="#projetos" className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700">
                                    Projetos
                                </a>
                            </li>
                            <li>
                                <a href="#contato" className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}