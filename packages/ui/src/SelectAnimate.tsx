import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "./components/ui/select";

 interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SelectAnimate = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] w-[270px] rounded-lg transition duration-300 group/input mt-2"
    >
      <Select
        onValueChange={props?.onChange}
        value={props?.value}
      >
        <SelectTrigger
          className="p-2.5 h-10 bg-gray-50 flex h-10 w-full bg-gray-50 border border-gray-300 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md py-2 text-sm file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400"
        >
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Text">Text</SelectItem>
          <SelectItem value="Video">Video</SelectItem>
          <SelectItem value="TextVideo">Text and video</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
});

export {SelectAnimate};
