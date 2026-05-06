import React from "react";
import { CodeBracketIcon } from "@heroicons/react/20/solid";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
    {
        name: "LandingPage",
        description: "Este é um projeto demonstrativo de uma landing page, desenvolvido com foco em apresentar um modelo moderno e responsivo para empresas.",
        repositoryUrl: "https://github.com/leandroauzier/LandingPage",
        technologies: ["TypeScript", "CSS", "JavaScript"],
    },
    {
        name: "Céu das Cores",
        description: "Este é um projeto demonstrativo de uma landing page, desenvolvido com foco em apresentar um modelo moderno e responsivo para empresas.",
        repositoryUrl: "https://github.com/leandroauzier/ceu-das-cores-ui",
        technologies: ["TypeScript", "CSS", "JavaScript"],
    },
    {
        name: "VigiaGov",
        description: "Projeto inovador que tranforma inteligência pública para decisões mais rápidas em saúde",
        repositoryUrl: "https://github.com/leandroauzier/vigiaGov",
        technologies: ["TypeScript", "Python", "JavaScript", "SQL"],
    },
];

export default function Projects() {
    return (
        <div className="py-24 px-4 md:px-8 max-w-5xl w-full">
            <div className="flex items-start gap-2">
                <CodeBracketIcon className="dark:text-green-500" width={50} />
                <h2 className="text-3xl font-bold mb-8 dark:text-green-500">Meus projetos</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.repositoryUrl}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
}
