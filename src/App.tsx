import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const CGU = lazy(() => import("./pages/CGU"));
const Contact = lazy(() => import("./pages/Contact"));
const Documentation = lazy(() => import("./pages/Documentation"));
const ConformiteISO27001 = lazy(() => import("./pages/ConformiteISO27001"));
const ConformiteHDS = lazy(() => import("./pages/ConformiteHDS"));
const ConformitePCIDSS = lazy(() => import("./pages/ConformitePCIDSS"));
const ConformiteNIS2 = lazy(() => import("./pages/ConformiteNIS2"));
const ConformiteCloudSaaS = lazy(() => import("./pages/ConformiteCloudSaaS"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/produit" element={<HowItWorksPage />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/documentation/:categoryId/:sectionId" element={<Documentation />} />
              <Route path="/conformite-iso-27001" element={<ConformiteISO27001 />} />
              <Route path="/conformite-hds" element={<ConformiteHDS />} />
              <Route path="/conformite-pci-dss" element={<ConformitePCIDSS />} />
              <Route path="/conformite-nis2" element={<ConformiteNIS2 />} />
              <Route path="/conformite-cloud-saas" element={<ConformiteCloudSaaS />} />
              <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/cgu" element={<CGU />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
