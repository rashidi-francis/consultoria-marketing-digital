import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogSeoImage from "@/assets/blog-seo-strategies.jpg";
import blogFacebookImage from "@/assets/blog-facebook-ads.jpg";
import blogAutomationImage from "@/assets/blog-marketing-automation.jpg";
import authorAvatar from "@/assets/nathalia-avatar.jpg";

const blogPosts = [
  {
    id: 4,
    slug: "webdesign-moderno-pequenas-empresas",
    title: "Webdesign Moderno: Como um Site Profissional Transforma Seu Negócio",
    excerpt: "Descubra como um design moderno e profissional pode aumentar sua credibilidade, melhorar a experiência do usuário e gerar mais conversões.",
    image: blogSeoImage,
    author: "Ricardo Almeida",
    authorImage: authorAvatar,
    date: "15 Mar 2024",
    readTime: "7 min",
    category: "Webdesign"
  },
  {
    id: 5,
    slug: "guia-completo-formatacao-instalacao-windows",
    title: "Guia Completo: Formatação e Instalação do Windows do Zero",
    excerpt: "Aprenda passo a passo como formatar seu computador e instalar o Windows de forma limpa e segura, otimizando o desempenho do seu sistema.",
    image: blogFacebookImage,
    author: "Bruno Costa",
    authorImage: authorAvatar,
    date: "22 Jul 2024",
    readTime: "10 min",
    category: "Tecnologia"
  },
  {
    id: 6,
    slug: "identidade-visual-impacto-marca",
    title: "Identidade Visual: O Impacto de uma Marca Bem Definida",
    excerpt: "Entenda como uma identidade visual consistente e profissional pode fortalecer sua marca e criar conexão emocional com seus clientes.",
    image: blogAutomationImage,
    author: "Ana Paula Silva",
    authorImage: authorAvatar,
    date: "10 Set 2024",
    readTime: "6 min",
    category: "Branding"
  },
  {
    id: 1,
    slug: "7-estrategias-seo-pequenas-empresas",
    title: "7 Estratégias de SEO para Pequenas Empresas em 2023",
    excerpt: "Descubra as melhores práticas de SEO que podem ajudar seu negócio a se destacar nos resultados de busca sem precisar de um grande orçamento.",
    image: blogSeoImage,
    author: "Mariana Santos",
    authorImage: authorAvatar,
    date: "12 Jun 2023",
    readTime: "6 min",
    category: "SEO"
  },
  {
    id: 2,
    slug: "anuncios-facebook-que-convertem",
    title: "Como Criar Anúncios que Realmente Convertem no Facebook",
    excerpt: "Aprenda as técnicas comprovadas para criar anúncios no Facebook que não apenas geram cliques, mas também convertem visitantes em clientes.",
    image: blogFacebookImage,
    author: "Rafael Oliveira",
    authorImage: authorAvatar,
    date: "05 Jun 2023",
    readTime: "8 min",
    category: "Redes Sociais"
  },
  {
    id: 3,
    slug: "automacao-marketing-economizar-tempo",
    title: "Automação de Marketing: Como Economizar Tempo e Aumentar Resultados",
    excerpt: "Conheça as ferramentas e estratégias de automação que podem revolucionar seu marketing, economizando tempo e melhorando seus resultados.",
    image: blogAutomationImage,
    author: "Camila Ferreira",
    authorImage: authorAvatar,
    date: "29 Mai 2023",
    readTime: "5 min",
    category: "Automação"
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block h-full">
      <div className="glass-card rounded-xl p-0.5 h-full hover:scale-[1.02] transition-transform duration-300">
        <div className="bg-card rounded-xl h-full flex flex-col overflow-hidden">
          <div className="relative overflow-hidden h-48">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-neon-blue/20 text-neon-blue backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <span className="text-sm text-white font-medium">{post.author}</span>
                <div className="flex items-center text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-white">
              {post.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-primary font-medium text-sm group">
              Ler artigo completo
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-neon-blue/5 to-transparent"></div>
          
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
                Blog & Insights
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Todos os nossos
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green ml-2">
                  artigos
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Explore nosso conteúdo sobre marketing digital, estratégias e dicas para fazer seu negócio crescer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
