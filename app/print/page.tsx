'use client'
import Contact from "@/components/contact/contact";
import Description from "@/components/description/description";
import ExperienceSection from "@/components/experience/experienceSection";
import Projects from "@/components/projects/projects";
import UserPersonalInfo from "@/components/userPersonalInfo";
import { useRouter } from "next/navigation";
import React from "react";

export default function Print() {
    const router = useRouter();
    const isPrinting = true;
    React.useEffect(() => {
        // Espera meio segundo antes de abrir o print
        const timer = setTimeout(() => {
            window.print();
        }, 1000);

        // Quando o print for concluído ou cancelado, volta pra raiz
        const handleAfterPrint = () => {
            router.push("/");
        };

        window.addEventListener("afterprint", handleAfterPrint);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("afterprint", handleAfterPrint);
        };
    }, [router]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <section id="#">
                    <p className="font-serif text-7xl py-22">
                        Bem vindos ao meu currículo
                    </p>
                </section>
            </div>
            <section id="sobre">
                <UserPersonalInfo />
            </section>

            <section id="projetos" className="w-full flex justify-center bg-green-700">
                <Description />
            </section>
            <section id="experiencias">
                <ExperienceSection isPrinting={isPrinting} />
            </section>

            <section id="projetos" className="w-full flex justify-center">
                <Projects />
            </section>
            <section id="contato" className="w-full bg-green-100">
                <Contact />
            </section>
        </div>
    );
}