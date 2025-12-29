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
    <div className="min-h-screen relative overflow-hidden">
      {/* Global flowing gradient background */}
      <div className="fixed inset-0 page-gradient -z-20" />
      
      {/* Floating gradient orbs for organic feel */}
      <div className="fixed top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-primary/8 to-accent/5 blur-3xl -z-10" />
      <div className="fixed top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-accent/6 to-primary/4 blur-3xl -z-10" />
      <div className="fixed top-[60%] -left-[5%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-cyber-purple/5 to-primary/3 blur-3xl -z-10" />
      <div className="fixed top-[80%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tl from-primary/6 to-accent/4 blur-3xl -z-10" />
      
      <Navbar />
      <main className="pt-16 lg:pt-20 relative z-0">
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