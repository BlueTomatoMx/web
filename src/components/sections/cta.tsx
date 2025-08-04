import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export function Cta() {
  return (
    <section id="contact" className="w-full bg-muted py-24 sm:py-32">
      <div className="container text-center">
        <Image src="/logo.png" alt="Blue Tomato Logo" width={80} height={80} className="mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          ¿Listo para Iniciar tu Transformación Digital?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Hablemos de tu proyecto. En Blue Tomato estamos aquí para ayudarte a identificar oportunidades de automatización y eficiencia.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="mailto:contact@bluetomato.com">
              <Mail className="mr-2 h-4 w-4" /> Escríbenos
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-background">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
