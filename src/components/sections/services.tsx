import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppWindow, BookOpen, BrainCircuit } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <AppWindow className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />,
      title: "Desarrollo de Soluciones a Medida",
      description:
        "Construimos aplicaciones personalizadas en Power Apps y AppSheet para adaptarse perfectamente a tus necesidades operativas, desde gestión de inventario hasta automatización de flujos de trabajo complejos.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />,
      title: "Capacitación Corporativa",
      description:
        "Un programa práctico de 8 semanas que cubre lógica computacional, visualización de datos, automatización y las mejores prácticas de Citizen Development para empoderar a tu equipo.",
    },
  ];
  return (
    <section id="services" className="w-full bg-background py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Ya sea que necesites una solución lista para usar o quieras capacitar a tu equipo, tenemos lo que necesitas.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50">
              <CardHeader className="flex flex-col items-start gap-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-accent/10 transition-colors">
                    {service.icon}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
