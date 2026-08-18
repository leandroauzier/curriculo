import React from "react";
import Image from "next/image";

type StackListProps = {
    classname?:string
};

export default function StackList({ classname }: StackListProps) {
    return (
        <div className={`${classname ?? ""} flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80`}>
            {[
                { src: "/icons/react.png", alt: "React" },
                { src: "/icons/Next.js.png", alt: "NextJS" },
                { src: "/icons/Nest.js.png", alt: "NestJS" },
                { src: "/icons/prisma.webp", alt: "Prisma" },
                { src: "/icons/Tailwind.png", alt: "Tailwind CSS" },
                { src: "/icons/Python.png", alt: "Python" },
                { src: "/icons/Django.png", alt: "Django" },
                { src: "/icons/JavaScript.png", alt: "JavaScript" },
                { src: "/icons/Csharp.png", alt: "C#" },
                { src: "/icons/Docker.png", alt: "Docker" },
                { src: "/icons/PHP.png", alt: "PHP" },
                { src: "/icons/Laravel.png", alt: "Laravel" },
                { src: "/icons/Postgres.png", alt: "Postgres" },
                { src: "/icons/MySQL.png", alt: "MySQL" },
            ].map(({ src, alt }) => (
                <div key={alt} className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-100 bg-white p-2 transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
                    <Image src={src} alt={alt} width={34} height={34} className="object-contain" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
                        {alt}
                    </span>
                </div>
            ))}
        </div>
    );
}
