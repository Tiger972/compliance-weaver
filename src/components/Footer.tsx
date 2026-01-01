import { Linkedin, Twitter } from "lucide-react";
import complioLogo from "@/assets/complio-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50/50 to-white py-16 border-t border-border/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand - takes 5 columns */}
          <div className="md:col-span-5">
            <div className="flex items-start h-20">
              <img
                src={complioLogo}
                alt="Compl.io"
                className="h-28 w-auto object-contain object-left -ml-6 -mt-2"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              La plateforme de conformité automatisée pour les infrastructures cloud.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">HDS & PCI DSS bientôt disponibles</span>
            </div>
          </div>

          {/* Spacer - takes 2 columns */}
          <div className="hidden md:block md:col-span-2" />

          {/* Navigation - takes 2 columns */}
          <div className="md:col-span-2 md:pt-10">
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/produit" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Produit
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Légal - takes 3 columns */}
          <div className="md:col-span-3 md:pt-10">
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/politique-de-confidentialite" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/cgu" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  CGU
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Compl.io. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
