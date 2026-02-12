import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import complioLogo from "@/assets/complio-logo.png";

const solutionLinks = [
  { label: "Conformité ISO 27001", href: "/conformite-iso-27001" },
  { label: "Conformité HDS", href: "/conformite-hds" },
  { label: "Conformité PCI-DSS", href: "/conformite-pci-dss" },
  { label: "Conformité NIS2", href: "/conformite-nis2" },
  { label: "Pour les SaaS", href: "/conformite-cloud-saas" },
];

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Produit", href: "/produit" },
  { label: "Documentation", href: "/documentation" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img
              src={complioLogo}
              alt="Compl.io - Accueil"
              className="h-20 lg:h-24 w-auto"
              width="107"
              height="80"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="rounded-lg border border-border bg-popover shadow-lg py-2">
                    {solutionLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block px-4 py-2.5 text-sm text-popover-foreground hover:bg-accent/50 transition-colors"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA button */}
          <div className="hidden lg:flex items-center">
            <Button variant="gradient" size="sm" asChild>
              <a href="https://calendar.app.google/UEGbiWjVN4niVoE37" target="_blank" rel="noopener noreferrer">
                Réserver une démo
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                  aria-current={location.pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Solutions accordion */}
              <div>
                <button
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-1 w-full"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  aria-expanded={mobileSolutionsOpen}
                >
                  Solutions
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-1">
                    {solutionLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                        onClick={() => { setIsOpen(false); setMobileSolutionsOpen(false); }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border">
                <Button variant="gradient" size="sm" className="w-full" asChild>
                  <a href="https://calendar.app.google/UEGbiWjVN4niVoE37" target="_blank" rel="noopener noreferrer">
                    Réserver une démo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
