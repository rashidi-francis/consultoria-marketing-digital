import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogSeoImage from "@/assets/blog-seo-strategies.jpg";
import authorAvatar from "@/assets/nathalia-avatar.jpg";

const BlogPost4 = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de Webdesign da Ajudo Seu Negócio."
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
              Webdesign
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Webdesign Moderno: Como um Site Profissional Transforma Seu Negócio
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={authorAvatar} 
                alt="Ricardo Almeida" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">Ricardo Almeida</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>15 Mar 2024</span>
                  <span className="mx-2">•</span>
                  <span>7 min de leitura</span>
                </div>
              </div>
            </div>
          </div>

          <img 
            src={blogSeoImage} 
            alt="Webdesign Moderno" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Em um mundo cada vez mais digital, seu site é muitas vezes o primeiro ponto de contato entre sua empresa e potenciais clientes. Um webdesign moderno e profissional não é apenas sobre estética - é sobre criar uma experiência que converte visitantes em clientes fiéis.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Por Que o Webdesign Importa?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Estudos mostram que 75% dos usuários julgam a credibilidade de uma empresa pelo design do seu site. Em apenas 0,05 segundos, os visitantes formam uma opinião sobre seu site que determina se vão ficar ou sair. Um design profissional transmite confiança, autoridade e qualidade.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Elementos de um Webdesign Eficaz</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Design Responsivo:</strong> Seu site precisa funcionar perfeitamente em todos os dispositivos. Com mais de 60% do tráfego vindo de mobile, um design responsivo não é opcional - é essencial.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Velocidade de Carregamento:</strong> Sites lentos afastam visitantes. Cada segundo de atraso pode resultar em até 7% de redução nas conversões. Otimização de velocidade é fundamental.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Navegação Intuitiva:</strong> Os usuários devem encontrar o que procuram em no máximo 3 cliques. Uma estrutura clara e lógica melhora a experiência e aumenta o tempo de permanência.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Cores e Tipografia que Convertem</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              A psicologia das cores no design pode aumentar o reconhecimento da marca em até 80%. Escolha uma paleta que reflita os valores da sua empresa e crie contraste adequado para facilitar a leitura. A tipografia deve ser legível e hierárquica, guiando o olhar do usuário pelos elementos mais importantes.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Call-to-Actions Estratégicos</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Botões de ação bem posicionados e com texto persuasivo podem aumentar as conversões em até 45%. Use cores contrastantes, textos diretos e posicione-os em locais estratégicos da página.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Conteúdo Visual de Qualidade</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Imagens, vídeos e infográficos de alta qualidade não apenas tornam seu site mais atraente, mas também aumentam o engajamento. Conteúdo visual é processado 60.000 vezes mais rápido que texto pelo cérebro humano.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">SEO e Performance</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Um bom webdesign considera SEO desde o início. Estrutura de código limpa, URLs amigáveis, tags adequadas e otimização de imagens são fundamentais para ranquear bem nos mecanismos de busca.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Acessibilidade Web</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sites acessíveis alcançam um público maior e demonstram responsabilidade social. Implemente contraste adequado, textos alternativos para imagens e navegação por teclado para garantir que todos possam usar seu site.
            </p>

            <div className="glass-card rounded-xl p-0.5 mt-12">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para transformar seu site?
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe de webdesign cria sites profissionais que não apenas impressionam visualmente, mas também convertem visitantes em clientes. Vamos criar juntos uma presença digital que eleva seu negócio.
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

export default BlogPost4;
