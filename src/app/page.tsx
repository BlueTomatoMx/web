import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Timeline } from "@/components/sections/timeline";
import { UseCases } from "@/components/sections/use-cases";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";
import { TechStack } from "@/components/sections/tech-stack";
import { Pomodoro } from "@/components/sections/pomodoro";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Timeline />
      <Pomodoro />
      <TechStack />
      <UseCases />
      <Testimonials />
      <Cta />
    </>
  );
}
