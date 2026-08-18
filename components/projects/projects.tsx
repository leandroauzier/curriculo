import { CodeBracketIcon } from "@heroicons/react/20/solid";
import { getGithubRepositories } from "@/lib/github";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

const fallbackProjects: ProjectCardProps[] = [
  {
    name: "LandingPage",
    description:
      "Projeto demonstrativo de uma landing page moderna e responsiva.",
    repositoryUrl: "https://github.com/leandroauzier/LandingPage",
    technologies: ["TypeScript", "CSS", "JavaScript"],
  },
  {
    name: "Céu das Cores",
    description:
      "Projeto demonstrativo de uma landing page moderna e responsiva.",
    repositoryUrl: "https://github.com/leandroauzier/ceu-das-cores-ui",
    technologies: ["TypeScript", "CSS", "JavaScript"],
  },
  {
    name: "VigiaGov",
    description:
      "Projeto de inteligência pública para decisões mais rápidas em saúde.",
    repositoryUrl: "https://github.com/leandroauzier/vigiaGov",
    technologies: ["TypeScript", "Python", "JavaScript", "SQL"],
  },
];

export default async function Projects() {
  let projects: ProjectCardProps[] = fallbackProjects;

  try {
    const repositories = await getGithubRepositories();

    if (repositories.length > 0) {
      projects = repositories.map((repository) => ({
        name: repository.name,
        description:
          repository.description ?? "Projeto sem descrição no GitHub.",
        repositoryUrl: repository.html_url,
        technologies: [
          ...new Set([
            ...(repository.language ? [repository.language] : []),
            ...(repository.topics ?? []),
          ]),
        ],
      }));
    }
  } catch (error) {
    console.error("Erro ao carregar repositórios do GitHub:", error);
  }

  return (
    <div className="section-shell">
      <div className="section-heading">
        <CodeBracketIcon className="section-heading-icon" />
        <div><p className="section-kicker">Trabalho selecionado</p><h2 className="section-title">Meus projetos</h2></div>
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
