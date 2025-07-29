
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WaveReveal from "@/components/animata/text/wave-reveal";
import SplitText from "@/components/animata/text/split-text";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export interface CircleProps {
  height?: string;
  width?: string;
  bgColor?: string;
  borderRadius?: string;
}

interface CylinderProps {
  text?: string;
  height?: string;
  width?: string;
  bgColor?: string;
  interactive?: boolean;
}

interface LineProps {
  className?: string;
  animationEnd: boolean;
}

function Circle({
  height = "h-12 md:h-24",
  width = "w-12 md:w-24",
  bgColor = "bg-primary/20",
  borderRadius = "rounded-full",
}: CircleProps) {
  return <div className={cn(height, width, borderRadius, bgColor)} />;
}

function Cylinder({
  text,
  height = "h-12 md:h-24",
  width = "w-28 md:w-56",
  bgColor = "bg-slate-100",
  interactive = false,
}: CylinderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full",
        height,
        width,
        bgColor
      )}
    >
      {interactive ? (
         <SplitText
          className="min-w-fit px-4 text-4xl font-bold text-foreground md:px-6 md:text-7xl"
          text={text ?? ""}
        />
      ) : (
        <WaveReveal
          className={cn("min-w-fit px-4 text-xl font-bold text-foreground md:px-6 md:text-5xl")}
          text={text ?? ""}
          blur={false}
          direction="up"
          delay={0}
          duration="50ms"
        />
      )}
    </div>
  );
}

function LineOne({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        "duration-700",
        animationEnd
          ? "animate-out fade-out slide-out-to-left-full"
          : "animate-in fade-in slide-in-from-right-full"
      )}
    >
      <Circle bgColor="bg-primary/70" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle bgColor="bg-slate-100" />
      <Cylinder bgColor="bg-secondary" />
      <Cylinder bgColor="bg-accent" width="w-56 md:w-[300px]" />
      <Cylinder bgColor="bg-accent" />
    </div>
  );
}

function LineTwo({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        "duration-700",
        animationEnd
          ? "animate-out fade-out slide-out-to-right-full"
          : "animate-in fade-in slide-in-from-left-full"
      )}
    >
      <Circle bgColor="bg-primary/70" />
      <Cylinder text="Transforma" width="w-64 md:w-[400px]" />
      <Circle bgColor="bg-primary/50" borderRadius="rounded-t-full rounded-bl-full" />
      <Circle bgColor="bg-primary/70" />
      <Cylinder bgColor="bg-secondary" />
    </div>
  );
}

function LineThree({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        "duration-700",
        animationEnd
          ? "animate-out fade-out slide-out-to-left-full"
          : "animate-in fade-in slide-in-from-right-full"
      )}
    >
      <Cylinder bgColor="bg-accent" />
      <Circle bgColor="bg-secondary" borderRadius="rounded-t-full rounded-br-full" />
      <Circle bgColor="bg-accent" />
      <Cylinder text="Tu Negocio" width="w-72 md:w-[640px]" interactive={true} />
      <Circle bgColor="bg-secondary" />
      <Cylinder bgColor="bg-accent" />
    </div>
  );
}

function LineFour({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        "duration-700",
        animationEnd
          ? "animate-out fade-out slide-out-to-right-full"
          : "animate-in fade-in slide-in-from-left-full"
      )}
    >
      <Circle bgColor="bg-primary/70" />
      <Cylinder text="con Soluciones Low-Code" width="w-96 md:w-[700px]" />
      <Circle bgColor="bg-primary/50" borderRadius="rounded-t-full rounded-br-full" />
    </div>
  );
}

function LineFive({ className, animationEnd }: LineProps) {
  return (
    <div
      className={cn(
        className,
        "duration-700",
        animationEnd
          ? "animate-out fade-out slide-out-to-left-full"
          : "animate-in fade-in slide-in-from-right-full"
      )}
    >
      <Cylinder bgColor="bg-secondary" />
      <Cylinder bgColor="bg-accent" width="w-32 md:w-[400px]" />
      <Circle bgColor="bg-accent" />
      <Cylinder bgColor="bg-secondary" />
    </div>
  );
}

export function Hero({
  animateOut,
}: {
  animateOut?: boolean;
}) {
  const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    if (!animateOut) {
      return;
    }

    const timer = setTimeout(() => {
      setAnimationEnd(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [animateOut]);

  const common = "flex duration-500 ease-in-out fill-mode-forwards";

  return (
    <section id="hero" className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-100 bg-[length:200%_200%] animate-animated-gradient py-12 sm:py-20">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-1 md:gap-3"
          )}
        >
          <LineOne className={common} animationEnd={animationEnd} />
          <LineTwo className={common} animationEnd={animationEnd} />
          <LineThree className={common} animationEnd={animationEnd} />
          <LineFour className={common} animationEnd={animationEnd} />
          <LineFive className={common} animationEnd={animationEnd} />
        </div>
      </div>
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
        className="mt-12"
      >
        <Button asChild size="lg">
          <a href="#services">
            Comenzar Transformación
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
