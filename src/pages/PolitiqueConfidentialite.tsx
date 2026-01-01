import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen page-gradient">
      <Navbar />

      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="gradient-text">Politique de confidentialité</span>
            </h1>
            <p className="text-muted-foreground mb-12">Dernière mise à jour : 1er janvier 2025</p>

            <div className="space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Chez Complio, nous prenons la protection de vos données personnelles très au sérieux. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
                </p>
              </section>

              {/* Données collectées */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Données collectées</h2>
                <p className="text-muted-foreground mb-4">Nous collectons les informations suivantes :</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Informations de compte (nom, email)</li>
                  <li>Credentials AWS (chiffrées AES-256, stockées localement)</li>
                  <li>Données d'utilisation (logs, métriques d'usage)</li>
                  <li>Informations de paiement (via Stripe, nous ne stockons pas les données bancaires)</li>
                </ul>
              </section>

              {/* Utilisation des données */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Utilisation des données</h2>
                <p className="text-muted-foreground mb-4">Vos données sont utilisées pour :</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Fournir et améliorer nos services</li>
                  <li>Communiquer avec vous sur votre compte</li>
                  <li>Générer des rapports de conformité</li>
                  <li>Améliorer la sécurité et prévenir la fraude</li>
                </ul>
              </section>

              {/* Sécurité */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Sécurité</h2>
                <p className="text-muted-foreground mb-4">Nous mettons en œuvre des mesures de sécurité robustes :</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Chiffrement AES-256 pour les credentials AWS</li>
                  <li>Chiffrement en transit (TLS 1.3)</li>
                  <li>Accès limité aux données (principe du moindre privilège)</li>
                  <li>Audits de sécurité réguliers</li>
                </ul>
              </section>

              {/* Partage des données */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Partage des données</h2>
                <p className="text-muted-foreground mb-4">
                  Nous ne vendons jamais vos données. Nous pouvons partager vos informations uniquement avec :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Nos prestataires de services (hébergement, paiement) sous contrat strict</li>
                  <li>Les autorités si requis par la loi</li>
                </ul>
              </section>

              {/* Vos droits RGPD */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Vos droits (RGPD)</h2>
                <p className="text-muted-foreground mb-4">Conformément au RGPD, vous avez le droit de :</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Accéder à vos données personnelles</li>
                  <li>Rectifier vos données</li>
                  <li>Demander la suppression de vos données</li>
                  <li>Vous opposer au traitement</li>
                  <li>Demander la portabilité de vos données</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Pour exercer ces droits, contactez-nous à{" "}
                  <a href="mailto:privacy@complio.tech" className="text-primary hover:underline">
                    privacy@complio.tech
                  </a>
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies analytiques 
                  (Google Analytics) pour améliorer nos services. Vous pouvez désactiver les cookies analytiques 
                  dans les paramètres de votre navigateur.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question sur cette politique de confidentialité, contactez-nous à{" "}
                  <a href="mailto:privacy@complio.tech" className="text-primary hover:underline">
                    privacy@complio.tech
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
