import { X, Check, Clock, AlertCircle, FileSpreadsheet, UserX, Zap, Link2, BarChart3, Shield } from "lucide-react";

const HowItWorks = () => {
  const manual = [
    { icon: Clock, text: "Processus long de plusieurs semaines" },
    { icon: FileSpreadsheet, text: "Documentation manuelle obsolète rapidement" },
    { icon: UserX, text: "Erreurs humaines dans la collecte de preuves" },
    { icon: AlertCircle, text: "Visibilité limitée entre deux audits" },
  ];

  const automatise = [
    { icon: Link2, text: "Connexion directe à l'infrastructure cloud AWS" },
    { icon: Zap, text: "Collecte automatique des preuves de conformité" },
    { icon: Shield, text: "Contrôles ISO 27001 exécutés en continu, 24/7" },
    { icon: BarChart3, text: "Tableaux de bord et rapports en temps réel" },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Audit manuel vs Audit{" "}
            <span className="gradient-text">automatisé</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La préparation certification ISO 27001 traditionnelle est coûteuse et inefficace. Découvrez pourquoi l'audit automatisé change la donne.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Manuel */}
          <div className="p-8 lg:p-10 rounded-3xl border border-border bg-background">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Audit manuel</h3>
            </div>
            <ul className="space-y-5">
              {manual.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-muted-foreground pt-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automatisé */}
          <div className="p-8 lg:p-10 rounded-3xl border border-accent/30 bg-background shadow-glow">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Audit automatisé avec Complio</h3>
            </div>
            <ul className="space-y-5">
              {automatise.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyber-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-cyber-green" />
                  </div>
                  <span className="text-muted-foreground pt-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
