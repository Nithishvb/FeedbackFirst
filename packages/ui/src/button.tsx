"use client";

import { ReactNode } from "react";
import { cn } from "../utils";
import "../src/style.css";
// import { LoadingSpinner } from "./icons";

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
      className={cn(
        "group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all focus:outline-none",
        props.className
      )}
      disabled={props.disabled || loading}
      {...props}
    >
      {/* {loading ? <LoadingSpinner /> : icon ? icon : null} */}
      <p className="text-red-300">{text}</p>
      {shortcut && (
        <kbd className="hidden rounded bg-zinc-700 px-2 py-0.5 text-xs font-light text-gray-400 transition-all duration-75 group-hover:bg-gray-100 group-hover:text-gray-500 md:inline-block">
          {shortcut}
        </kbd>
      )}
    </button>
  );
}
