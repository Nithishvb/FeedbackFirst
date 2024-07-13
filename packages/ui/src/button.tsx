// "use client";

import { ReactNode } from "react";
import { cn } from "../utils";
// import { LoadingSpinner } from "./icons";
import "./style.css"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "success" | "danger";
  loading?: boolean;
  icon?: ReactNode;
  shortcut?: string;
  disabledTooltip?: string | ReactNode;
}

export function Button({
  text,
  variant = "primary",
  loading,
  shortcut,
  ...props
}: ButtonProps) {
  return (
    <button
      // if onClick is passed, it's a "button" type, otherwise it's being used in a form, hence "submit"
      type={props.onClick ? "button" : "submit"}
      onClick={props.onClick}
      className={cn(variant == "outline" ? `px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 ${props.className}` :  `px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 bg-black ${props.className}`)}
      // {...props}
    >
      {/* {loading ? <LoadingSpinner /> : icon ? icon : null} */}
      <p className={variant == "outline" ? "text-black":  `text-white`}>{text}</p>
      {shortcut && (
        <kbd className="hidden rounded bg-zinc-700 px-2 py-0.5 text-xs font-light text-gray-400 transition-all duration-75 group-hover:bg-gray-100 group-hover:text-gray-500 md:inline-block">
          {shortcut}
        </kbd>
      )}
    </button>
  );
}

{/* <button className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
  Backdrop blur
</button> */}