import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "L'audit ISO 27001 est-il obligatoire ?",
    answer: "La certification ISO 27001 n'est pas légalement obligatoire dans la plupart des cas. Cependant, elle est de plus en plus exigée contractuellement par les grands comptes, les secteurs réglementés (santé, finance, défense) et dans les appels d'offres. Pour les entreprises SaaS et cloud, c'est devenu un prérequis commercial incontournable pour rassurer clients et partenaires sur la sécurité de leurs données.",
  },
  {
    question: "Quelle est la différence entre un audit interne et une certification ISO 27001 ?",
    answer: "L'audit interne est un exercice préparatoire réalisé par vos équipes ou un prestataire externe. Il identifie les écarts et permet de corriger les non-conformités avant l'audit officiel. La certification, quant à elle, est délivrée par un organisme accrédité (comme AFNOR ou BSI) après un audit formel en deux phases. Complio vous accompagne sur l'audit interne en automatisant la collecte de preuves et l'évaluation de vos contrôles.",
  },
  {
    question: "Peut-on automatiser totalement un audit ISO 27001 ?",
    answer: "Les contrôles techniques liés à l'infrastructure cloud (chiffrement, gestion des accès, journalisation, sécurité réseau) peuvent être entièrement automatisés. En revanche, certains aspects organisationnels du SMSI (politiques, formation, gouvernance) nécessitent toujours une intervention humaine. Complio automatise la partie technique pour vous permettre de vous concentrer sur la dimension organisationnelle.",
  },
  {
    question: "L'audit ISO 27001 est-il compatible avec le cloud et AWS ?",
    answer: "Absolument. La norme ISO 27001 est conçue pour s'appliquer à tous types d'environnements, y compris le cloud public. Complio est spécifiquement conçu pour AWS et scanne vos services cloud (S3, EC2, IAM, CloudTrail, VPC, RDS...) pour vérifier leur conformité aux contrôles de l'Annexe A. L'accès se fait en mode read-only, sans impact sur votre infrastructure.",
  },
];

const FAQ = () => {
  // JSON-LD structured data for FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Questions fréquentes sur l'
            <span className="gradient-text">audit ISO 27001</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur l'audit de conformité ISO 27001 et l'automatisation avec Complio.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-2xl px-6 bg-background data-[state=open]:border-accent/30 data-[state=open]:shadow-glow transition-all"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
