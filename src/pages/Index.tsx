import { useLayoutEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

const ProblemSolution = lazy(() => import("@/components/ProblemSolution"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const CompliAutomates = lazy(() => import("@/components/CompliAutomates"));
const ForWho = lazy(() => import("@/components/ForWho"));
const TimelineComparison = lazy(() => import("@/components/TimelineComparison"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CTASection = lazy(() => import("@/components/CTASection"));

const SectionFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Audit ISO 27001 automatisé | Conformité rapide et fiable – Complio</title>
        <meta
          name="description"
          content="Réalisez votre audit ISO 27001 plus rapidement grâce à l'automatisation. Identifiez les écarts, sécurisez votre conformité et préparez votre certification."
        />
      </Helmet>

      {/* Global flowing gradient background */}
      <div className="fixed inset-0 page-gradient -z-20" />

      {/* Floating gradient orbs */}
      <div className="fixed top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-primary/8 to-accent/5 blur-3xl -z-10 motion-reduce:hidden" />
      <div className="fixed top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-accent/6 to-primary/4 blur-3xl -z-10 motion-reduce:hidden" />
      <div className="fixed top-[60%] -left-[5%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-cyber-purple/5 to-primary/3 blur-3xl -z-10 motion-reduce:hidden" />
      <div className="fixed top-[80%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tl from-primary/6 to-accent/4 blur-3xl -z-10 motion-reduce:hidden" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Aller au contenu principal
      </a>

      <Navbar />
      <main id="main-content" className="pt-16 lg:pt-20 relative z-0">
        <HeroSection />
        <TrustBar />
        <Suspense fallback={<SectionFallback />}>
          <ProblemSolution />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CompliAutomates />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ForWho />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TimelineComparison />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
