import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Juan Pérez",
      title: "Gerente de Operaciones, Corp XYZ",
      avatar: "JP",
      image: "/people/man1.png",
      text: "La aplicación de inventario que construyeron para nosotros revolucionó nuestro flujo de trabajo. Lo que antes tomaba días, ahora toma minutos. Realmente transformador.",
    },
    {
      name: "Ana Smith",
      title: "Directora de RRHH, ABC Inc.",
      avatar: "AS",
      image: "/people/woman1.png",
      text: "La capacitación en Citizen Development empoderó a nuestro equipo para resolver sus propios problemas. El aumento en la eficiencia y la moral es palpable.",
    },
    {
      name: "Samuel García",
      title: "Jefe de Logística, Carga Global",
      avatar: "SG",
      image: "/people/man2.png",
      text: "Pasamos de estar ahogados en hojas de cálculo a tener una vista clara y en tiempo real de nuestros activos en todo el país. No puedo recomendarlos lo suficiente.",
    },
    {
      name: "Laura Chen",
      title: "CEO, Soluciones Innovadoras",
      avatar: "LC",
      image: "/people/woman2.png",
      text: "El equipo de Blue Tomato superó nuestras expectativas. Su experiencia en low-code es inigualable.",
    }
  ];
  return (
    <section id="testimonials" className="w-full bg-secondary/50 py-24 sm:py-32">
       <div className="container">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Historias reales de negocios que hemos ayudado a transformar.
            </p>
          </div>
          <Carousel
              opts={{
                  align: "start",
                  loop: true,
              }}
              className="w-full max-w-6xl mx-auto mt-12"
          >
              <CarouselContent>
              {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                      <Card className="h-full flex flex-col justify-between">
                          <CardContent className="pt-6 flex flex-col h-full">
                              <p className="italic text-muted-foreground flex-grow mb-6">"{testimonial.text}"</p>
                              <div className="flex items-center gap-4 mt-auto">
                                  <Avatar>
                                      <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" data-ai-hint="person portrait" />
                                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                      <p className="font-semibold">{testimonial.name}</p>
                                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                  </div>
                              </div>
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
