import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function TechStack() {
  const microsoftTools = [
    { name: "Power Apps", logo: "/microsoft.svg" },
    { name: "Power Automate", logo: "/microsoft.svg" },
    { name: "Power BI", logo: "/microsoft.svg" },
  ];
  const googleTools = [
    { name: "AppSheet", logo: "/google.svg" },
    { name: "Looker Studio", logo: "/google.svg" },
    { name: "Workspace", logo: "/google.svg" },
  ];

  const ToolCard = ({ platform, tools }: { platform: string, tools: {name: string, logo: string}[] }) => (
    <Card className="flex-1 min-w-[300px] shadow-lg border-transparent hover:border-accent/50 transition-all">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 text-2xl">
          <Image src={tools[0].logo} alt={`${platform} logo`} width={30} height={30} />
          {platform}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-muted-foreground">
          {tools.map(tool => (
            <li key={tool.name} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent"/>
              {tool.name}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <section id="tech-stack" className="w-full bg-secondary/50 py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            Nuestras Tecnologías
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Nos especializamos en las plataformas low-code líderes de Microsoft y Google para construir soluciones robustas.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <ToolCard platform="Microsoft Power Platform" tools={microsoftTools} />
          <ToolCard platform="Google Workspace" tools={googleTools} />
        </div>
      </div>
    </section>
  );
}
