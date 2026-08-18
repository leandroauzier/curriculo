import { UserCircleIcon } from "@heroicons/react/20/solid";

export default function Description() {
    return (
        <div className="section-shell !py-20 text-white">
            <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
                <div className="lg:justify-self-center"><div className="section-heading mb-0"><UserCircleIcon className="section-heading-icon !bg-emerald-900/50 !text-emerald-200" /><div><p className="section-kicker !text-emerald-200">Perfil profissional</p><h2 className="section-title !text-white">Sobre mim</h2></div></div></div>
                <div className="max-w-2xl border-l border-emerald-200/20 pl-6 text-lg leading-8 text-emerald-50 lg:pl-10"><p>Desenvolvedor Full-Stack, formado em Ciência da Computação, com experiência na construção de aplicações web em produção, serviços backend, APIs REST, automação de processos e sistemas orientados a dados. Atuo em todo o ciclo de desenvolvimento — da modelagem de banco de dados e integrações a implantações em containers e suporte em produção.</p><p className="mt-5 text-base leading-7 text-emerald-100/75">Responsável pela gestão e manutenção de mais de 10 projetos de software, incluindo sistemas utilizados por mais de 300 usuários, com foco em desenvolvimento backend, integração de sistemas, automação, segurança e confiabilidade.</p></div>
            </div>
        </div>
    );
}
