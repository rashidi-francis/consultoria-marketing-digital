import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogFacebookImage from "@/assets/blog-facebook-ads.jpg";
import authorAvatar from "@/assets/nathalia-avatar.jpg";

const BlogPost2 = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de Tráfego Pago da Ajudo Seu Negócio."
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
              Redes Sociais
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Como Criar Anúncios que Realmente Convertem no Facebook
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={authorAvatar} 
                alt="Rafael Oliveira" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">Rafael Oliveira</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>05 Jun 2023</span>
                  <span className="mx-2">•</span>
                  <span>8 min de leitura</span>
                </div>
              </div>
            </div>
          </div>

          <img 
            src={blogFacebookImage} 
            alt="Anúncios no Facebook" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Criar anúncios no Facebook que realmente convertem é uma arte e uma ciência. Com mais de 2 bilhões de usuários ativos, o Facebook Ads oferece um potencial enorme para alcançar seu público-alvo. Vamos explorar as melhores práticas para criar campanhas que geram resultados reais.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Conheça Profundamente seu Público-Alvo</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Antes de criar qualquer anúncio, você precisa entender quem é seu cliente ideal. Use o Facebook Audience Insights para descobrir dados demográficos, interesses e comportamentos do seu público. Quanto mais específico você for na segmentação, melhores serão seus resultados.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Crie Títulos que Capturam Atenção</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Você tem apenas alguns segundos para capturar a atenção do usuário. Use títulos que sejam claros, diretos e que comuniquem um benefício imediato. Evite clickbait - seja honesto sobre o que você está oferecendo.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Use Imagens e Vídeos de Alta Qualidade</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              O visual é o primeiro elemento que as pessoas veem. Invista em imagens profissionais e vídeos envolventes. Vídeos curtos (15-30 segundos) tendem a ter melhor performance. Certifique-se de que suas imagens funcionem bem em mobile, onde a maioria dos usuários está.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tenha uma Proposta de Valor Clara</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Seu anúncio deve comunicar claramente o que você está oferecendo e por que alguém deveria se interessar. Destaque os benefícios, não apenas as características. Responda a pergunta: "O que eu ganho com isso?"
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Use Call-to-Action Efetivos</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Seja específico sobre o que você quer que as pessoas façam. Use botões como "Saiba Mais", "Comprar Agora" ou "Cadastre-se" dependendo do seu objetivo. Teste diferentes CTAs para ver qual funciona melhor para seu público.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Teste e Otimize Constantemente</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Crie múltiplas versões do seu anúncio (teste A/B) mudando um elemento por vez: título, imagem, texto ou CTA. Analise os dados e otimize com base no que funciona melhor. O Facebook Ads Manager oferece ferramentas poderosas para isso.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Configure o Pixel do Facebook Corretamente</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              O Pixel do Facebook é essencial para rastrear conversões e criar públicos de remarketing. Certifique-se de que está instalado corretamente e rastreando os eventos importantes como compras, cadastros e visualizações de página.
            </p>

            <div className="glass-card rounded-xl p-0.5 mt-12">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Quer maximizar seus resultados com Facebook Ads?
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe de especialistas em tráfego pago pode criar e gerenciar campanhas otimizadas que geram conversões reais e maximizam seu ROI. Entre em contato e descubra como podemos ajudar seu negócio a crescer.
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
                    Falar com especialista em Tráfego Pago
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

export default BlogPost2;
