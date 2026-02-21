
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Construction = lazy(() => import("./pages/Construction"));
const HvacTrading = lazy(() => import("./pages/HvacTrading"));
const GeneralTrading = lazy(() => import("./pages/GeneralTrading"));
const AdvancedHealthcare = lazy(() => import("./pages/AdvancedHealthcare"));
const Environmental = lazy(() => import("./pages/Environmental"));
const Tourism = lazy(() => import("./pages/Tourism"));
const Software = lazy(() => import("./pages/Software"));
const Media = lazy(() => import("./pages/Media"));
const StrategicPartnership = lazy(() => import("./pages/StrategicPartnership"));
const Career = lazy(() => import("./pages/Career"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/hvac-trading" element={<HvacTrading />} />
        <Route path="/general-trading" element={<GeneralTrading />} />
        <Route path="/advanced-healthcare" element={<AdvancedHealthcare />} />
        <Route path="/environmental" element={<Environmental />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/software" element={<Software />} />
        <Route path="/media" element={<Media />} />
        <Route path="/strategic-partnership" element={<StrategicPartnership />} />
        <Route path="/career" element={<Career />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
