import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { sendMetaEvent } from "./lib/meta-events";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import NotFound from "./pages/NotFound";

// Initialize React Query client
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // só dispara se for um botão ou um link que funcione como botão
      if (
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.tagName === "A" ||
        target.closest("a")
      ) {
        sendMetaEvent("InitiateCheckout");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Add toaster components for notifications */}
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/7-estrategias-seo-pequenas-empresas" element={<BlogPost1 />} />
            <Route path="/blog/anuncios-facebook-que-convertem" element={<BlogPost2 />} />
            <Route path="/blog/automacao-marketing-economizar-tempo" element={<BlogPost3 />} />
            <Route path="/blog/webdesign-moderno-pequenas-empresas" element={<BlogPost4 />} />
            <Route path="/blog/guia-completo-formatacao-instalacao-windows" element={<BlogPost5 />} />
            <Route path="/blog/identidade-visual-impacto-marca" element={<BlogPost6 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
