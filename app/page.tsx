import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Contact from "@/components/contact/contact";
import Description from "@/components/description/description";
import ExperienceSection from "@/components/experience/experienceSection";
import Projects from "@/components/projects/projects";
import UserPersonalInfo from "@/components/userPersonalInfo";

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <div className="print-document flex w-full flex-col items-center justify-center dark:bg-zinc-800 print:bg-white print:text-black">
      <FadeInOnScroll>
        <section id="sobre">
          <UserPersonalInfo />
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <section id="descricao" className="print-avoid-break w-full self-stretch bg-[#12352f] shadow-[inset_0_1px_0_rgba(167,243,208,.14),inset_0_-1px_0_rgba(167,243,208,.14)]">
          <Description />
        </section>
      </FadeInOnScroll>

      <section id="experiencias" className="w-full bg-white dark:bg-zinc-950">
        <ExperienceSection />
      </section>

      <section id="projetos" className="w-full flex justify-center">
        <Projects />
      </section>
      <section id="contato" className="w-full bg-emerald-50/70 dark:bg-zinc-900 print:bg-emerald-50">
        <Contact />
      </section>
    </div>
  );
}
