
import { useEffect, useRef } from "react";

// Client partners - text only
const partners = [
  { name: "jetlog.com.br" },
  { name: "marketshop.com.br" },
  { name: "@brasilgunsairsoft" },
  { name: "limpanome.marketshop.com.br" },
  { name: "planetadasestampas.com.br" },
  { name: "inglesdogringo.com.br" },
  { name: "realtysaopaulo.com.br" },
];

const Partners = () => {
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Duplicate and append logos for seamless loop
    if (marqueeRef1.current && marqueeRef2.current) {
      marqueeRef1.current.innerHTML += marqueeRef1.current.innerHTML;
      marqueeRef2.current.innerHTML += marqueeRef2.current.innerHTML;
    }
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-background to-background/95 relative">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            Parceiros
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Empresas que
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green mx-2">
              confiam
            </span>
            em nós
          </h2>
        </div>
      </div>

      {/* Marquee 1 - Left to Right */}
      <div className="relative w-full overflow-hidden py-6 pointer-events-none select-none">
        <div 
          ref={marqueeRef1}
          className="flex space-x-8 animate-marquee whitespace-nowrap"
        >
          {partners.map((partner, index) => (
            <div 
              key={`marquee1-${index}`} 
              className="group relative flex items-center justify-center h-16 px-6 glass-card rounded-lg mx-2 min-w-[150px]"
            >
              <span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green">
                {partner.name}
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/30"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee 2 - Right to Left */}
      <div className="relative w-full overflow-hidden py-6 pointer-events-none select-none">
        <div 
          ref={marqueeRef2}
          className="flex space-x-8 whitespace-nowrap" 
          style={{ animation: "marquee 30s linear infinite reverse" }}
        >
          {[...partners].reverse().map((partner, index) => (
            <div 
              key={`marquee2-${index}`} 
              className="group relative flex items-center justify-center h-16 px-6 glass-card rounded-lg mx-2 min-w-[150px]"
            >
              <span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green">
                {partner.name}
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
