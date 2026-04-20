import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import WithoutBgLinkedInIcon from "@/app/assets/icons/withoutBgLinkedInIcon";
import WithoutBgGithubIcon from "@/app/assets/icons/withoutBgGithub";
import EmailIcon from "@/app/assets/icons/gmailIcon";
import CallIcon from "@/app/assets/icons/callIcon";
import LocationIcon from "@/app/assets/icons/locationIcon";
import dynamic from "next/dynamic";
import AnimationLottie from "../../helper/animation-lottie";
import contact from "../../../assets/lottie/contact.json";

function ContactSection() {
  const ContactForm = dynamic(() => import("./contact-form"));
  return (
    <div id="contact" className=" relative text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <h2 className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT ME
        </h2>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="flex lg:hidden justify-center mb-7">
        <div className="flex  items-center">
          <span className="w-10 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            CONTACT ME
          </h2>
          <span className="w-10 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <ContactForm />
        </div>
        <div className="order-1 lg:order-2 hidden md:flex justify-center items-center">
          {/* <div className="flex flex-col gap-5 lg:gap-6">
            <div className="text-sm md:text-xl flex items-center gap-3">
              <EmailIcon className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" />
              <span>{personalData.email}</span>
            </div>
            <div className="text-sm md:text-xl flex items-center gap-3">
              <CallIcon className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" />
              <span>{personalData.phone}</span>
            </div>
            <div className="text-sm md:text-xl flex items-center gap-3">
              <LocationIcon className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" />
              <span>{personalData.address}</span>
            </div>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-6">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={personalData.github}
            >
              <WithoutBgGithubIcon className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" />
              <span className="hidden">Github Icon</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={personalData.linkedIn}
            >
              <WithoutBgLinkedInIcon className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" />
              <span className="hidden">LinkedIn Icon</span>
            </Link>
          </div> */}
          <div className="w-3/4 h-3/4">
            <AnimationLottie animationPath={contact} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
