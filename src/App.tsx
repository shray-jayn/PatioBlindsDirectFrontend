import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EstimateModal from "./components/EstimateModal";
import ScrollProgress from "./components/ScrollProgress";
import FloatingCallButton from "./components/FloatingCallButton";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Commercial from "./pages/Commercial";
import Locations from "./pages/Locations";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" />
        <BrowserRouter>
          <ScrollToTop />
          <ScrollProgress />
          <Navbar onEstimateClick={() => setIsModalOpen(true)} />
          <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <FloatingCallButton />
          <BackToTop />
          <Routes>
            <Route path="/" element={<Home onEstimateClick={() => setIsModalOpen(true)} />} />
            <Route path="/products" element={<Home onEstimateClick={() => setIsModalOpen(true)} />} />
            <Route path="/how-it-works" element={<Home onEstimateClick={() => setIsModalOpen(true)} />} />
            <Route path="/commercial" element={<Commercial onEstimateClick={() => setIsModalOpen(true)} />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/faq" element={<FAQ onEstimateClick={() => setIsModalOpen(true)} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer onEstimateClick={() => setIsModalOpen(true)} />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
