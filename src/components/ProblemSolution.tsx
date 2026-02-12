import { Shield, Search, FileCheck, AlertTriangle, Ban, Eye, Lock, Users, Server } from "lucide-react";

const ProblemSolution = () => {
  const risques = [
    {
      icon: Ban,
      title: "Perte de contrats stratégiques",
      description: "De nombreux clients exigent la certification ISO 27001 comme prérequis dans leurs appels d'offres.",
    },
    {
      icon: AlertTriangle,
      title: "Sanctions et responsabilité juridique",
      description: "Le non-respect des exigences de sécurité peut entraîner des sanctions contractuelles et réglementaires.",
    },
    {
      icon: Eye,
      title: "Failles non détectées",
      description: "Sans audit régulier, les vulnérabilités s'accumulent et exposent votre organisation à des incidents majeurs.",
    },
  ];

  const exigencesCloud = [
    {
      icon: Server,
      title: "Traçabilité complète",
      description: "Chaque action sur votre infrastructure cloud doit être journalisée et auditable.",
    },
    {
      icon: Lock,
      title: "Contrôle des privilèges",
      description: "La gestion des accès IAM et le principe du moindre privilège sont essentiels.",
    },
    {
      icon: Users,
      title: "Gouvernance renforcée",
      description: "Les environnements multi-comptes nécessitent une gouvernance centralisée et automatisée.",
    },
  ];

  return (
    <>
      {/* Section 1: Qu'est-ce qu'un audit ISO 27001 ? */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Qu'est-ce qu'un{" "}
              <span className="gradient-text">audit ISO 27001</span> ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un audit ISO 27001 évalue la conformité de votre Système de Management de la Sécurité de l'Information (SMSI) aux exigences de la norme internationale ISO/IEC 27001.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Audit interne",
                description: "Réalisé par vos équipes ou un prestataire, il identifie les écarts avant l'audit de certification. C'est une étape préparatoire essentielle.",
              },
              {
                icon: FileCheck,
                title: "Audit de certification",
                description: "Conduit par un organisme accrédité, il valide que votre SMSI répond aux 93 contrôles de l'Annexe A de la norme ISO 27001.",
              },
              {
                icon: Shield,
                title: "Objectifs de l'audit",
                description: "Identifier les écarts de sécurité, corriger les faiblesses organisationnelles et techniques, et réduire les risques liés à votre système d'information.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-glass-lg transition-all group"
              >
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:gradient-primary transition-colors">
                  <item.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Pourquoi l'audit ISO 27001 est critique */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Pourquoi l'audit ISO 27001 est{" "}
              <span className="gradient-text">critique</span> pour le cloud
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Les entreprises cloud et SaaS font face à des exigences de sécurité renforcées. Un audit de conformité ISO 27001 n'est plus une option, c'est un avantage concurrentiel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Risques */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Risques en cas de non-conformité</h3>
              </div>

              {risques.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border bg-background hover:border-destructive/30 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-destructive/10 transition-colors">
                      <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-destructive transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Exigences cloud */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Exigences renforcées dans le cloud</h3>
              </div>

              {exigencesCloud.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-glow transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:gradient-primary transition-colors">
                      <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
