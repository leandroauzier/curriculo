import { UserCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Description() {
    return (
        <div className="p-10 text-white">
            <div className="container">
                <div className="flex items-start gap-2">
                    <UserCircleIcon width={60} />
                    <h2 className="text-xl font-semibold mb-4">Sobre Mim</h2>
                </div>
                <div className="text-justify gap-4">
                    <p>Graduado em Ciência da Computação, atuo na área de desenvolvimento web e análise de dados, com experiência em projetos que envolvem tanto o front-end quanto o back-end. Já trabalhei com APIs REST utilizando Django, Flask e PHP (Laravel), além de integração com web services e manipulação de bancos de dados SQL e NoSQL.</p>
                    <p>Tenho conhecimento prático em tecnologias como Node.js, Next.js, Prisma ORM, e na utilização de Docker para containerização e deploy de aplicações. Também possuo familiaridade com ambientes de orquestração como o OpenShift e já desenvolvi soluções em C#, o que me permite transitar entre diferentes stacks com facilidade.</p>
                    <p>Sou movido por desafios e tenho como foco a entrega de soluções escaláveis, seguras e orientadas à performance. Busco constantemente aprender novas tecnologias e contribuir em equipes multidisciplinares, agregando valor por meio da tecnologia.</p>
                </div>
            </div>
        </div>
    )
}