import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Contact from "@/components/contact/contact";
import Description from "@/components/description/description";
import ExperienceSection from "@/components/experience/experienceSection";
import UserPersonalInfo from "@/components/userPersonalInfo";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <p className="font-serif text-7xl py-22">
          Bem vindos a meu currículo
        </p>
      </div>
      <FadeInOnScroll>
        <UserPersonalInfo />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Description />
      </FadeInOnScroll>
      <ExperienceSection />
      <Contact />
    </div>
  );
}