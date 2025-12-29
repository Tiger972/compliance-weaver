import { Link2, Scan, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Link2,
      title: "Connexion sécurisée",
      description:
        "Connectez votre environnement AWS en quelques clics. Accès read-only uniquement, vos données restent sécurisées.",
      highlight: "5 minutes de setup",
    },
    {
      number: "02",
      icon: Scan,
      title: "Scan automatisé",
      description:
        "Compl.io scanne votre infrastructure AWS et teste 40 contrôles ISO 27001. Résultats en 2 minutes. Rapports prêts pour auditors.",
      highlight: "Monitoring 24/7",
    },
    {
      number: "03",
      icon: FileText,
      title: "Rapports & alertes",
      description: "Recevez des rapports d'audit prêts à l'emploi et des alertes instantanées en cas d'écart détecté.",
      highlight: "Temps réel",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comment <span className="gradient-text">COMPLIO</span> sécurise votre infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple en 3 étapes pour une conformité sans effort
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative bg-background rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-glass-lg transition-all h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-8 px-4 py-1 gradient-primary rounded-full">
                  <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:gradient-primary transition-colors">
                  <step.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-xs font-medium text-accent">{step.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
