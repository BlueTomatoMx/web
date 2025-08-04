import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  const navLinks = [
    { href: "#services", label: "Servicios" },
    { href: "#timeline", label: "Proceso" },
    { href: "#pomodoro", label: "Pomodoro" },
    { href: "#tech-stack", label: "Tecnologías" },
    { href: "#use-cases", label: "Casos de Uso" },
    { href: "#testimonials", label: "Testimonios" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Blue Tomato Logo" width={24} height={24} />
          <span className="font-bold text-lg">Blue Tomato</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild>
            <a href="#contact">Contáctanos</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                 <Button asChild size="lg" className="mt-4">
                    <a href="#contact">Contáctanos</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
