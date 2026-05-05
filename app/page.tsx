import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Contact from "@/components/contact/contact";
import Description from "@/components/description/description";
import ExperienceSection from "@/components/experience/experienceSection";
import Projects from "@/components/projects/projects";
import UserPersonalInfo from "@/components/userPersonalInfo";

export default function page() {
  return (
    <div className="print-document flex flex-col justify-center items-center dark:bg-zinc-800 print:bg-white print:text-black">
      <FadeInOnScroll>
        <section id="sobre">
          <UserPersonalInfo />
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <section id="descricao" className="print-avoid-break w-full flex justify-center bg-green-700">
          <Description />
        </section>
      </FadeInOnScroll>

      <section id="experiencias">
        <ExperienceSection />
      </section>

      <section id="projetos" className="w-full flex justify-center">
        <Projects />
      </section>
      <section id="contato" className="w-full bg-green-100 dark:bg-zinc-700 print:bg-green-100">
        <Contact />
      </section>
    </div>
  );
}
