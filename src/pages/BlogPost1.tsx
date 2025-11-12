import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogSeoImage from "@/assets/blog-seo-strategies.jpg";
import authorAvatar from "@/assets/nathalia-avatar.jpg";

const BlogPost1 = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de SEO da Ajudo Seu Negócio."
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
              SEO
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              7 Estratégias de SEO para Pequenas Empresas em 2023
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={authorAvatar} 
                alt="Mariana Santos" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">Mariana Santos</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>12 Jun 2023</span>
                  <span className="mx-2">•</span>
                  <span>6 min de leitura</span>
                </div>
              </div>
            </div>
          </div>

          <img 
            src={blogSeoImage} 
            alt="Estratégias de SEO" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              O SEO (Search Engine Optimization) é fundamental para pequenas empresas que desejam aumentar sua visibilidade online sem depender exclusivamente de anúncios pagos. Neste artigo, vamos explorar 7 estratégias práticas e eficientes que você pode implementar hoje mesmo.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Pesquisa de Palavras-Chave Locais</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Para pequenas empresas, o foco em palavras-chave locais é essencial. Use ferramentas gratuitas como o Google Keyword Planner para identificar termos que seus clientes locais estão buscando. Inclua o nome da sua cidade ou região nas palavras-chave principais.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Otimize seu Google Meu Negócio</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mantenha seu perfil do Google Meu Negócio atualizado com informações precisas, fotos de qualidade e responda a todas as avaliações. Isso aumenta significativamente suas chances de aparecer nas buscas locais.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Crie Conteúdo de Qualidade Regularmente</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Publique artigos úteis que respondam às dúvidas dos seus clientes. Conteúdo relevante e atualizado mostra ao Google que seu site é uma fonte confiável de informação.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Melhore a Velocidade do Site</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sites rápidos têm melhor ranqueamento. Use ferramentas como Google PageSpeed Insights para identificar e corrigir problemas de velocidade. Otimize imagens e minimize códigos desnecessários.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Construa Backlinks de Qualidade</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Estabeleça parcerias com outras empresas locais e busque menções em sites relevantes da sua área. Backlinks de qualidade aumentam sua autoridade aos olhos do Google.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Otimize para Mobile</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mais de 60% das buscas são feitas em dispositivos móveis. Certifique-se de que seu site é responsivo e oferece uma ótima experiência em smartphones e tablets.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Use Schema Markup</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Implemente dados estruturados (schema markup) para ajudar os mecanismos de busca a entender melhor seu conteúdo. Isso pode resultar em rich snippets que aumentam sua taxa de cliques.
            </p>

            <div className="glass-card rounded-xl p-0.5 mt-12">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Precisa de ajuda com SEO?
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe especializada pode criar uma estratégia de SEO personalizada para sua empresa, aumentando sua visibilidade online e atraindo mais clientes qualificados.
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

export default BlogPost1;
