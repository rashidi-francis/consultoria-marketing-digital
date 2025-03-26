
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Subtle parallax effect
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || "0.05");
        const xOffset = (x - 0.5) * speed * 100;
        const yOffset = (y - 0.5) * speed * 100;
        
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef} 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-background to-background/70 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-[120px] opacity-50 animate-float parallax" data-speed="0.05"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-purple/20 rounded-full filter blur-[100px] opacity-40 animate-float parallax" data-speed="0.07" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 py-10 z-10 pt-24 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary animate-fade-in">
              Consultoria de Marketing Digital
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
              <span className="text-white">Impulsione seu negócio com </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-border-flow">
                estratégias inteligentes!
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto md:mx-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Transforme sua presença digital e aumente seus resultados com soluções personalizadas de marketing que realmente funcionam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center justify-center md:justify-start animate-fade-in" style={{animationDelay: '0.6s'}}>
              <a 
                href="#contact" 
                className="neo-btn flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 group w-full sm:w-auto"
              >
                Agendar Consultoria
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative flex justify-center md:justify-end animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 blur-xl animate-glow"></div>
              <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
                <div className="bg-card rounded-xl overflow-hidden p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card rounded-lg p-4 flex flex-col items-center justify-center h-28 parallax" data-speed="0.03">
                      <div className="text-2xl font-bold text-neon-blue">+250%</div>
                      <div className="text-xs text-gray-400 text-center">Aumento em tráfego</div>
                    </div>
                    <div className="glass-card rounded-lg p-4 flex flex-col items-center justify-center h-28 parallax" data-speed="0.04" style={{animationDelay: '0.2s'}}>
                      <div className="text-2xl font-bold text-neon-purple">+120%</div>
                      <div className="text-xs text-gray-400 text-center">Mais conversões</div>
                    </div>
                    <div className="glass-card rounded-lg p-4 flex flex-col items-center justify-center h-28 parallax" data-speed="0.05" style={{animationDelay: '0.3s'}}>
                      <div className="text-2xl font-bold text-neon-pink">+85%</div>
                      <div className="text-xs text-gray-400 text-center">ROI em campanhas</div>
                    </div>
                    <div className="glass-card rounded-lg p-4 flex flex-col items-center justify-center h-28 parallax" data-speed="0.06" style={{animationDelay: '0.4s'}}>
                      <div className="text-2xl font-bold text-neon-green">+300</div>
                      <div className="text-xs text-gray-400 text-center">Clientes satisfeitos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Saiba mais</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
