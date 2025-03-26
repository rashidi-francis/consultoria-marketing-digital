
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[120px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[120px] opacity-50"></div>
      
      <div className="glass-card rounded-xl p-0.5 max-w-md w-full mx-4">
        <div className="bg-card rounded-xl p-8 text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              404
            </span>
          </h1>
          
          <p className="text-2xl text-white font-medium mb-6">
            Página não encontrada
          </p>
          
          <p className="text-gray-400 mb-8">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
          
          <a 
            href="/" 
            className="neo-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-black font-medium hover:bg-primary/90"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
