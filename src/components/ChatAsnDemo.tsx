import { useEffect, useState } from "react";

const ChatAsnDemo = () => {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot'; typing?: boolean }>>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const conversation = [
    { text: "Olá! Gostaria de agendar uma consulta", sender: 'user' as const },
    { text: "Olá! Claro, vou te ajudar com isso. Qual serviço você precisa?", sender: 'bot' as const },
    { text: "Preciso de uma consulta com dentista", sender: 'user' as const },
    { text: "Perfeito! Temos horários disponíveis esta semana. Qual dia prefere?", sender: 'bot' as const },
    { text: "Terça-feira à tarde seria ideal", sender: 'user' as const },
    { text: "Ótimo! Temos disponibilidade às 14h e 16h. Qual horário prefere?", sender: 'bot' as const },
    { text: "14h está perfeito", sender: 'user' as const },
    { text: "Agendado! Sua consulta está marcada para terça-feira às 14h. Você receberá uma confirmação por email. Precisa de mais alguma coisa?", sender: 'bot' as const },
  ];

  useEffect(() => {
    if (currentStep < conversation.length) {
      const timer = setTimeout(() => {
        const message = conversation[currentStep];
        
        // Show typing indicator for bot messages
        if (message.sender === 'bot') {
          setMessages(prev => [...prev, { text: '', sender: 'bot', typing: true }]);
          
          setTimeout(() => {
            setMessages(prev => [...prev.slice(0, -1), message]);
            setCurrentStep(prev => prev + 1);
          }, 1500);
        } else {
          setMessages(prev => [...prev, message]);
          setCurrentStep(prev => prev + 1);
        }
      }, currentStep === 0 ? 500 : 2000);

      return () => clearTimeout(timer);
    } else {
      // Reset animation after completion
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentStep(0);
      }, 5000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [currentStep]);

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
          <div className="glass-card rounded-3xl p-4">
            {/* WhatsApp Header */}
            <div className="bg-[#075E54] rounded-t-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                AI
              </div>
              <div>
                <h3 className="text-white font-semibold">ChatASN Bot</h3>
                <p className="text-green-200 text-xs">online</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="bg-[#ECE5DD] p-4 min-h-[500px] max-h-[500px] overflow-y-auto rounded-b-2xl" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect fill=\"%23ECE5DD\" width=\"100\" height=\"100\"/><path d=\"M0 0 L50 50 L0 100\" stroke=\"%23D1D7DB\" stroke-width=\"0.5\" fill=\"none\" opacity=\"0.1\"/></svg>')" }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex mb-3 animate-fade-in ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.typing ? (
                    <div className="bg-white rounded-lg px-4 py-3 max-w-[80%] shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`rounded-lg px-4 py-3 max-w-[80%] shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-[#DCF8C6] text-gray-800'
                          : 'bg-white text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  )}
                </div>
              ))}
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
