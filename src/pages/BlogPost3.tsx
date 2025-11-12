import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogAutomationImage from "@/assets/blog-marketing-automation.jpg";
import authorAvatar from "@/assets/nathalia-avatar.jpg";

const BlogPost3 = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre automação de marketing e como vocês podem ajudar meu negócio."
  );

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neon-blue/20 text-neon-blue backdrop-blur-sm mb-4">
              Automação
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Automação de Marketing: Como Economizar Tempo e Aumentar Resultados
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={authorAvatar} 
                alt="Camila Ferreira" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">Camila Ferreira</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>29 Mai 2023</span>
                  <span className="mx-2">•</span>
                  <span>5 min de leitura</span>
                </div>
              </div>
            </div>
          </div>

          <img 
            src={blogAutomationImage} 
            alt="Automação de Marketing" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A automação de marketing não é mais um luxo, é uma necessidade para empresas que desejam escalar suas operações sem aumentar proporcionalmente os custos. Neste artigo, vamos explorar como a automação pode transformar seu negócio.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">O Que É Automação de Marketing?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Automação de marketing é o uso de software e tecnologia para automatizar tarefas repetitivas de marketing, como envio de emails, postagens em redes sociais, segmentação de leads e muito mais. O objetivo é trabalhar de forma mais inteligente, não mais dura.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Benefícios da Automação de Marketing</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Economia de Tempo:</strong> Automatize tarefas repetitivas e libere sua equipe para focar em atividades estratégicas que realmente movem o negócio.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Personalização em Escala:</strong> Envie mensagens personalizadas para milhares de leads simultaneamente, aumentando o engajamento e as taxas de conversão.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Nutrição de Leads:</strong> Guie seus prospects através da jornada de compra com conteúdo relevante no momento certo, aumentando as chances de conversão.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Email Marketing Automatizado</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Crie sequências de emails que são enviadas automaticamente baseadas em gatilhos específicos. Por exemplo, envie emails de boas-vindas para novos inscritos, lembretes de carrinho abandonado, ou sequências de nutrição para leads frios.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Segmentação Inteligente</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Use dados comportamentais para segmentar automaticamente sua audiência. Crie listas dinâmicas que se atualizam sozinhas baseadas em ações dos usuários, garantindo que sempre enviará a mensagem certa para a pessoa certa.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Lead Scoring</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Atribua pontuações automaticamente aos seus leads baseado em suas interações. Isso ajuda a identificar quais leads estão prontos para conversão e devem ser priorizados pela equipe de vendas.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Integração com CRM</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Conecte suas ferramentas de automação com seu CRM para ter uma visão completa do cliente. Isso permite que vendas e marketing trabalhem em sincronia, melhorando a experiência do cliente e aumentando conversões.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Ferramentas Recomendadas</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Existem diversas ferramentas no mercado, desde soluções completas como HubSpot e RD Station, até ferramentas mais específicas como Mailchimp para email marketing ou Zapier para integrações. A escolha depende das necessidades e orçamento da sua empresa.
            </p>

            <div className="glass-card rounded-xl p-0.5 mt-12">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para automatizar seu marketing?
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe pode ajudar você a implementar soluções de automação personalizadas que economizam tempo e maximizam resultados. Vamos conversar sobre como podemos transformar seu marketing digital.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="neo-btn"
                >
                  <a 
                    href={`https://wa.me/5511912345678?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar com especialista
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost3;
