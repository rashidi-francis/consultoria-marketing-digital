import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
                      <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                      <p className="text-gray-400">(11) 9 3050-0397</p>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="name">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    id="name" 
                    required 
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu e-mail"
                  />
                </div>

                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="phone">Celular</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    id="phone" 
                    required 
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Seu celular"
                  />
                </div>

                <div>
                  <label className="text-white block text-sm font-medium mb-2" htmlFor="message">Mensagem</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Escreva sua mensagem"
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="w-full py-3 px-6 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors flex items-center justify-center">
                    Enviar <Send className="ml-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;