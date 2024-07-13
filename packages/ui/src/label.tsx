import { cn } from "../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  required: boolean;
}

export function Label({ text, required, ...props }: ButtonProps) {
  return (
    <label className={cn(`p-[2px]`, props.className)}>
      {text} {required ? <span className={`text-red-400`}>*</span> : null}
    </label>
  );
}
