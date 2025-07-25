
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-t from-background/90 to-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <a href="#" className="inline-flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-white">Ajudo</span>
                <span className="text-primary">Seu</span>
                <span className="text-white">Negócio</span>
              </span>
            </a>
            
            <p className="text-gray-400">
              Transformando negócios através de estratégias inteligentes de marketing digital para impulsionar resultados.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/ajudoseunegocio" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com/ajudo_seu_negocio" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://x.com/ajudoseunegocio" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/ajudo-seu-negócio" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Consultoria Estratégica
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Plano de Negócios
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Gestão de Tráfego Pago
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  Criação de Conteúdo
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-2 h-0.5 bg-gray-600 group-hover:bg-primary group-hover:w-3 mr-2 transition-all"></span>
                  SEO e Estratégia de Conteúdo
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber as últimas novidades e atualizações.
            </p>
            
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <button 
                  type="submit" 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">(11) 9 3050-0397</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">marketing@ajudoseunegocio.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">Rua Praça da Sé, 21 - Centro São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-10 border-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Ajudo Seu Negócio. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://ajudoseunegocio.com.br/politica-de-privacidade" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="https://ajudoseunegocio.com.br/politica-de-privacidade" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">
              Perguntas Frequentes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
