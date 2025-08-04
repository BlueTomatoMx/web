import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="/logo.svg" alt="Blue Tomato Logo" width="24" height="24" />
          <p className="text-center text-sm leading-loose md:text-left">
            Construido por{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Blue Tomato
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noreferrer" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                <Image src="/logo.svg" alt="Blue Tomato" width={24} height={24} />
            </a>
             <a href="#" target="_blank" rel="noreferrer" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-6 w-6" />
            </a>
             <a href="#" target="_blank" rel="noreferrer" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-6 w-6" />
            </a>
        </div>
      </div>
    </footer>
  );
}
