import { Code2, Link, Mail, MessageCircle } from "lucide-react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

const contacts = [
    { label: "Email", url: "mailto:leandroauzier02@gmail.com", displayValue: "leandroauzier02@gmail.com", color: "bg-emerald-600", icon: Mail },
    { label: "LinkedIn", url: "https://linkedin.com/in/leandro-auzier", displayValue: "linkedin.com/in/leandro-auzier", color: "bg-blue-600", icon: Link },
    { label: "GitHub", url: "https://github.com/leandroauzier", displayValue: "github.com/leandroauzier", color: "bg-zinc-900", icon: Code2 },
    { label: "WhatsApp", url: "https://api.whatsapp.com/send/?phone=5596981114744", displayValue: "+55 96 98111-4744", color: "bg-green-500", icon: MessageCircle },
];

export default function Contact() {
    return (
        <section className="section-shell !py-20">
            <div className="section-heading">
                <EnvelopeIcon className="section-heading-icon" width={38} />
                <div><p className="section-kicker">Vamos conversar</p><h2 className="section-title">Entre em contato</h2></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                {contacts.map((contact) => {
                    const Icon = contact.icon;
                    return <a key={contact.label} href={contact.url} target="_blank" rel="noreferrer" className="print-avoid-break group flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white/80 p-4 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900/70">
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${contact.color}`}><Icon size={20} /></span>
                        <span className="min-w-0"><span className="block text-sm font-bold text-zinc-900 dark:text-white print:!text-black">{contact.label}</span><span className="block break-all text-sm text-zinc-500 dark:text-zinc-300 print:!text-zinc-700">{contact.displayValue}</span></span>
                    </a>;
                })}
            </div>
        </section>
    );
}
