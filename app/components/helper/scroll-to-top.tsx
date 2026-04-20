"use client";

import UpArrowIcon from "@/app/assets/icons/upArrow";
import { useEffect, useState } from "react";

const DEFAULT_BTN_CLS =
    "cursor-pointer fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-1 md:p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
    const [btnCls, setBtnCls] = useState<string>(DEFAULT_BTN_CLS);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
            } else {
                setBtnCls(DEFAULT_BTN_CLS + " hidden");
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true } as AddEventListenerOptions);
        return () => {
            window.removeEventListener("scroll", handleScroll, { passive: true } as EventListenerOptions);
        };
    }, []);

    const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button className={btnCls} onClick={onClickBtn}>
            <UpArrowIcon />
            <span className="hidden">Top Button</span>
        </button>
    );
};

export default ScrollToTop;