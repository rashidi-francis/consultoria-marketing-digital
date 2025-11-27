
import { useEffect, useRef } from "react";
import { 
  Bot, 
  Target, 
  Share2, 
  Monitor,
  Palette,
  Laptop,
  MessageCircle,
  Sparkles,
  Zap
} from "lucide-react";
import whatsappMessages from "@/assets/whatsapp-messages.jpg";

const services = [
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description: "Integração de IA em WhatsApp com conversa humanizada, atendimento inteligente em sites e automações que transformam a experiência do seu cliente.",
    color: "neon-blue",
    buttonText: "Quero IA no meu WhatsApp",
    link: "https://chat.ajudoseunegocio.com.br/"
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas de mídia paga estratégicas, branding e posicionamento para fortalecer sua marca e maximizar resultados com ROI otimizado.",
    color: "neon-purple",
    buttonText: "Preciso de Tráfego Pago",
    whatsappMessage: "Olá, vim do site, gostaria de informações sobre o serviço de Tráfego Pago"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Criação de posts para redes sociais, estratégias de SEO e produção de conteúdo relevante que engaja e converte sua audiência.",
    color: "neon-pink",
    buttonText: "Quero Gestão de Redes Sociais",
    whatsappMessage: "Olá, vim do site, gostaria de informações sobre o serviço de Social Media"
  },
  {
    icon: Monitor,
    title: "Web Designer",
    description: "Construção de websites de alta tecnologia, leves e de última geração com efeitos tecnológicos que impressionam e convertem.",
    color: "neon-cyan",
    buttonText: "Preciso de um Site Moderno",
    whatsappMessage: "Olá, vim do site, gostaria de informações sobre o serviço de Web Designer"
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Criação de logotipos marcantes, identidade visual completa e papelaria personalizada que traduz a essência da sua marca.",
    color: "neon-red",
    buttonText: "Quero Logotipo e Papelaria",
    whatsappMessage: "Olá, vim do site, gostaria de informações sobre o serviço de Identidade Visual"
  },
  {
    icon: Laptop,
    title: "Instalação de Windows",
    description: "Formatação completa de notebooks com instalação de sistema operacional do zero, limpeza e otimização total. Renovamos o desempenho do seu equipamento. Serviço válido apenas para notebooks.",
    color: "neon-green",
    buttonText: "Preciso Formatar meu Notebook",
    whatsappMessage: "Olá, vim do site, gostaria de informações sobre o serviço de Instalação de Windows"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const cardId = service.title === "Tráfego Pago" ? "trafego-pago" : service.title === "Social Media" ? "social-media" : undefined;
  
  return (
    <div 
      id={cardId}
      className="glass-card rounded-xl p-0.5 h-full group relative scroll-mt-24"
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
            href={service.link || `https://wa.me/5511930500397?text=${encodeURIComponent(service.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-${service.color}/20 to-${service.color}/10 border border-${service.color}/30 text-${service.color} font-semibold text-sm transition-all duration-300 hover:from-${service.color}/30 hover:to-${service.color}/20 hover:border-${service.color}/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] animate-pulse hover:animate-none group-hover:scale-105 ${
              service.title === "Inteligência Artificial" ? "cta-whatsapp-ia" :
              service.title === "Tráfego Pago" ? "cta-whatsapp-trafego-pago" :
              service.title === "Social Media" ? "cta-whatsapp-social-media" :
              service.title === "Web Designer" ? "cta-whatsapp-webdesign" :
              service.title === "Identidade Visual" ? "cta-whatsapp-identidade-visual" :
              service.title === "Instalação de Windows" ? "cta-whatsapp-instalacao-windows" : ""
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {service.buttonText}
            <Zap className="w-4 h-4" />
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
      id="servicos"
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

        {/* AI WhatsApp Banner */}
        <div className="mb-16 relative overflow-hidden rounded-3xl glass-card p-1">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 animate-gradient-flow"></div>
          
          {/* Floating Tech Elements */}
          <div className="absolute top-10 left-10 w-12 h-12 rounded-lg bg-neon-blue/30 animate-float blur-sm" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-neon-purple/30 animate-float blur-sm" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-10 h-10 rounded-lg bg-neon-pink/30 animate-float blur-sm" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-14 h-14 rounded-full bg-neon-cyan/30 animate-float blur-sm" style={{animationDelay: '1.5s'}}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-16 right-32 animate-float" style={{animationDelay: '0.3s'}}>
            <Sparkles className="w-6 h-6 text-neon-blue opacity-60" />
          </div>
          <div className="absolute bottom-24 left-32 animate-float" style={{animationDelay: '0.8s'}}>
            <Zap className="w-8 h-8 text-neon-purple opacity-60" />
          </div>
          <div className="absolute top-1/2 right-16 animate-float" style={{animationDelay: '1.2s'}}>
            <Bot className="w-7 h-7 text-neon-pink opacity-60" />
          </div>
          
          <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30">
                  <MessageCircle className="w-5 h-5 text-neon-blue animate-pulse" />
                  <span className="text-sm font-semibold text-neon-blue">IA Conversacional para WhatsApp ou Website</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  <span className="text-white">Enquanto você dorme...</span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-border-flow">
                    alguém ainda está perguntando pelo seu produto
                  </span>
                </h3>
                
                <div className="space-y-4 text-lg">
                  <p className="text-gray-300 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-neon-blue mt-2 animate-pulse"></span>
                    <span>Enquanto você dorme, <span className="text-neon-purple font-semibold">nossa IA trabalha</span></span>
                  </p>
                  <p className="text-gray-300 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-neon-purple mt-2 animate-pulse" style={{animationDelay: '0.5s'}}></span>
                    <span>Enquanto você vive, <span className="text-neon-pink font-semibold">nossa IA está atendendo e vendendo pra você</span></span>
                  </p>
                </div>
                
                <a 
                  href="https://chat.ajudoseunegocio.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300 group"
                >
                  Quero IA no meu WhatsApp ou Website
                  <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
              
              {/* Right Image */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 rounded-2xl blur-2xl animate-glow"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[9/16]">
                    <img 
                      src={whatsappMessages} 
                      alt="WhatsApp recebendo mensagens de clientes"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay indicators */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/90 backdrop-blur-sm animate-pulse">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-white text-sm font-semibold">24+ mensagens não lidas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="scroll-mt-24"></div>
        
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
