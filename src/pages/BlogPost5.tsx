import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogFacebookImage from "@/assets/blog-facebook-ads.jpg";
import authorAvatar from "@/assets/nathalia-avatar.jpg";

const BlogPost5 = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de suporte técnico da Ajudo Seu Negócio."
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
              Tecnologia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Guia Completo: Formatação e Instalação do Windows do Zero
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={authorAvatar} 
                alt="Bruno Costa" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">Bruno Costa</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>22 Jul 2024</span>
                  <span className="mx-2">•</span>
                  <span>10 min de leitura</span>
                </div>
              </div>
            </div>
          </div>

          <img 
            src={blogFacebookImage} 
            alt="Formatação e Instalação do Windows" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Seu computador está lento, travando ou apresentando problemas constantes? Uma formatação limpa e instalação do Windows do zero pode ser a solução. Neste guia completo, vamos mostrar como realizar esse processo de forma segura e eficiente.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quando É Necessário Formatar?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Algumas situações indicam que é hora de formatar: sistema operacional muito lento, vírus ou malware persistente, erros frequentes e travamentos, ou simplesmente para dar uma "vida nova" ao computador. A formatação remove todos os dados e reinstala o sistema operacional, eliminando problemas acumulados.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Preparação: Backup de Dados</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>ATENÇÃO:</strong> Antes de formatar, faça backup de TODOS os arquivos importantes. Copie documentos, fotos, vídeos e qualquer dado que você não pode perder para um HD externo, pen drive ou armazenamento em nuvem. A formatação apaga TUDO do disco rígido.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Não se esqueça de salvar senhas, favoritos do navegador e configurações de programas importantes. Anote também as chaves de ativação de softwares pagos que você usa.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Criando um Pen Drive Bootável</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Você precisará de um pen drive com pelo menos 8GB e da ferramenta oficial da Microsoft: Media Creation Tool. Baixe do site oficial da Microsoft, execute o programa e selecione a opção "Criar mídia de instalação para outro PC". Escolha a versão do Windows, arquitetura (64 bits recomendado) e selecione seu pen drive. O processo leva cerca de 30 minutos.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Processo de Instalação</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Passo 1:</strong> Conecte o pen drive bootável e reinicie o computador. Acesse a BIOS/UEFI (geralmente pressionando F2, F12, DEL ou ESC durante a inicialização) e configure o pen drive como primeira opção de boot.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Passo 2:</strong> O instalador do Windows será iniciado. Selecione o idioma, formato de hora e teclado. Clique em "Instalar agora".
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Passo 3:</strong> Escolha "Instalação personalizada" e selecione a partição onde deseja instalar o Windows. Para uma instalação limpa, delete todas as partições e crie uma nova, ou formate a partição existente.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Passo 4:</strong> A instalação levará cerca de 20-40 minutos. O computador reiniciará algumas vezes automaticamente.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Configuração Inicial</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Após a instalação, configure região, idioma, rede Wi-Fi e sua conta Microsoft. Recomendamos criar uma conta Microsoft para aproveitar recursos como sincronização e OneDrive.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Instalação de Drivers</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              O Windows instala automaticamente muitos drivers, mas alguns componentes podem precisar de drivers específicos. Visite o site do fabricante do seu computador ou placa-mãe e baixe os drivers mais recentes para: placa de vídeo, chipset, rede/Wi-Fi e áudio.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Atualizações e Segurança</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Vá em Configurações → Windows Update e instale todas as atualizações disponíveis. Isso garante que seu sistema tenha as últimas correções de segurança e melhorias de desempenho. Ative o Windows Defender e configure o firewall.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Otimizações Pós-Instalação</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Desative programas desnecessários na inicialização (Ctrl+Shift+Esc → Inicializar). Desinstale bloatware (programas pré-instalados desnecessários). Configure um ponto de restauração do sistema. Instale apenas os programas que você realmente usa.
            </p>

            <div className="glass-card rounded-xl p-0.5 mt-12">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Precisa de ajuda profissional?
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe técnica pode realizar a formatação e instalação do Windows de forma rápida e segura, além de otimizar seu computador para máximo desempenho. Também oferecemos suporte técnico completo para sua empresa.
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

export default BlogPost5;
