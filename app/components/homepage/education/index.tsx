import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "../../../assets/lottie/study.json";
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import WorkSpaceIcon from "@/app/assets/icons/workspaceIcon";
import dynamic from "next/dynamic";

interface EducationItem {
  id: number;
  duration: string;
  title: string;
  institution: string;
  perc: string;
}

function Education() {
  const GlowCard = dynamic(() => import("../../helper/glow-card"));
  return (
    <div id="education" className="relative z-50 border-t  border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </h2>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="hidden sm:flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education: EducationItem) => (
                <GlowCard
                  key={education.id}
                  identifier={`education-${education.id}`}
                >
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-5  sm:gap-x-8 px-3 py-5">
                      <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                        <WorkSpaceIcon />
                      </div>
                      <div>
                        <p className="text-sm sm:text-xl  font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-xs sm:text-base my-2">
                          {education.institution}
                        </p>
                        <p className="text-xs sm:text-base">
                          <b>Percentage -</b> {education.perc}%
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
