import { Clock, Zap, ArrowRight } from "lucide-react";

const TimelineComparison = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Combien de temps pour un{" "}
            <span className="gradient-text">audit ISO 27001</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Le temps de préparation d'un audit de conformité ISO 27001 varie considérablement selon l'approche choisie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Manuel */}
          <div className="p-8 rounded-3xl border border-border bg-background text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Audit manuel</h3>
            <p className="text-4xl font-bold text-foreground mb-2">6 à 12 mois</p>
            <p className="text-muted-foreground text-sm mb-6">de préparation initiale</p>
            <ul className="space-y-3 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">✗</span>
                <span>Collecte manuelle des preuves</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">✗</span>
                <span>Documentation à maintenir manuellement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-0.5">✗</span>
                <span>Conformité ponctuelle, pas continue</span>
              </li>
            </ul>
          </div>

          {/* Complio */}
          <div className="p-8 rounded-3xl border border-accent/30 bg-background shadow-glow text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Avec Complio</h3>
            <p className="text-4xl font-bold gradient-text mb-2">Quelques jours</p>
            <p className="text-muted-foreground text-sm mb-6">+ suivi continu automatisé</p>
            <ul className="space-y-3 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-cyber-green mt-0.5">✓</span>
                <span>Preuves collectées automatiquement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-green mt-0.5">✓</span>
                <span>Rapports générés en temps réel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyber-green mt-0.5">✓</span>
                <span>Conformité continue 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full">
            <span className="text-sm text-muted-foreground">Résultat :</span>
            <span className="text-sm font-semibold text-foreground">Jusqu'à 10x plus rapide qu'un audit ISO 27001 traditionnel</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComparison;
