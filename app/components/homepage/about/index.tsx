import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <h2 className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </h2>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h2 className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who am I?
          </h2>
          <p className="text-gray-200 text-sm lg:text-lg">
            I’m a <b>Full Stack Engineer</b> with{" "}
            <b>
              2.5+ years of professional experience and 5+ years of hands-on
              development experience{" "}
            </b>
             focused on building scalable, high-performance, and user-centric web
            applications. I like being involved throughout the product journey —
            understanding the problem, designing the solution, building it,
            refining the experience, and making sure it works well in the real
            world.
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            I’m a curious and product-minded engineer who cares about{" "}
            <b>
              clean code, thoughtful user experiences, performance, and
              scalability.
            </b>{" "}
            I also enjoy exploring and integrating{" "}
            <b>LLM-powered capabilities</b> into applications and using AI
            developer tools like{" "}
            <b>GitHub Copilot, OpenAI, Gemini and Claude</b> to improve
            productivity, debugging, problem-solving, and development workflows.
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            I believe good engineering is not just about writing code — it’s
            about <b>understanding why something needs to be built and finding the
            simplest, most effective way to build it.</b>
          </p>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 h-full">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Vidushi Malik"
            priority
            className="h-fit rounded-lg transition-all duration-1000 sm:grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
