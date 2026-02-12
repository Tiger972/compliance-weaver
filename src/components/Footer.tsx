import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import complioLogo from "@/assets/complio-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/50 to-background py-16 border-t border-border/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand - takes 4 columns */}
          <div className="md:col-span-4">
            <div className="flex items-start h-20">
              <img
                src={complioLogo}
                alt="Compl.io"
                className="h-28 w-auto object-contain object-left -ml-6 -mt-2"
                loading="lazy"
                width="150"
                height="112" />

            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              La plateforme de conformité automatisée pour les infrastructures cloud.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
              <span className="w-2 h-2 bg-cyber-green rounded-full motion-reduce:animate-none animate-pulse" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">HDS & PCI DSS bientôt disponibles</span>
            </div>
          </div>


          {/* Navigation - takes 2 columns */}
          <nav className="md:col-span-2 md:pt-10" aria-label="Navigation du pied de page">
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/produit" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Docs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Solutions - takes 3 columns, replaces spacer */}
          <nav className="md:col-span-3 md:pt-10" aria-label="Solutions de conformité">
            <h4 className="font-semibold text-foreground mb-4">​Conformités</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/conformite-iso-27001" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Conformité ISO 27001
                </Link>
              </li>
              <li>
                <Link to="/conformite-hds" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Conformité HDS
                </Link>
              </li>
              <li>
                <Link to="/conformite-pci-dss" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Conformité PCI-DSS
                </Link>
              </li>
              <li>
                <Link to="/conformite-nis2" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Conformité NIS2
                </Link>
              </li>
              <li>
                <Link to="/conformite-cloud-saas" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Pour les SaaS
                </Link>
              </li>
            </ul>
          </nav>

          {/* Légal - takes 3 columns */}
          <nav className="md:col-span-3 md:pt-10" aria-label="Liens légaux">
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/politique-de-confidentialite" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/cgu" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  CGU
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Compl.io. Tous droits réservés.</p>
          <a
            href="https://www.linkedin.com/company/compl-io/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Suivez Compl.io sur LinkedIn (ouvre dans un nouvel onglet)">

            <Linkedin className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>);

};

export default Footer;