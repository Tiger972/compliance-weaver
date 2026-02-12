import { Scan, FolderCheck, Activity, BarChart3 } from "lucide-react";
import DashboardMockup from "@/components/DashboardMockup";

const CompliAutomates = () => {
  const features = [
    {
      icon: Scan,
      title: "Automatisation des contrôles ISO 27001",
      description: "40 contrôles de l'Annexe A testés automatiquement sur votre infrastructure AWS : chiffrement, accès IAM, journalisation CloudTrail, sécurité réseau.",
    },
    {
      icon: FolderCheck,
      title: "Centralisation des preuves de conformité",
      description: "Toutes vos preuves d'audit sont collectées, horodatées et stockées dans un format exploitable par les auditeurs (PDF, JSON, Markdown).",
    },
    {
      icon: Activity,
      title: "Suivi continu des écarts et actions correctives",
      description: "Chaque écart détecté est documenté avec une recommandation actionnable. Suivez la résolution en temps réel depuis votre tableau de bord.",
    },
    {
      icon: BarChart3,
      title: "Visualisation en temps réel",
      description: "Score de conformité, progression vers la certification, historique des scans : tout est visible en un coup d'œil pour piloter votre audit sécurité ISO 27001.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comment Complio automatise votre{" "}
            <span className="gradient-text">audit ISO 27001</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une plateforme conçue pour rendre l'audit de conformité ISO 27001 simple, continu et fiable sur AWS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-glow transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:gradient-primary transition-colors">
                    <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard preview */}
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompliAutomates;
