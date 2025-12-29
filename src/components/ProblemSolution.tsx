import { X, Check, FileSpreadsheet, Clock, AlertCircle, Zap, Shield, Bell } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Feuilles de calcul interminables",
      description: "Des heures à mettre à jour manuellement vos preuves de conformité.",
    },
    {
      icon: Clock,
      title: "Audits stressants",
      description: "Préparation chaotique avant chaque visite d'auditeur.",
    },
    {
      icon: AlertCircle,
      title: "Manque de visibilité",
      description: "Découvrir les problèmes le jour de l'audit, quand il est trop tard.",
    },
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Automatisation complète",
      description: "Tous vos contrôles ISO 27001 testés automatiquement, 24/7.",
    },
    {
      icon: Shield,
      title: "Conformité continue",
      description: "Soyez prêts pour l'audit à tout moment, sans effort.",
    },
    {
      icon: Bell,
      title: "Alertes temps réel",
      description: "Soyez notifié instantanément dès qu'un écart est détecté.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            La conformité ISO 27001 manuelle{" "}
            <span className="gradient-text">est un frein</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment Compl.io transforme votre approche de la conformité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">L'ancienne méthode</h3>
            </div>
            
            {problems.map((problem, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-background hover:border-destructive/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-destructive/10 transition-colors">
                    <problem.icon className="w-6 h-6 text-muted-foreground group-hover:text-destructive transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{problem.title}</h4>
                    <p className="text-muted-foreground text-sm">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Avec Compl.io</h3>
            </div>
            
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-glow transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:gradient-primary transition-colors">
                    <solution.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;