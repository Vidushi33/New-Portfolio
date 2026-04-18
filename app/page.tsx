import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import dynamic from "next/dynamic";

export default async function Home() {
  const Experience = dynamic(() => import("./components/homepage/experience"));
  const Skills = dynamic(() => import("./components/homepage/skills"));
  const Projects = dynamic(() => import("./components/homepage/projects"));
  const Education = dynamic(() => import("./components/homepage/education"));
  const ContactSection = dynamic(
    () => import("./components/homepage/contact"),
  );
  return (
    <div
      suppressHydrationWarning
      className="flex flex-col gap-6 lg:gap-16 my-7 lg:my-10"
    >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
