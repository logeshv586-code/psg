import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Construction from "./pages/Construction";
import DigitalHealth from "./pages/DigitalHealth";
import Environmental from "./pages/Environmental";
import Tourism from "./pages/Tourism";
import Software from "./pages/Software";
import Media from "./pages/Media";
import StrategicPartnership from "./pages/StrategicPartnership";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/digital-health" element={<DigitalHealth />} />
          <Route path="/environmental" element={<Environmental />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/software" element={<Software />} />
          <Route path="/media" element={<Media />} />
          <Route path="/strategic-partnership" element={<StrategicPartnership />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
