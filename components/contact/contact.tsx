import React from "react";
import { SocialIcon } from "react-social-icons/component";
import 'react-social-icons/linkedin'
import 'react-social-icons/mailto'
import 'react-social-icons/github'
import 'react-social-icons/whatsapp'
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function Contact() {
    const contacts = [
        {
            label: "Email",
            network: "mailto" as const,
            url: "mailto:leandroauzier02@gmail.com",
            displayValue: "leandroauzier02@gmail.com",
            bgColor: "#1e3a8a",
        },
        {
            label: "Linkedin",
            network: "linkedin" as const,
            url: "https://linkedin.com/in/leandro-auzier",
            displayValue: "linkedin.com/in/leandro-auzier",
            bgColor: "#0077b5",
        },
        {
            label: "Github",
            network: "github" as const,
            url: "https://github.com/leandroauzier",
            displayValue: "github.com/leandroauzier",
            bgColor: "#333",
        },
        {
            label: "Whatsapp",
            network: "whatsapp" as const,
            url: "https://api.whatsapp.com/send/?phone=5596981114744&text=Ol%C3%A1%21%20Tudo%20bem%3F%20Vi%20seu%20perfil%20e%20fiquei%20muito%20interessado%28a%29%20no%20seu%20trabalho.%20Gostaria%20de%20conversar%20sobre%20uma%20poss%C3%ADvel%20proposta%20profissional.%20Podemos%20falar%20por%20aqui%3F&type=phone_number&app_absent=0",
            displayValue: "+55 96 98111-4744",
            bgColor: "#25D366",
        },
    ];

    return (
        <section className="p-10 max-w-4xl mx-auto w-full">
            <div className="flex items-start gap-2">
                <EnvelopeIcon className="dark:text-green-500" width={50} />
                <h2 className="text-3xl font-bold mb-8 dark:text-green-500">Contato</h2>
            </div>
            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 items-start">
                {contacts.map((contact) => (
                    <div
                        key={contact.label}
                        className="print-avoid-break flex gap-4 items-start group font-semibold"
                    >
                        <SocialIcon
                            className="shrink-0 group-hover:scale-110 transition-transform duration-300"
                            network={contact.network}
                            url={contact.url}
                            target="_blank"
                            fgColor="#fff"
                            bgColor={contact.bgColor}
                        />
                        <div className="min-w-0">
                            <a
                                href={contact.url}
                                target="_blank"
                                rel="noreferrer"
                                className="block"
                            >
                                <p className="dark:text-green-500 print:!text-black">
                                    {contact.label}
                                </p>
                                <p className="text-sm font-normal text-zinc-600 break-all dark:text-zinc-300 print:!text-zinc-700">
                                    {contact.displayValue}
                                </p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
