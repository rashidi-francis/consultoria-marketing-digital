
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Quiz from "@/components/Quiz";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Add smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id as string);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Partners />
        <Quiz />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />

      {/* Fixed Button (CTA) */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink opacity-70 blur-md animate-pulse"></div>
          <a 
            href="#contact" 
            className="relative neo-btn flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-background border border-white/10 text-white font-medium hover:bg-background/90 shadow-xl"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V8C4 6.89543 4.89543 6 6 6H10M20 12L16.5 8M20 12L16.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Agendar Consultoria
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
