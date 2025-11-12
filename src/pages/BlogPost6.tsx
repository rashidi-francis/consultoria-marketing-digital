import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogAutomationImage from "@/assets/blog-marketing-automation.jpg";
import authorAvatar from "@/assets/nathalia-avatar.jpg";

const BlogPost6 = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de criação de identidade visual da Ajudo Seu Negócio."
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
              Branding
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Identidade Visual: O Impacto de uma Marca Bem Definida
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={authorAvatar} 
                alt="Ana Paula Silva" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">Ana Paula Silva</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>10 Set 2024</span>
                  <span className="mx-2">•</span>
                  <span>6 min de leitura</span>
                </div>
              </div>
            </div>
          </div>

          <img 
            src={blogAutomationImage} 
            alt="Identidade Visual" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Uma identidade visual forte é muito mais que um logo bonito. É a personalidade visual da sua marca, a primeira impressão que seus clientes têm do seu negócio e o elemento que diferencia você da concorrência. Vamos explorar por que investir em identidade visual é essencial para o sucesso do seu negócio.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">O Que É Identidade Visual?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Identidade visual é o conjunto de elementos gráficos que representam visualmente uma marca. Inclui logotipo, paleta de cores, tipografia, padrões, ícones e todos os elementos visuais que comunicam a essência da empresa. É a manifestação visual dos valores, missão e personalidade da marca.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Por Que Investir em Identidade Visual?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Reconhecimento de Marca:</strong> Uma identidade visual consistente aumenta o reconhecimento em até 80%. Quando as pessoas veem suas cores e logo repetidamente, começam a associá-los automaticamente ao seu negócio.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Credibilidade e Profissionalismo:</strong> Uma marca bem apresentada transmite confiança e seriedade. Clientes são mais propensos a confiar e comprar de empresas que parecem profissionais e estabelecidas.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Diferenciação:</strong> Em mercados saturados, sua identidade visual é o que faz você se destacar. Um design único e memorável pode ser o fator decisivo na escolha do cliente.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Elementos de uma Identidade Visual</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Logotipo:</strong> O símbolo principal da marca. Deve ser simples, memorável, versátil e atemporal. Pense nas grandes marcas - Nike, Apple, McDonald's - seus logos são instantaneamente reconhecíveis.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Paleta de Cores:</strong> As cores evocam emoções e têm significados psicológicos. Azul transmite confiança, vermelho energia, verde crescimento. Escolha cores que reflitam a personalidade da sua marca e as use consistentemente.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Tipografia:</strong> As fontes escolhidas comunicam muito sobre sua marca. Fontes serifadas são mais tradicionais e elegantes, enquanto sans-serif são modernas e limpas. A consistência tipográfica é crucial.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Manual de Marca</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Um manual de marca (brand guide) documenta todos os elementos da identidade visual e como devem ser usados. Especifica dimensões do logo, espaçamentos, cores exatas (RGB, CMYK, Pantone), fontes e aplicações corretas e incorretas. Isso garante consistência em todos os pontos de contato com o cliente.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Aplicações da Identidade Visual</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sua identidade visual deve ser aplicada consistentemente em: cartões de visita, papel timbrado e envelopes, site e redes sociais, embalagens e materiais promocionais, sinalização e uniformes, apresentações e documentos. A consistência visual em todos esses pontos cria uma experiência de marca coesa.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Evolução da Identidade Visual</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Marcas evoluem com o tempo. Um redesign pode ser necessário quando a marca parece datada, o público-alvo mudou, ou há expansão de mercado. Porém, mudanças devem ser graduais para manter o reconhecimento. Observe como grandes marcas como Google e Instagram refinaram suas identidades ao longo dos anos mantendo elementos reconhecíveis.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Identidade Digital</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              No mundo digital, sua identidade visual se estende a: avatares e imagens de perfil, templates de posts para redes sociais, design de e-mails marketing, interface do site e aplicativos. Mantenha a consistência visual mesmo em ambientes digitais diferentes.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Erros Comuns a Evitar</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Evite logos muito complexos que não funcionam em tamanhos pequenos, usar muitas cores ou fontes diferentes, copiar tendências momentâneas que rapidamente ficam datadas, ou ser inconsistente na aplicação da identidade visual. Simplicidade, consistência e atemporalidade são chaves para uma identidade visual duradoura.
            </p>

            <div className="glass-card rounded-xl p-0.5 mt-12">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para criar uma identidade visual marcante?
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe de design desenvolve identidades visuais completas que capturam a essência da sua marca e se conectam com seu público-alvo. Do logo ao manual de marca, criamos uma identidade visual que impulsiona seu negócio.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="neo-btn"
                >
                  <a 
                    href={`https://wa.me/5511930500397?text=${whatsappMessage}`}
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

export default BlogPost6;
