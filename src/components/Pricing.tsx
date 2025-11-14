import { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Básico",
      monthlyPrice: 472,
      annualPrice: 352,
      description: "Perfeito para pequenos negócios começarem com IA conversacional.",
      features: [
        "2 Agentes Inteligentes",
        "Interações Ilimitadas no WhatsApp",
        "Acesso a recursos essenciais do ASN Agentes",
        "Limite de upload por arquivo de 10MB",
        "6 vagas no time",
        "Integração com WhatsApp via QR Code"
      ]
    },
    {
      name: "Avançado",
      monthlyPrice: 1552,
      annualPrice: 1152,
      description: "Para empresas em crescimento que desejam escalar seu atendimento.",
      features: [
        "6 Agentes Inteligentes",
        "Interações Ilimitadas no WhatsApp",
        "Acesso a todos os recursos do ASN Agentes",
        "Limite de upload por arquivo de 10MB",
        "20 vagas no time",
        "Integração com WhatsApp via QR Code",
        "Suporte prioritário"
      ],
      highlighted: true
    },
    {
      name: "Empresarial",
      monthlyPrice: 4752,
      annualPrice: 3552,
      description: "Para empresas que buscam automatizar e aprimorar significativamente suas operações.",
      features: [
        "30 Agentes Inteligentes",
        "Interações Ilimitadas no WhatsApp",
        "Acesso a todos os recursos do ASN Agentes",
        "Limite de upload por arquivo de 20MB",
        "60 vagas no time",
        "Integração com WhatsApp via QR Code",
        "Suporte prioritário",
        "Treinamento e onboarding personalizados"
      ]
    }
  ];

  return (
    <section id="precos" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            Planos e Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o plano ideal para implementar
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green ml-2">
              IA conversacional no seu WhatsApp ou site
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Automatize seu atendimento e escale suas operações com nossos agentes inteligentes
          </p>

          {/* Toggle Anual/Mensal */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isAnnual 
                  ? "bg-primary text-black font-semibold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isAnnual 
                  ? "bg-primary text-black font-semibold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Anual
              <span className="ml-2 text-xs bg-black/30 text-white px-2 py-0.5 rounded-full font-semibold">
                Economize
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-0.5 ${
                plan.highlighted ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="bg-card rounded-xl p-8 h-full flex flex-col relative">
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-black text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      R$ {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400">
                      /{isAnnual ? "ano" : "mês"}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://api.whatsapp.com/send/?phone=5511930500397&text=Olá,%20vim%20da%20vossa%20plataforma%20de%20IA,%20gostaria%20contratar%20o%20plano%20${plan.name}%20${isAnnual ? 'anual' : 'mensal'}%20pra%20IA%20conversacional.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg text-center font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-primary text-black hover:bg-primary/90 neo-btn"
                      : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  } ${isAnnual ? 'cta-whatsapp-pricing-anual' : 'cta-whatsapp-pricing-mensal'}`}
                >
                  Assinar Plano {plan.name} {isAnnual ? 'Anual' : 'Mensal'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;