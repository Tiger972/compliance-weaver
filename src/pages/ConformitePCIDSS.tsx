import CompliancePage from "@/components/CompliancePage";

const ConformitePCIDSS = () => (
  <CompliancePage
    metaTitle="Conformité PCI-DSS sur AWS | Sécurisez vos paiements – Complio"
    metaDescription="Automatisez votre conformité PCI-DSS sur AWS. Protégez les données de paiement et préparez vos audits de certification."
    h1="Conformité PCI-DSS : protégez les données de paiement sur AWS"
    canonicalPath="/conformite-pci-dss"
    sections={[
      {
        title: "PCI-DSS : le standard des paiements",
        items: [
          "PCI-DSS est le standard de sécurité pour toute entreprise qui traite des données de carte bancaire",
          "Sur AWS, la conformité PCI-DSS exige une configuration rigoureuse de l'infrastructure",
        ],
      },
      {
        title: "Les exigences PCI-DSS sur le cloud",
        items: [
          "Chiffrement des données de carte",
          "Segmentation réseau",
          "Gestion des accès privilégiés",
          "Journalisation et monitoring",
          "Tests de sécurité réguliers",
        ],
      },
      {
        title: "Complio et PCI-DSS",
        items: [
          "Vérification des configurations réseau",
          "Audit du chiffrement",
          "Contrôle des accès IAM",
          "Rapport de conformité",
        ],
      },
    ]}
    cta={{
      title: "Bientôt disponible – Complio Pro avec module PCI-DSS",
      primaryLabel: "Me notifier du lancement",
      primaryLink: "/contact",
      comingSoon: "Le module PCI-DSS arrive au Q4 2026",
    }}
    relatedLinks={[
      { label: "Conformité ISO 27001", href: "/conformite-iso-27001" },
      { label: "Conformité NIS2", href: "/conformite-nis2" },
    ]}
  />
);

export default ConformitePCIDSS;
