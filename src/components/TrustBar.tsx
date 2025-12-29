import { Shield, Cloud, Lock, Zap } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: Cloud,
      label: "Compatible AWS",
    },
    {
      icon: Shield,
      label: "ISO 27001 Ready",
    },
    {
      icon: Lock,
      label: "Sécurisé par design",
    },
    {
      icon: Zap,
      label: "Temps réel",
    },
  ];

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary/60" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;