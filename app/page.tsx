import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Contact from "@/components/contact/contact";
import Description from "@/components/description/description";
import Experience from "@/components/experience/experience";
import Stack from "@/components/stack/stack";
import UserPersonalInfo from "@/components/userPersonalInfo";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1>Bem vindos a meu currículo</h1>
      </div>
      <FadeInOnScroll>
        <UserPersonalInfo />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Description />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Stack />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Experience />
      </FadeInOnScroll>
      <Contact />
    </div>
  );
}