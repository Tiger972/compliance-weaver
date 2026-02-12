import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, ArrowRight, Clock, Bell } from "lucide-react";
import { Link } from "react-router-dom";

interface Section {
  title: string;
  items: string[];
}

interface CTAConfig {
  title: string;
  primaryLabel: string;
  primaryLink: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  comingSoon?: string;
  isExternal?: boolean;
}

interface CompliancePageProps {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  canonicalPath: string;
  sections: Section[];
  controlCategories?: string[];
  cta: CTAConfig;
  relatedLinks?: { label: string; href: string }[];
}

const CompliancePage = ({
  metaTitle,
  metaDescription,
  h1,
  canonicalPath,
  sections,
  controlCategories,
  cta,
  relatedLinks,
}: CompliancePageProps) => {
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://complio.fr${canonicalPath}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://complio.fr${canonicalPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
      </Helmet>

      <Navbar />

      <main id="main-content" className="min-h-screen page-gradient pt-24 pb-16">
        {/* Hero */}
        <section className="container max-w-4xl mx-auto px-4 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Conformité</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {h1}
          </h1>
        </section>

        {/* Sections */}
        {sections.map((section, idx) => (
          <section
            key={idx}
            className={`py-12 ${idx % 2 === 1 ? "bg-secondary/30" : ""}`}
          >
            <div className="container max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* Control Categories */}
        {controlCategories && controlCategories.length > 0 && (
          <section className="py-12">
            <div className="container max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contrôles couverts</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {controlCategories.map((cat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
                  >
                    <Shield className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="py-8">
            <div className="container max-w-4xl mx-auto px-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Voir aussi</h3>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{cta.title}</h2>
            {cta.comingSoon && (
              <p className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {cta.comingSoon}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <a
                  href={cta.isExternal ? cta.primaryLink : undefined}
                  target={cta.isExternal ? "_blank" : undefined}
                  rel={cta.isExternal ? "noopener noreferrer" : undefined}
                >
                  {cta.comingSoon ? (
                    <><Bell className="w-4 h-4 mr-2" aria-hidden="true" />{cta.primaryLabel}</>
                  ) : (
                    cta.primaryLabel
                  )}
                </a>
              </Button>
              {cta.secondaryLabel && cta.secondaryLink && (
                <Button variant="outline" size="lg" asChild>
                  <Link to={cta.secondaryLink}>{cta.secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CompliancePage;
