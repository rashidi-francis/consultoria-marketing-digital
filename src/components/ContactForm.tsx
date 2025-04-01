import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Calendar,
  Clock,
  MessageSquare,
  User
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
    schedule: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Fetch logic for form submission
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setFormSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-radial from-neon-purple/5 via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                      <p className="text-gray-400">(11) 9 3050-0397</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-gray-400">marketing@ajudoseunegocio.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Endereço</h4>
                      <p className="text-gray-400">Rua Praça da Sé, 21 - Centro São Paulo - SP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Horário de Atendimento</h4>
                      <p className="text-gray-400">Segunda - Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-white font-medium mb-4">Nos siga nas redes sociais</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/ajudoseunegocio" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com/ajudo_seu_negocio" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8.00001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="glass-card rounded-xl p-0.5 h-full">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Entre em Contato</h3>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="w-full md:w-1/2">
                        <input 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          type="text" 
                          className="input-field"
                          placeholder="Nome completo"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <input 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          type="email" 
                          className="input-field"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="w-full md:w-1/2">
                        <input 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          type="tel" 
                          className="input-field"
                          placeholder="Telefone"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <input 
                          name="company" 
                          value={formData.company} 
                          onChange={handleChange} 
                          type="text" 
                          className="input-field"
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className="input-field"
                        placeholder="Mensagem"
                      />
                    </div>

                    <div className="w-full">
                      <button 
                        type="submit" 
                        className="submit-button"
                        disabled={formSubmitted}
                      >
                        {formSubmitted ? "Enviado" : "Enviar"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
