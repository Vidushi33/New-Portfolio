import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./contact-form";
import Link from "next/link";
import WithoutBgLinkedInIcon from "@/app/assets/icons/withoutBgLinkedInIcon";
import WithoutBgGithubIcon from "@/app/assets/icons/withoutBgGithub";
import EmailIcon from "@/app/assets/icons/emailIcon";
import CallIcon from "@/app/assets/icons/callIcon";
import LocationIcon from "@/app/assets/icons/locationIcon";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative sm:mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-6">
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
            <Link target="_blank" href={personalData.github}>
              <WithoutBgGithubIcon className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <WithoutBgLinkedInIcon className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
