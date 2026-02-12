import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-background/70 backdrop-blur-md border border-border/50 rounded-3xl p-6 sm:p-12 lg:p-16 shadow-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-3xl mb-8 shadow-glow">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lancez votre audit ISO 27001{" "}
            <span className="gradient-text">sans friction</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Automatisez la préparation de votre certification ISO 27001 sur AWS. Connectez votre infrastructure en 5 minutes et obtenez votre premier rapport d'audit de conformité.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-2">
            <Button variant="gradient" size="xl" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="https://calendar.app.google/UEGbiWjVN4niVoE37" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
                Demander une démo
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>
            </Button>
            <Button variant="outline-subtle" size="xl" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="https://calendar.app.google/UEGbiWjVN4niVoE37" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
                <CalendarCheck className="w-5 h-5 flex-shrink-0" />
                Planifier un audit
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Réponse sous 24h • Démo gratuite • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
