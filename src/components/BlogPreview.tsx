import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogSeoImage from "@/assets/blog-seo-strategies.jpg";
import blogFacebookImage from "@/assets/blog-facebook-ads.jpg";
import blogAutomationImage from "@/assets/blog-marketing-automation.jpg";
import authorAvatar from "@/assets/nathalia-avatar.jpg";

// Blog posts
const blogPosts = [
  {
    id: 1,
    slug: "7-estrategias-seo-pequenas-empresas",
    title: "7 Estratégias de SEO para Pequenas Empresas em 2023",
    excerpt: "Descubra as melhores práticas de SEO que podem ajudar seu negócio a se destacar nos resultados de busca sem precisar de um grande orçamento.",
    image: blogSeoImage,
    author: "Mariana Santos",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
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
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
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
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
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

const BlogPreview = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-neon-blue/5 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
              Blog & Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Nossas últimas
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green ml-2">
                publicações
              </span>
            </h2>
          </div>
          
          <Link 
            to="/blog" 
            className="mt-6 md:mt-0 flex items-center group text-white"
          >
            Ver todas as publicações
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-20 glass-card rounded-xl p-0.5">
          <div className="bg-card rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Receba insights exclusivos de marketing digital
                </h3>
                <p className="text-gray-300 mb-4">
                  Assine nossa newsletter e receba conteúdo exclusivo, dicas práticas e as últimas tendências de marketing digital diretamente na sua caixa de entrada.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-3 mt-6">
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                    required
                  />
                  <button 
                    type="submit" 
                    className="neo-btn px-6 py-3 rounded-lg bg-primary text-black font-medium hover:bg-primary/90 whitespace-nowrap"
                  >
                    Inscrever-se
                  </button>
                </form>
                
                <p className="text-gray-500 text-xs mt-3">
                  Ao se inscrever, você concorda com nossa Política de Privacidade. Prometemos não enviar spam!
                </p>
              </div>
              
              <div className="md:w-1/3 relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 blur-xl animate-glow"></div>
                <div className="relative">
                  <svg className="w-full max-w-[200px] mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5ZM10 9.5C10 9.22386 10.2239 9 10.5 9H13.5C13.7761 9 14 9.22386 14 9.5V17.5C14 17.7761 13.7761 18 13.5 18H10.5C10.2239 18 10 17.7761 10 17.5V9.5Z" fill="url(#gradient)" />
                    <defs>
                      <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00f3ff" />
                        <stop offset="0.5" stopColor="#9b00ff" />
                        <stop offset="1" stopColor="#ff00f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-center text-gray-300 mt-4">
                    Fique sempre informado<br />sobre as novidades do mercado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
