import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen page-gradient">
      <Navbar />

      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-12">
              <span className="gradient-text">Mentions légales</span>
            </h1>

            <div className="space-y-12">
              {/* Éditeur du site */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Éditeur du site</h2>
                <div className="text-muted-foreground leading-relaxed space-y-1">
                  <p>Site édité par :</p>
                  <p className="font-semibold text-foreground">Complio</p>
                  <p>SIREN : [À compléter]</p>
                  <p>Siège social : [Adresse à compléter]</p>
                  <p>
                    Email :{" "}
                    <a href="mailto:legal@complio.tech" className="text-primary hover:underline">
                      legal@complio.tech
                    </a>
                  </p>
                  <p>Directeur de publication : Andy</p>
                </div>
              </section>

              {/* Hébergement */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Hébergement</h2>
                <div className="text-muted-foreground leading-relaxed space-y-1">
                  <p>Le site www.complio.tech est hébergé par :</p>
                  <p className="font-semibold text-foreground">Vercel Inc.</p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789</p>
                  <p>États-Unis</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriété intellectuelle</h2>
                <p className="text-muted-foreground leading-relaxed">
                  L'ensemble du contenu de ce site (textes, images, logos, code source) est protégé par le droit d'auteur 
                  et appartient à Complio. Toute reproduction, même partielle, est interdite sans autorisation préalable.
                </p>
              </section>

              {/* Données personnelles */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Données personnelles</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour en savoir plus sur le traitement de vos données personnelles, consultez notre{" "}
                  <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                    Politique de confidentialité
                  </Link>
                  .
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ce site utilise des cookies. Pour plus d'informations, consultez notre{" "}
                  <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                    Politique de confidentialité
                  </Link>
                  .
                </p>
              </section>

              {/* Limitation de responsabilité */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation de responsabilité</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Complio met tout en œuvre pour fournir des informations précises et à jour. Toutefois, nous ne pouvons 
                  garantir l'exactitude, la complétude ou l'actualité des informations présentes sur le site. L'utilisation 
                  de Complio ne remplace pas un audit de conformité professionnel.
                </p>
              </section>

              {/* Loi applicable */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Loi applicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les présentes mentions légales sont soumises au droit français. Tout litige sera soumis aux tribunaux compétents.
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

export default MentionsLegales;
