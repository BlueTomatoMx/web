"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getSuggestions } from "@/app/actions";
import { SuggestProcessImprovementsInput } from "@/ai/flows/suggest-improvements";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  processDescription: z.string().min(20, {
    message: "Por favor, describe tu proceso en al menos 20 caracteres.",
  }),
});

export function AiSuggester() {
  const [suggestions, setSuggestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      processDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions("");
    try {
      const result = await getSuggestions(values);
      if (result.error) {
        throw new Error(result.error);
      }
      setSuggestions(result.suggestions || "");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ocurrió un error",
        description: "No se pudieron obtener las sugerencias. Por favor, intenta de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-suggester" className="w-full py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-accent" />
            Obtén Sugerencias con IA
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Describe un proceso manual o ineficiente en tu empresa, y nuestra IA sugerirá cómo podría automatizarse con herramientas low-code.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Describe Tu Proceso</CardTitle>
              <CardDescription>
                Ejemplo: "Hacemos seguimiento manual de las solicitudes de vacaciones de los empleados usando una hoja de Excel. Es difícil ver quién está libre y cuándo, y las aprobaciones se hacen por correo."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="processDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Descripción del Proceso</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe tu proceso aquí..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "Generar Sugerencias"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {suggestions && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-center mb-4">Nuestras Recomendaciones</h3>
              <Card className="bg-background border-dashed">
                <CardContent className="pt-6">
                  <p className="whitespace-pre-wrap text-muted-foreground">{suggestions}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
