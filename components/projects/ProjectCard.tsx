import { ArrowUpRight, Code2 } from "lucide-react";

export type ProjectCardProps = { name: string; description: string; repositoryUrl: string; technologies: string[] };

export default function ProjectCard({ name, description, repositoryUrl, technologies }: ProjectCardProps) {
    return (
        <article className="print-avoid-break group relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-emerald-50 transition group-hover:bg-emerald-100 dark:bg-emerald-950/30" />
            <div className="relative flex items-start justify-between gap-4"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-emerald-600 dark:text-emerald-400">Projeto</span><h3 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white print:!text-black">{name}</h3></div><a href={repositoryUrl} target="_blank" rel="noreferrer" className="rounded-full bg-zinc-100 p-2.5 text-zinc-700 transition hover:bg-emerald-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 print:hidden" aria-label={`Abrir repositorio ${name}`}><ArrowUpRight size={20} /></a></div>
            <p className="relative mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300 print:!text-zinc-700">{description}</p>
            <div className="relative mt-auto flex flex-wrap gap-2 pt-6">{technologies.map((technology) => <span key={technology} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 print:border-zinc-300 print:bg-white print:text-zinc-800">{technology}</span>)}</div>
            <a href={repositoryUrl} target="_blank" rel="noreferrer" className="relative mt-5 flex items-center gap-2 border-t border-zinc-100 pt-4 text-xs font-bold text-zinc-500 transition hover:text-emerald-700 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-emerald-400 print:!text-zinc-800"><Code2 size={15} /> Ver repositório no GitHub</a>
        </article>
    );
}
