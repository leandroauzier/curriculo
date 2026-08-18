import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import StackList from "./stack/stackList";

export default function UserPersonalInfo() {
  return (
    <div className="relative mx-auto flex min-h-[680px] w-full max-w-6xl items-center overflow-hidden px-5 pb-16 pt-32 lg:px-8">
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-950/40" />
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3.5 py-2 text-xs font-bold uppercase tracking-[.16em] text-emerald-700 dark:border-emerald-900 dark:bg-zinc-900/70 dark:text-emerald-400">
            Disponível para oportunidades
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-emerald-600">
            Olá, eu sou
          </p>
          <h1 className="!m-0 !bg-transparent !p-0 text-left text-5xl font-black leading-[.98] tracking-[-.07em] text-zinc-950 dark:!text-white sm:text-7xl">
            Leandro
            <br />
            <span className="text-emerald-600 dark:text-emerald-400">
              Sobrinho.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-300">
            Desenvolvedor fullstack que transforma ideias em produtos digitais
            confiáveis, elegantes e feitos para durar.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-emerald-600" /> Macapá, Amapá ·
              Brasil
            </span>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:underline dark:text-emerald-400"
            >
              Ver projetos <ArrowDown size={16} />
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2.2rem] border border-emerald-200/70 dark:border-emerald-900/60" />
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 p-2 shadow-2xl shadow-emerald-900/20 dark:bg-zinc-800">
            <Image
              className="aspect-[4/4.6] w-full rounded-[1.5rem] object-cover object-top grayscale-[15%]"
              alt="Leandro Sobrinho"
              src="/images/leandro.png"
              width={500}
              height={575}
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-zinc-950/75 p-4 text-white backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-300">
                Especialidade
              </p>
              <p className="mt-1 text-lg font-bold">
                Fullstack · Backend · Dados
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-zinc-400 lg:block">
        <ArrowDown size={18} className="animate-bounce" />
      </div>
      <div className="absolute bottom-0 left-1/2 hidden h-px w-24 -translate-x-1/2 bg-emerald-300 lg:block" />
      <div className="absolute bottom-0 left-1/2 hidden w-[calc(100%-5rem)] -translate-x-1/2 lg:block">
        <StackList />
      </div>
      <div className="absolute bottom-0 left-5 right-5 lg:hidden">
        <StackList />
      </div>
    </div>
  );
}
