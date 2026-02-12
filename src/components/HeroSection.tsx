import { Button } from "@/components/ui/button";
import DashboardMockup from "@/components/DashboardMockup";
import { ArrowRight, CalendarCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
              Audit ISO 27001 automatisé
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground opacity-0 animate-fade-in-up">
              Audit ISO 27001 : sécurisez votre{" "}
              <span className="gradient-text">conformité</span>{" "}
              sans complexité
            </h1>

            <div className="space-y-3 opacity-0 animate-fade-in-up animation-delay-100">
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                La norme ISO 27001 est devenue un standard incontournable pour démontrer la fiabilité et la sécurité de votre système d'information. Avec Complio, l'audit ISO 27001 devient plus rapide, plus fiable et continuellement à jour, grâce à l'automatisation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-200">
              <Button variant="gradient" size="xl" asChild>
                <a href="https://calendar.app.google/UEGbiWjVN4niVoE37" target="_blank" rel="noopener noreferrer">
                  Demander une démo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline-subtle" size="xl" asChild>
                <a href="https://calendar.app.google/UEGbiWjVN4niVoE37" target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="w-5 h-5" />
                  Réserver un audit
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 opacity-0 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyber-green rounded-full" />
                <span className="text-sm text-muted-foreground">Setup en 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyber-green rounded-full" />
                <span className="text-sm text-muted-foreground">Accès read-only sécurisé</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 opacity-0 animate-fade-in-up animation-delay-400">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
