import { Rocket, TrendingUp, Cloud, Building2 } from "lucide-react";

const ForWho = () => {
  const personas = [
    {
      icon: Rocket,
      role: "Startups SaaS",
      title: "Pour les startups SaaS",
      benefits: [
        "Préparez votre certification ISO 27001 rapidement pour rassurer vos premiers clients",
        "Automatisez dès le départ pour éviter la dette de conformité",
        "Identifiez vos écarts avant les due diligences et levées de fonds",
        "Setup en 5 minutes, sans expertise sécurité interne",
      ],
      quote: "La certification nous a ouvert les portes des grands comptes.",
    },
    {
      icon: TrendingUp,
      role: "Scale-ups",
      title: "Pour les scale-ups",
      benefits: [
        "Maintenez la conformité malgré la croissance rapide de l'équipe et de l'infra",
        "Alertes en temps réel sur les écarts de sécurité",
        "Visibilité continue sur votre posture de conformité",
        "Intégration dans vos pipelines CI/CD existants",
      ],
      quote: "Complio grandit avec nous sans friction.",
    },
    {
      icon: Cloud,
      role: "Cloud-native",
      title: "Pour les entreprises cloud-native",
      benefits: [
        "Contrôles spécifiques AWS (S3, EC2, IAM, CloudTrail, VPC)",
        "Architecture multi-comptes supportée nativement",
        "Accès read-only sécurisé à votre infrastructure",
        "Compliance-as-Code intégré à votre workflow DevOps",
      ],
      quote: "Enfin un outil pensé pour le cloud, pas adapté après coup.",
    },
    {
      icon: Building2,
      role: "Réglementé",
      title: "Pour les organisations réglementées",
      benefits: [
        "Contrôles techniques alignés sur ISO 27001 (HDS, PCI-DSS, NIS2 bientôt)",
        "Rapports de scan horodatés",
        "Rapports de conformité technique clairs",
        "Traçabilité complète des actions correctives",
      ],
      quote: "Un gain de temps considérable pour nos équipes conformité.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pour quelles <span className="gradient-text">entreprises</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complio accompagne toutes les organisations qui souhaitent préparer ou maintenir leur certification ISO 27001 sur AWS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-10 rounded-3xl border border-border bg-background hover:shadow-glass-lg transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 gradient-primary opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center">
                    <persona.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent">{persona.role}</span>
                    <h3 className="text-xl font-semibold text-foreground">{persona.title}</h3>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {persona.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyber-green/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-cyber-green rounded-full" />
                      </div>
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

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
