import { Shield, Cloud, Lock, Zap } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: Cloud,
      label: "Compatible AWS",
    },
    {
      icon: Shield,
      label: "ISO 27001",
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
    <section className="py-8 bg-trust-bg border-y border-border overflow-hidden">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {/* Double the items for seamless infinite loop */}
        {[...trustItems, ...trustItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mx-8 md:mx-16 whitespace-nowrap"
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
