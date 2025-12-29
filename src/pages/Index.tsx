import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import ForWho from "@/components/ForWho";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <TrustBar />
        <ProblemSolution />
        <HowItWorks />
        <ForWho />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;