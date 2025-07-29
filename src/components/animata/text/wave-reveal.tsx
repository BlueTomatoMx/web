// This is a simplified version inspired by WaveReveal, created to avoid external dependencies.
// It uses Framer Motion for the animations.

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface WaveRevealProps {
  text: string;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  duration?: string;
  blur?: boolean; // Note: blur effect is simplified here
}

export default function WaveReveal({
  text,
  direction = "up",
  className,
  delay = 0,
  duration = "500ms", // Corresponds to framer-motion's duration in seconds
}: WaveRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const slideIn = {
    hidden: {
      y: direction === "up" ? "100%" : "-100%",
      opacity: 0,
      transition: {
        duration: parseFloat(duration) / 1000,
        ease: "easeInOut",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: parseFloat(duration) / 1000,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={cn(className)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideIn}
      >
        {text}
      </motion.div>
    </div>
  );
}
