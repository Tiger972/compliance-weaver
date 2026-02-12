import CompliancePage from "@/components/CompliancePage";

const ConformiteNIS2 = () => (
  <CompliancePage
    metaTitle="Conformité NIS2 | Anticipez la directive cybersécurité – Complio"
    metaDescription="Préparez votre conformité NIS2 sur AWS. Gestion des risques, sécurité supply chain et notification des incidents automatisés avec Complio."
    h1="Conformité NIS2 : anticipez la directive européenne cybersécurité"
    canonicalPath="/conformite-nis2"
    sections={[
      {
        title: "La directive NIS2",
        items: [
          "La directive NIS2 renforce les exigences de cybersécurité pour les entreprises européennes",
          "Elle entre en vigueur en 2024 et concerne de nombreux secteurs",
        ],
      },
      {
        title: "Qui est concerné par NIS2 ?",
        items: [
          "Secteurs essentiels : énergie, transport, santé, finance",
          "Secteurs importants : services numériques, industrie, recherche",
          "PME incluses si elles opèrent dans ces secteurs",
        ],
      },
      {
        title: "Les exigences NIS2",
        items: [
          "Gestion des risques cyber",
          "Sécurité de la supply chain",
          "Notification des incidents",
          "Mesures techniques de protection",
        ],
      },
      {
        title: "Comment Complio aide",
        items: [
          "Contrôles techniques alignés sur NIS2",
          "Audit continu de l'infrastructure",
          "Documentation pour les autorités",
        ],
      },
    ]}
    cta={{
      title: "Bientôt disponible – Complio Pro avec module NIS2",
      primaryLabel: "Me notifier du lancement",
      primaryLink: "/contact",
      comingSoon: "Le module NIS2 arrive en 2027",
    }}
    relatedLinks={[
      { label: "Conformité ISO 27001", href: "/conformite-iso-27001" },
      { label: "Conformité pour les SaaS", href: "/conformite-cloud-saas" },
    ]}
  />
);

export default ConformiteNIS2;
