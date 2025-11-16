
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out py-4 px-6",
        isScrolled 
          ? "backdrop-blur-xl bg-background/80 shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="relative flex items-center font-bold text-2xl"
        >
          <span className="text-white mr-1">Ajudo</span>
          <span className="text-primary animate-glow-text">Seu</span>
          <span className="text-white ml-1">Negócio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-primary transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a 
            href="#precos" 
            className="neo-btn px-5 py-2 rounded-lg bg-primary text-black font-medium hover:bg-primary/90"
          >
            Teste IA Grátis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={cn(
          "fixed inset-0 top-16 z-40 transform transition-transform duration-300 ease-in-out bg-background/95 backdrop-blur-lg md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-8 pt-10 px-4 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl text-gray-300 hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col space-y-4 w-full max-w-xs">
            <a 
              href="#precos" 
              className="neo-btn py-3 text-center w-full rounded-lg bg-primary text-black font-medium hover:bg-primary/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Teste IA Grátis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
