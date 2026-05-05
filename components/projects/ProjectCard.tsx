import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export type ProjectCardProps = {
    name: string;
    description: string;
    repositoryUrl: string;
    technologies: string[];
};

export default function ProjectCard({
    name,
    description,
    repositoryUrl,
    technologies,
}: ProjectCardProps) {
    return (
        <article className="print-avoid-break rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-green-500 print:!text-black">
                        {name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300 print:!text-zinc-700">
                        {description}
                    </p>
                </div>
                <a
                    href={repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full bg-green-100 p-3 text-green-700 transition-colors hover:bg-green-200 dark:bg-zinc-800 dark:text-green-400 dark:hover:bg-zinc-700 print:hidden"
                    aria-label={`Abrir repositorio ${name}`}
                >
                    <ArrowTopRightOnSquareIcon width={20} />
                </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-green-300 print:border-zinc-300 print:bg-white print:text-zinc-800"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-700">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Repositorio
                </p>
                <a
                    href={repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block break-all text-sm font-medium text-green-700 hover:underline dark:text-green-400 print:!text-zinc-800"
                >
                    {repositoryUrl}
                </a>
            </div>
        </article>
    );
}
