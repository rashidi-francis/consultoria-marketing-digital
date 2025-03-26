
import { useEffect, useRef } from "react";
import { 
  Lightbulb, 
  FileText, 
  LineChart, 
  FileEdit, 
  Search, 
  Mail 
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Consultoria Estratégica",
    description: "Análise completa do seu negócio e desenvolvimento de estratégias personalizadas para alcançar seus objetivos.",
    color: "neon-blue"
  },
  {
    icon: FileText,
    title: "Plano de Negócios",
    description: "Elaboração de planos detalhados para guiar seu crescimento com metas claras e ações definidas.",
    color: "neon-purple"
  },
  {
    icon: LineChart,
    title: "Gestão de Tráfego Pago",
    description: "Gerenciamento otimizado de campanhas pagas para maximizar seu ROI e alcançar seu público-alvo.",
    color: "neon-pink"
  },
  {
    icon: FileEdit,
    title: "Criação de Conteúdo",
    description: "Produção de conteúdo relevante e engajador que ressoa com sua audiência e fortalece sua marca.",
    color: "neon-red"
  },
  {
    icon: Search,
    title: "SEO e Estratégia de Conteúdo",
    description: "Otimização para mecanismos de busca que aumenta sua visibilidade online e atrai tráfego qualificado.",
    color: "neon-green"
  },
  {
    icon: Mail,
    title: "E-mail Marketing e Automação",
    description: "Sequências de e-mails personalizadas e automações que nutrem leads e aumentam suas conversões.",
    color: "neon-cyan"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className="glass-card rounded-xl p-0.5 h-full group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-[#00f3ff20] group-hover:via-[#9b00ff20] group-hover:to-[#ff00f720] transition-all duration-500"></div>
      <div className="relative h-full bg-card rounded-xl p-6 flex flex-col">
        <div 
          className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-${service.color}/10`}
          style={{ color: `var(--tw-text-opacity-${service.color})` }}
        >
          <service.icon className={`w-7 h-7 text-${service.color}`} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-glow transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm flex-grow">
          {service.description}
        </p>
        <div className="mt-6 pt-4 border-t border-white/10">
          <a 
            href="#contact" 
            className="text-primary text-sm flex items-center transition-all duration-300 group-hover:text-glow-blue"
          >
            Saiba mais
            <svg 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.glass-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-neon-blue/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-neon-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soluções completas para impulsionar seu
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple ml-2">
              negócio digital
            </span>
          </h2>
          <p className="text-gray-300">
            Oferecemos um conjunto abrangente de serviços de marketing digital para ajudar sua empresa a crescer e se destacar no cenário online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
