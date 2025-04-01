import { useState } from "react";

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

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
          <div className="lg:w-2/3">
            <div className="glass-card rounded-xl p-0.5 h-full">
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Entre em Contato</h3>

                {/* Formulário com a integração Netlify */}
                <form
                  name="contact"
                  method="POST"
                  action="/success"
                  data-netlify="true"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  {/* Campos do Formulário */}
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
                          required
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
                          required
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
                        required
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
