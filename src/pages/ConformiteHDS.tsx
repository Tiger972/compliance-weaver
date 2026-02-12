import CompliancePage from "@/components/CompliancePage";

const ConformiteHDS = () => (
  <CompliancePage
    metaTitle="Conformité HDS (Hébergeur de Données de Santé) | Complio"
    metaDescription="Préparez votre certification HDS sur AWS. Complio automatise les contrôles de sécurité exigés pour l'hébergement de données de santé."
    h1="Conformité HDS : sécurisez vos données de santé sur le cloud"
    canonicalPath="/conformite-hds"
    sections={[
      {
        title: "Pourquoi la certification HDS est obligatoire",
        items: [
          "La certification HDS est obligatoire pour tout hébergeur de données de santé en France",
          "Elle repose sur l'ISO 27001 avec des exigences supplémentaires spécifiques au secteur santé",
        ],
      },
      {
        title: "HDS et ISO 27001 : quelle différence ?",
        items: [
          "HDS = ISO 27001 + exigences santé",
          "Contrôles renforcés sur la confidentialité",
          "Traçabilité des accès aux données de santé",
          "Localisation des données",
        ],
      },
      {
        title: "Comment Complio aide à la conformité HDS",
        items: [
          "Couverture des contrôles ISO 27001 (socle HDS)",
          "Vérification du chiffrement des données",
          "Audit des accès et permissions",
          "Rapport prêt pour l'auditeur",
        ],
      },
    ]}
    cta={{
      title: "Bientôt disponible – Complio Pro avec module HDS",
      primaryLabel: "Me notifier du lancement",
      primaryLink: "/contact",
      comingSoon: "Le module HDS arrive au Q3 2026",
    }}
    relatedLinks={[
      { label: "Conformité ISO 27001 (socle HDS)", href: "/conformite-iso-27001" },
      { label: "Conformité pour les SaaS", href: "/conformite-cloud-saas" },
    ]}
  />
);

export default ConformiteHDS;
