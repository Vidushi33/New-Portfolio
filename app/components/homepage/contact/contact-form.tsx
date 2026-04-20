"use client";
import { isValidEmail } from "@/utils/check-email";
// import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import axios from "axios";
import MailForward from "@/app/assets/icons/mailForward";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  email: boolean;
  required: boolean;
  // recaptcha: boolean;
}

function ContactForm() {
  const [error, setError] = useState<FormErrors>({
    email: false,
    required: false,
    // recaptcha: false,
  });
  // const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const verifyRecaptcha = async (token: string) => {
    try {
      const res = await axios.post(
        `/api/google`,
        { token },
      );
      return res.data.success;
    } catch (error) {
      return false;
    }
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    // const token = recaptchaRef.current?.getValue();
    const isEmailValid = isValidEmail(userInput.email);

    const hasEmptyFields =
      !userInput.email || !userInput.message || !userInput.name;
    if (hasEmptyFields || !isEmailValid) {
      setError({
        required: hasEmptyFields,
        email: !isEmailValid && !!userInput.email,
        // recaptcha: !token,
      });
      return;
    }
    // if (hasEmptyFields || !isEmailValid || !token) {
    //   setError({
    //     required: hasEmptyFields,
    //     email: !isEmailValid && !!userInput.email,
    //     recaptcha: !token,
    //   });
    //   return;
    // }
    if (!executeRecaptcha) {
      toast.error("ReCAPTCHA not yet available");
      return;
    }

    try {
      setIsLoading(true);

      // const isRecaptchaValid = await verifyRecaptcha(token);
      const token = await executeRecaptcha("contact_form_submit");
      const isHuman = await verifyRecaptcha(token);
      if (!isHuman) {
        toast.error("Bot activity detected!");
        return;
      }

      // if (!isRecaptchaValid) {
      //   recaptchaRef.current?.reset();
      //   setError({ email: false, required: false, recaptcha: true });
      //   toast.error("Security check failed. Please try the checkbox again.");
      //   return;
      // }

      const res = await axios.post("/api/contact", { ...userInput, token });

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
      setError({ email: false, required: false });
      // recaptchaRef.current?.reset();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="hidden md:block font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Connect with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength={100}
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
              value={userInput.name}
              aria-label="Your Name: "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength={100}
              required={true}
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
              aria-label="Your Email: "
            />
            {error.email && (
              <p className="text-sm text-red-400">
                Please provide a valid email!
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength={500}
              name="message"
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              rows={4}
              value={userInput.message}
              aria-label="Your Message: "
            />
          </div>

          {/* <div className="flex flex-col gap-2 justify-center items-center">
            <label className="text-base text">Security Check: </label>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="normal"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={() =>
                setError((prev) => ({ ...prev, recaptcha: false }))
              }
            />

            {error.recaptcha && (
              <p className="text-sm text-red-400">
                Please complete the security check!
              </p>
            )}
          </div> */}
          <div className="mt-2">
            <p className="text-[10px] md:text-xs text-[#d3d8e8] opacity-60 text-center">
              This site is protected by reCAPTCHA and the Google
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer "
                className="text-[#16f2b3] hover:underline mx-1"
              >
                Privacy Policy
              </Link>
              and
              <Link
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16f2b3] hover:underline mx-1"
              >
                Terms of Service
              </Link>
              apply.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">All fields are required!</p>
            )}
            <button
              className="cursor-pointer flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <MailForward />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
