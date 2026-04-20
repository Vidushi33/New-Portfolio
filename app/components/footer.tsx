"use client";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import WithoutBgGithubIcon from "../assets/icons/withoutBgGithub";
import WithoutBgLinkedInIcon from "../assets/icons/withoutBgLinkedInIcon";
import GmailIcon from "../assets/icons/gmailIcon";
import { toast } from "react-toastify";

function Footer() {
  const handleCopyEmail = () => {
    const email = "vidushimalik135@gmail.com";
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="text-[#16f2b3]"
              rel="noopener noreferrer"
            >
              Vidushi Malik
            </Link>
          </p>
          <div className=" flex items-center gap-2">
            <Link
              href="mailto:vidushimalik135@gmail.com"
              className="hover:scale-125 transition-all  duration-300"
              aria-label="Send me an email"
              onClick={handleCopyEmail}
              rel="noopener noreferrer"
            >
              <GmailIcon />
              <span className="hidden">Gmail Icon</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={personalData.github}
              className="hover:scale-125 transition-all  duration-300"
            >
              <WithoutBgGithubIcon />
              <span className="hidden">Github Icon</span>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={personalData.linkedIn}
              className="hover:scale-125 transition-all  duration-300"
            >
              <WithoutBgLinkedInIcon />
              <span className="hidden">LinkedIn Icon</span>
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
