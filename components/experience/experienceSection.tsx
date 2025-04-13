import { BriefcaseIcon } from "@heroicons/react/16/solid";
import FadeInOnScroll from "../animations/FadeInOnScroll";

type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  logo: string;
};

const experiences: Experience[] = [
  {
    company: "Tribunal de Contas do Estado do Amapá",
    role: "FullStack Developer",
    duration: "fev de 2024 - o momento · 1 ano 3 meses",
    location: "Macapá, Amapá, Brasil · Presencial",
    description:
      "Criação de sistemas e soluções públicas em React, NextJS e Prisma ORM para o Tribunal de Contas do Estado do Amapá.",
    skills: ["React", "NextJS", "Prisma", "API REST", "Linux"],
    logo: "/logos/tceap.png",
  },
  {
    company: "Tributei",
    role: "Back End Developer",
    duration: "fev de 2023 - dez de 2023 · 11 meses",
    location: "Macapá, Amapá, Brasil · Presencial",
    description:
      "Desenvolvimento de funcionalidades para sistema de automação fiscal, máquina de captura XML para notas fiscais, suporte a sistema, API em Laravel, Load Balance, MongoDB e MySQL.",
    skills: ["PHP", "Laravel", "MongoDB", "MySQL", "Linux"],
    logo: "/logos/tributei.png",
  },
  {
    company: "Score Milk",
    role: "Backend Developer",
    duration: "dez de 2021 - jun de 2022 · 7 meses",
    location: "Remoto · Estados Unidos",
    description:
      "Automação de processos com criação de APIs REST em Django e rastreador de dados para redes sociais.",
    skills: ["Django", "API REST"],
    logo: "/logos/scoremilk.png",
  },
  {
    company: "Cluster",
    role: "Desenvolvedor Python Backend",
    duration: "mai de 2021 - set de 2021 · 5 meses",
    location: "Macapá, Amapá, Brasil",
    description:
      "Desenvolvimento de sistema em Django para análise de dados do varejo, uso de Docker e Pandas, integração com banco Oracle.",
    skills: ["Django", "Docker", "Pandas", "Oracle"],
    logo: "/logos/cluster.png",
  },
  {
    company: "Monte",
    role: "Analista BI Júnior",
    duration: "out de 2020 - mai de 2021 · 8 meses",
    location: "Macapá, Amapá, Brasil",
    description:
      "Gerenciamento de plataforma BI, elaboração de relatórios, análise de dados e suporte a colaboradores.",
    skills: ["BI", "Relatórios", "Análise de dados"],
    logo: "/logos/monte.png",
  },
  {
    company: "Ministério Público do Estado do Amapá",
    role: "Suporte Técnico (Estágio)",
    duration: "nov de 2017 - out de 2019 · 2 anos",
    location: "Macapá e Região, Brasil",
    description:
      "Manutenção de equipamentos, backup, formatação, redes e suporte técnico geral.",
    skills: ["Manutenção", "Redes", "Suporte Técnico"],
    logo: "/logos/mpe.png",
  },
];

type ExperienceSectionProps = {
  isPrinting: boolean;
};

export default function ExperienceSection({ isPrinting }: ExperienceSectionProps) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="flex items-start gap-2">
        <BriefcaseIcon className="dark:text-green-500" width={50} />
        <h2 className="text-3xl font-bold mb-8 dark:text-green-500">Experiência Profissional</h2>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex border px-4 py-8 rounded-2xl gap-4 items-start">
            {isPrinting ? (
              // Sem animação no modo impressão
              <div>
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-500">{exp.role}</h3>
                <p className="text-sm text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <p className="text-sm text-gray-500 italic">{exp.location}</p>
                <p className="mt-2 text-sm">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs border bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              // Animação no modo normal
              <FadeInOnScroll>
                <div>
                  <h3 className="text-xl font-semibold text-green-500">{exp.role}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                  <p className="text-sm text-gray-500 italic">{exp.location}</p>
                  <p className="mt-2 text-sm dark:text-zinc-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs border bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
