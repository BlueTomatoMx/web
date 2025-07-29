// This component is based on the user's provided code.
// It creates an interactive text effect where letters split on hover.

"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function SplitText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [activeIndex, setIndex] = useState<number>();
  const timer = useRef<NodeJS.Timeout>();

  const letterClassName =
    "inline h-1/2 select-none overflow-y-hidden leading-none transition-all duration-500 ease-out whitespace-pre";

  return (
    <div
      onMouseLeave={() => {
        timer.current = setTimeout(() => {
          setIndex(undefined);
        }, 200); // Add a small delay to avoid flickering
      }}
      className={cn(
        "relative mx-auto cursor-pointer", // Using cursor-pointer instead of a custom one
        className
      )}
    >
      {/* add hidden text so that we maintain the size for any text */}
      <div className="invisible leading-none">{text}</div>
      <div className="absolute top-0 flex h-full w-full items-center justify-center">
        {text.split("").map((letter, index) => (
          <div
            onMouseEnter={() => {
              if (timer.current) {
                clearTimeout(timer.current);
              }
              setIndex(index);
            }}
            key={index}
            className="relative inline-flex h-full flex-col leading-none"
          >
            {/* top half */}
            <span
              className={cn(letterClassName, {
                "-translate-y-5": index === activeIndex,
                "-translate-y-3":
                  activeIndex !== undefined &&
                  (index === activeIndex - 1 || index === activeIndex + 1),
                "-translate-y-1":
                  activeIndex !== undefined &&
                  (index === activeIndex - 2 || index === activeIndex + 2),
              })}
            >
              {letter}
            </span>

            {/* bottom half */}
            <span
              className={cn(letterClassName, {
                "translate-y-5": index === activeIndex,
                "translate-y-3":
                  activeIndex !== undefined &&
                  (index === activeIndex - 1 || index === activeIndex + 1),
                "translate-y-1":
                  activeIndex !== undefined &&
                  (index === activeIndex - 2 || index === activeIndex + 2),
              })}
            >
              <span className="absolute -translate-y-1/2 leading-none">{letter}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
