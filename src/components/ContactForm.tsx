import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Instagram, 
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle
} from "lucide-react";
import marketingTeam from "@/assets/marketing-team.jpg";

const ContactForm = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511930500397&text=Olá,%20vim%20do%20chat%20lá%20no%20site,%20gostaria%20mais%20informações....";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Vamos impulsionar seu
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-red ml-2">
              negócio digital
            </span>
          </h2>
          <p className="text-gray-300">
            Entre em contato conosco ou agende uma consultoria para entendermos as necessidades do seu negócio e te ajudarmos de forma personalizada.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <div className="glass-card rounded-xl p-0.5 h-full">
              <div className="bg-card rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <p className="text-gray-400 hover:underline">(11) 9 3050-0397</p>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-gray-400">marketing@ajudoseunegocio.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Endereço</h4>
                      <p className="text-gray-400">Rua Anchieta, 18 - Centro São Paulo - SP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Horário de Atendimento</h4>
                      <p className="text-gray-400">Segunda - Sexta: 9h às 18h</p>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex justify-start space-x-4 mt-6">
                    <a href="https://www.instagram.com/ajudo_seu_negocio" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-8 h-8 text-primary hover:text-white transition-colors" />
                    </a>
                    <a href="https://www.facebook.com/ajudoseunegocio" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-8 h-8 text-primary hover:text-white transition-colors" />
                    </a>
                    <a href="https://x.com/ajudoseunegocio" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-8 h-8 text-primary hover:text-white transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/company/ajudo-seu-negócio" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-8 h-8 text-primary hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp CTA Button */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors flex items-center justify-center gap-3 font-semibold text-lg shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={marketingTeam} 
                alt="Equipe de marketing digital trabalhando" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
