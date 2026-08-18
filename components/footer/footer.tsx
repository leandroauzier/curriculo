'use client'

export default function Footer() {
    return <footer className="print:hidden border-t border-zinc-800 bg-zinc-950 px-5 py-7 text-center text-sm text-zinc-400"><p>© {new Date().getFullYear()} Leandro Sobrinho Auzier <span className="mx-2 text-emerald-500">·</span> Desenvolvedor fullstack</p></footer>;
}
