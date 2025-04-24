import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Contact from "@/components/contact/contact";
import Description from "@/components/description/description";
import ExperienceSection from "@/components/experience/experienceSection";
import Projects from "@/components/projects/projects";
import UserPersonalInfo from "@/components/userPersonalInfo";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center dark:bg-zinc-800">
      <FadeInOnScroll>
        <section id="sobre">
          <UserPersonalInfo />
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
      <section id="descricao" className="w-full flex justify-center bg-green-700">
          <Description />
        </section>
      </FadeInOnScroll>

      <section id="experiencias">
        <ExperienceSection isPrinting={false}/>
      </section>

      <section id="projetos" className="w-full flex justify-center">
        <Projects />
      </section>
      <section id="contato" className="w-full bg-green-100 dark:bg-zinc-700">
        <Contact />
      </section>
    </div>
  );
}