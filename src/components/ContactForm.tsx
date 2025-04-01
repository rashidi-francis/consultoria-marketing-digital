import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock,
  Instagram, 
  Facebook
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form submission for Netlify
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error("Erro ao enviar formulário", response);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário", error);
    }
  };

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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="glass-card rounded-xl p-0.5 h-full">
              <div className="bg-card rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">WhatsApp(Clique para iniciar Chat)</h4>
                      <a href="https://api.whatsapp.com/send/?phone=5511930500397&text=Olá vim do site, gostaria agendar uma consultoria personalizada para o meu negócio" target="_blank" rel="noopener noreferrer">
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
                      <p className="text-gray-400">Rua Praça da Sé, 21 - Centro São Paulo - SP</p>
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
                  </div>

                </div>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="lg:w-2/3">
            {formSubmitted ? (
              <div className="text-center">
                <h3 className="text-2xl text-white mb-4">Obrigado pelo seu contato!</h3>
                <p className="text-gray-400">Responderemos o mais breve possível.</p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="phone" value={formData.phone} />


                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="name">Nome</label>
                  <input type="text" name="name" id="name" required className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4" placeholder="Seu nome" onChange={handleChange} />
                </div>

                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4" placeholder="Seu e-mail" onChange={handleChange} />
                </div>

                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="phone">Celular</label>
                  <input type="tel" name="phone" id="phone" required  className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4" placeholder="Celular com DDD e que tenha whatsapp de preferência" onChange={handleChange} />
                </div>

                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="company">Nome da Empresa</label>
                  <input type="text" name="company" id="company" required className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4" placeholder="Nome do seu Negócio, empresa ou marca" onChange={handleChange} />
                </div>

                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="message">Mensagem</label>
                  <textarea name="message" id="message" required rows={4} className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4" placeholder="Nos conte sobre seu negócio e o tipo de ajuda que precisa" onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="w-full py-3 px-6 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors flex items-center justify-center">
                  Enviar <Send className="ml-3" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
