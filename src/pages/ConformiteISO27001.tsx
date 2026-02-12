import CompliancePage from "@/components/CompliancePage";

const ConformiteISO27001 = () => (
  <CompliancePage
    metaTitle="Conformité ISO 27001 AWS | Automatisez vos audits cloud – Complio"
    metaDescription="Automatisez votre conformité ISO 27001 sur AWS. Scannez 40 contrôles, identifiez les non-conformités et préparez votre certification en continu."
    h1="Conformité ISO 27001 sur AWS : automatisez vos audits"
    canonicalPath="/conformite-iso-27001"
    sections={[
      {
        title: "Pourquoi l'ISO 27001 est incontournable",
        items: [
          "La certification ISO 27001 est devenue incontournable pour les entreprises qui traitent des données sensibles",
          "Sur AWS, maintenir la conformité ISO 27001 demande une vigilance constante sur les configurations cloud",
        ],
      },
      {
        title: "Les défis de l'ISO 27001 sur AWS",
        items: [
          "Configurations qui dérivent en continu",
          "Multiplicité des services AWS à surveiller",
          "Documentation des preuves chronophage",
          "Audits stressants et coûteux",
        ],
      },
      {
        title: "Ce que Complio automatise pour l'ISO 27001",
        items: [
          "40+ contrôles techniques de l'Annexe A",
          "Scan des configurations IAM, S3, EC2, RDS, CloudTrail, VPC",
          "Rapport de conformité avec score",
          "Remédiations précises pour chaque non-conformité",
        ],
      },
    ]}
    controlCategories={[
      "A.5 : Politiques de sécurité",
      "A.6 : Organisation de la sécurité",
      "A.8 : Gestion des actifs",
      "A.9 : Contrôle d'accès",
      "A.10 : Cryptographie",
      "A.12 : Sécurité des opérations",
      "A.13 : Sécurité des communications",
    ]}
    cta={{
      title: "Prêt à automatiser votre conformité ISO 27001 ?",
      primaryLabel: "Réserver une démo",
      primaryLink: "https://calendar.app.google/UEGbiWjVN4niVoE37",
      isExternal: true,
      secondaryLabel: "Voir la documentation",
      secondaryLink: "/documentation",
    }}
    relatedLinks={[
      { label: "Conformité HDS (basée sur ISO 27001)", href: "/conformite-hds" },
      { label: "Conformité PCI-DSS", href: "/conformite-pci-dss" },
      { label: "Conformité NIS2", href: "/conformite-nis2" },
    ]}
  />
);

export default ConformiteISO27001;
