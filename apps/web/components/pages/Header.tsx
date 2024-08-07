import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-10 lg:px-6 h-14 flex items-center justify-center gap-[65px]">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <span className="font-semibold text-xl">FeedbackFirst</span>
      </Link>
      <nav className="flex sm:gap-6 lg:gap-10">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div>
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute overflow-hidden rounded-full">
            <span className="absolute rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 py-2   ">
            <span>Get started</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
