"use client";

import HeaderBreadCrumb from "./HeaderBreadCrumb";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b-2 border-gray-150">
      <div className="text-m font-medium pl-4">
        <HeaderBreadCrumb />
      </div>
      <CircleHelpIcon className="w-6 h-5 text-muted-foreground cursor-pointer" />
    </header>
  );
};

export default Header;

function CircleHelpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}
