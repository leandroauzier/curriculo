import { BriefcaseIcon } from "@heroicons/react/16/solid";
import FadeInOnScroll from "../animations/FadeInOnScroll";
import { formatDurationFromText } from "@/utils/FormatDuration";

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
    duration: formatDurationFromText("fev de 2024", undefined, true),
    location: "Macapá, Amapá, Brasil - Presencial",
    description: `• Projeto, desenvolvo e mantenho aplicações web full-stack utilizando Next.js, React, Node.js, Prisma ORM e PostgreSQL para serviços voltados ao público e operações internas.
• Sou responsável pelo desenvolvimento e manutenção de mais de 10 projetos, criando APIs REST e integrações entre sistemas internos, administrando bancos de dados e implementando autenticação, autorização, trilhas de auditoria e rastreamento de atividades.
• Dou suporte a mais de 300 usuários em sistemas em produção, gerenciando implantações em containers, orquestração com OpenShift, pipelines de CI/CD, troubleshooting, melhorias de performance e confiabilidade das aplicações.`,
    skills: ["React", "NextJS", "Prisma", "API REST", "Linux"],
    logo: "/logos/tceap.png",
  },

  {
    company: "Tributei",
    role: "Back End Developer",
    duration: "fev de 2023 - dez de 2023 - 11 meses",
    location: "Macapá, Amapá, Brasil - Presencial",
    description: `• Desenvolvi funcionalidades de backend para uma plataforma de automação fiscal focada em operações interestaduais, incluindo ICMS-ST, DIFAL, cálculo de impostos, auditoria e processamento de documentos fiscais.
• Construí e mantive fluxos de dados que capturavam XMLs fiscais, extraíam e transformavam informações tributárias, armazenavam dados estruturados em MongoDB/MySQL e os disponibilizavam por meio de APIs REST em Laravel para o frontend e serviços internos.
• Dei suporte ao sistema e contribuí com a infraestrutura e o gerenciamento de balanceamento de carga, ajudando a automatizar fluxos fiscais e melhorar a consistência no processamento de dados tributários.`,
    skills: ["PHP", "Laravel", "MongoDB", "MySQL", "Linux"],
    logo: "/logos/tributei.png",
  },

  {
    company: "Score Milk — Cripto / NFT / Web3 | EUA",
    role: "Backend Developer",
    duration: "dez de 2021 - jun de 2022 - 7 meses",
    location: "Remoto - Estados Unidos",
    description: `• Desenvolvi serviços backend e APIs REST em Python/Django para uma empresa focada em criptomoedas, NFTs, games e produtos Web3, integrando microsserviços internos e fontes de dados.
• Construí ferramentas de automação para redes sociais, bots, webhooks e data trackers voltados à publicação automatizada, monitoramento de mercado e análise de preços de criptomoedas e NFTs, incluindo integrações com Discord e MySQL.
• Reduzi o trabalho manual repetitivo por meio da automação da coleta de dados, do monitoramento e dos fluxos de conteúdo, melhorando a comunicação entre os serviços internos.`,
    skills: ["Django", "API REST"],
    logo: "/logos/scoremilk.png",
  },

  {
    company: "Cluster",
    role: "Desenvolvedor Python Backend",
    duration: "mai de 2021 - set de 2021 - 5 meses",
    location: "Macapá, Amapá, Brasil",
    description: `• Desenvolvi uma plataforma de análise de dados baseada em Django para empresas de varejo e atacado, apoiando fluxos de processamento e análise de dados de negócio.
• Trabalhei com bancos de dados Oracle, imagens Docker, ambientes Linux e ferramentas de manipulação de dados para preparar e disponibilizar informações utilizadas pela aplicação.
• Contribuí com manutenção de backend, integração de dados, troubleshooting e atividades relacionadas a deploy.`,
    skills: ["Django", "Docker", "Pandas", "Oracle"],
    logo: "/logos/cluster.png",
  },

  {
    company: "Monte",
    role: "Analista BI Júnior",
    duration: "out de 2020 - mai de 2021 - 8 meses",
    location: "Macapá, Amapá, Brasil",
    description: `• Mantive e gerenciei a plataforma de Business Intelligence (BI) da empresa, consolidando dados de receita, vendas, desempenho de produtos, contas a pagar, dados de pessoal e outros KPIs operacionais.
• Criei e mantive dashboards e relatórios financeiros, comerciais e gerenciais utilizados por diferentes departamentos para monitoramento de desempenho e planejamento.
• Dei suporte a gestores e colaboradores no acesso e na interpretação de informações de negócio, aumentando a visibilidade sobre resultados financeiros e operacionais e reduzindo a dependência de consolidações manuais.`,
    skills: ["BI", "Relatórios", "Análise de dados"],
    logo: "/logos/monte.png",
  },

  {
    company: "Ministério Público do Estado do Amapá",
    role: "Suporte Técnico (Estágio)",
    duration: "nov de 2017 - out de 2019 · 2 anos",
    location: "Macapá e Região, Brasil",
    description: `• Prestei dois anos de suporte técnico a colaboradores, realizando manutenção de computadores, notebooks, impressoras, sistemas operacionais, softwares e periféricos em ambiente público profissional.
• Realizei backups, instalação e formatação de sistemas operacionais, remoção de malware, manutenção preventiva e corretiva, limpeza de equipamentos, troca de toner e substituição de componentes.
• Dei suporte à infraestrutura básica de rede, realizando crimpagem de cabos, testes de conectividade, verificação de pontos de rede e resolução de problemas dos usuários, contribuindo para manter a disponibilidade diária dos serviços de TI.`,
    skills: ["Manutenção", "Redes", "Suporte Técnico"],
    logo: "/logos/mpe.png",
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <BriefcaseIcon className="section-heading-icon" width={38} />
        <div><p className="section-kicker">Trajetória</p><h2 className="section-title">Experiência profissional</h2></div>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="print-avoid-break group relative rounded-3xl border border-zinc-200 border-l-4 border-l-emerald-500 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 dark:border-zinc-800 dark:border-l-emerald-500 dark:bg-zinc-900 md:p-8">
            <div className="hidden print:block">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-500">
                {exp.role}
              </h3>

              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="text-sm text-gray-500 italic">{exp.location}</p>

              <p className="mt-2 text-sm whitespace-pre-line">
                {exp.description}
              </p>

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

            <div className="print:hidden">
              <FadeInOnScroll>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                    {exp.role}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300">{exp.company}</p>
                  <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-400">{exp.duration}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{exp.location}</p>

                  <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300 whitespace-pre-line">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
