import chatAsnConversation from "@/assets/chatasn-conversation.png";

const ChatAsnDemo = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            Veja em Ação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ChatASN
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green ml-2">
              conversando com clientes
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Veja como nosso agente inteligente conversa naturalmente, agenda compromissos e resolve dúvidas em tempo real
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="glass-card rounded-3xl p-2 hover:scale-105 transition-transform duration-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Phone Frame Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 pointer-events-none"></div>
              
              <img 
                src={chatAsnConversation}
                alt="ChatASN conversando com cliente no WhatsApp, agendando consulta com Dr. Gustavo"
                className="w-full h-auto"
              />
              
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 blur-xl opacity-50 -z-10"></div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5511930500397&text=Olá,%20vim%20da%20vossa%20plataforma%20de%20IA,%20gostaria%20de%20saber%20mais%20sobre%20o%20ChatASN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 neo-btn transition-all duration-300 cta-whatsapp-demo"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quero Implementar no Meu Negócio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatAsnDemo;
