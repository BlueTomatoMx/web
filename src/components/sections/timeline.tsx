"use client";
import { FileText, Lightbulb, Rocket, Users, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Timeline() {
  const timelineSteps = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "1. Nos contactas",
      description: "Inicias el camino contándonos tu idea o el problema que necesitas resolver. Es el primer paso hacia la innovación."
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "2. Diagnóstico gratuito",
      description: "Analizamos a fondo tu situación para identificar los puntos clave de mejora y te presentamos un plan de acción claro y sin costo."
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "3. Capacitación o desarrollo",
      description: "Dependiendo del plan, empoderamos a tu equipo con nuevas habilidades o construimos la solución a medida que tu negocio necesita."
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "4. Lanzamiento",
      description: "Implementamos la nueva herramienta o proceso en tu operación, asegurando una transición suave y un impacto inmediato."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "5. Acompañamiento",
      description: "No te dejamos solo. Monitoreamos los resultados, ofrecemos soporte y buscamos constantemente nuevas oportunidades de optimización."
    }
  ];

  return (
    <section id="timeline" className="w-full bg-background py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            Tu Camino hacia la Transformación
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Desde la primera conversación hasta la mejora continua, así es como te acompañamos en cada paso del proceso.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <CarouselContent>
            {timelineSteps.map((step, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="group flex flex-col h-full text-center items-center shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent p-4 rounded-full transition-colors duration-300">
                        {step.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="flex-grow">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
