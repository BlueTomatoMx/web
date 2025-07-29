import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function UseCases() {
  const useCases = [
    {
      value: "item-1",
      trigger: "Problema: Gestión de Inventario Ineficiente",
      content:
        "Solución: Desarrollamos apps de inventario a medida que te permiten seguir el stock en tiempo real, automatizar alertas de reorden y generar reportes al instante, reduciendo errores manuales y ahorrando tiempo. Palabras clave: App de Inventario, AppSheet, Power Apps.",
    },
    {
      value: "item-2",
      trigger: "Problema: Seguimiento Complejo de Activos e Inspecciones",
      content:
        "Solución: Digitaliza tus procesos de inspección con apps móviles que permiten a los equipos de campo capturar datos, fotos y firmas. Automatiza reportes y asegura el cumplimiento con facilidad. Palabras clave: App Customizada, Transformación Digital.",
    },
    {
      value: "item-3",
      trigger: "Problema: Datos Desconectados y Reportes Manuales",
      content:
        "Solución: Centralizamos tus datos de múltiples fuentes y construimos dashboards interactivos con herramientas como Looker Studio. Obtén información valiosa y toma decisiones basadas en datos sin el lío manual de las hojas de cálculo. Palabras clave: Visualización de Datos, Low Code No Code.",
    },
    {
      value: "item-4",
      trigger: "Problema: Falta de Habilidades Técnicas Internas",
      content:
        "Solución: Nuestra capacitación en Citizen Development empodera a tus empleados no técnicos para construir sus propias soluciones. Proveemos el marco, las mejores prácticas y el soporte para fomentar la innovación dentro de tu organización. Palabras clave: Citizen Development, Capacitación.",
    },
  ];

  return (
    <section id="use-cases" className="w-full bg-secondary/50 py-24 sm:py-32">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            Resuelve Problemas de Negocio Reales
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Desde hojas de cálculo caóticas hasta aplicaciones optimizadas, mira cómo abordamos los desafíos comunes de nuestros clientes.
          </p>

          <Accordion type="single" collapsible className="w-full mt-8">
            {useCases.map((useCase) => (
              <AccordionItem key={useCase.value} value={useCase.value}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">{useCase.trigger}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{useCase.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex items-center justify-center order-1 md:order-2">
            <Image
                src="/buisness.png"
                width={600}
                height={500}
                alt="Ilustración de proceso de negocio"
                className="rounded-lg shadow-lg aspect-[6/5] object-cover"
            />
        </div>
      </div>
    </section>
  );
}
