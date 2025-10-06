import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import TrustBar from "./components/TrustBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EstimateModal from "./components/EstimateModal";
import ScrollProgress from "./components/ScrollProgress";
import FloatingCallButton from "./components/FloatingCallButton";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import Commercial from "./pages/Commercial";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/** Site chrome + modal around all pages */
function RootShell({
  onEstimateClick,
  isModalOpen,
  closeModal,
}: {
  onEstimateClick: () => void;
  isModalOpen: boolean;
  closeModal: () => void;
}) {
  return (
    <>
      <ScrollProgress />
      <TrustBar />
      <Navbar onEstimateClick={onEstimateClick} />
      <EstimateModal isOpen={isModalOpen} onClose={closeModal} />
      <FloatingCallButton />
      <BackToTop />
      {/* Routed pages render here */}
      <Outlet />
      <Footer onEstimateClick={onEstimateClick} />
    </>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  // Build the router once; handlers are stable via useCallback.
  const router = useMemo(
    () =>
      createBrowserRouter(
        [
          {
            path: "/",
            element: (
              <RootShell
                onEstimateClick={openModal}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
              />
            ),
            children: [
              { index: true, element: <Home onEstimateClick={openModal} /> },
              {
                path: "products",
                element: <Home onEstimateClick={openModal} />,
              },
              {
                path: "how-it-works",
                element: <Home onEstimateClick={openModal} />,
              },
              {
                path: "commercial",
                element: <Commercial onEstimateClick={openModal} />,
              },
              { path: "locations", element: <Locations /> },
              {
                path: "locations/:city",
                element: <LocationDetail onEstimateClick={openModal} />,
              },
              { path: "faq", element: <FAQ onEstimateClick={openModal} /> },
              { path: "*", element: <NotFound /> },
            ],
          },
        ],
        {
          future: {
            v7_relativeSplatPath: true,
          },
        }
      ),
    [openModal, closeModal, isModalOpen]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
