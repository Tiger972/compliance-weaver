import { Code, ClipboardCheck, TrendingUp, Eye } from "lucide-react";

const ForWho = () => {
  const personas = [
    {
      icon: Code,
      role: "DevSecOps",
      title: "Pour les équipes DevSecOps",
      benefits: [
        "Intégration native avec vos pipelines CI/CD",
        "APIs pour automatiser vos workflows",
        "Alertes Slack, Teams ou webhook",
        "Tableaux de bord techniques détaillés",
      ],
      quote: "Plus besoin de courir après les preuves avant chaque audit.",
    },
    {
      icon: ClipboardCheck,
      role: "RSSI / CTO",
      title: "Pour les RSSI et CTO",
      benefits: [
        "Vue d'ensemble de la posture sécurité",
        "Rapports exécutifs automatisés",
        "Suivi de la progression vers la certification",
        "Historique complet pour les auditeurs",
      ],
      quote: "Une vision claire de notre conformité, à tout moment.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conçu pour <span className="gradient-text">votre équipe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez dans les tranchées du code ou aux commandes de la stratégie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-10 rounded-3xl border border-border bg-background hover:shadow-glass-lg transition-all group overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 gradient-primary opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center">
                    <persona.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent">{persona.role}</span>
                    <h3 className="text-xl font-semibold text-foreground">{persona.title}</h3>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-3 mb-6">
                  {persona.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyber-green/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-cyber-green rounded-full" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Quote */}
                <div className="p-4 bg-secondary/50 rounded-xl border-l-4 border-accent">
                  <p className="text-sm italic text-foreground">"{persona.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;