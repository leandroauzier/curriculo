import React from "react";
import Image from "next/image";

type StackListProps = {
    classname?:string
};

export default function StackList({ classname }: StackListProps) {
    return (
        <div className={`${classname} flex flex-wrap gap-2 p-4 rounded-2xl`}>
            {[
                { src: "/icons/react.png", alt: "React" },
                { src: "/icons/Next.JS.png", alt: "NextJS" },
                { src: "/icons/Nest.JS.png", alt: "NestJS" },
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
                <div key={alt} className="relative hover:scale-110 group w-[50px] h-[50px]">
                    <Image src={src} alt={alt} width={50} height={50} />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
                        {alt}
                    </span>
                </div>
            ))}
        </div>
    );
}