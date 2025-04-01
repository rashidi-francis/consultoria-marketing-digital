import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        alert("Formulário enviado com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erro ao enviar o formulário.");
      }
    } catch (error) {
      alert("Erro de rede. Tente novamente.");
    }
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
  <input type="hidden" name="form-name" value="contact" />
  <label>
    Nome:
    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
  </label>
  <label>
    Email:
    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
  </label>
  <label>
    Mensagem:
    <textarea name="message" value={formData.message} onChange={handleChange} required />
  </label>
  <button type="submit">Enviar</button>
</form>
  );
};

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          <div className="lg:w-1/3">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-4" />
                  <div>
                    <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                    <a href="https://api.whatsapp.com/send/?phone=5511930500397" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">
                      (11) 9 3050-0397
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mr-4" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">marketing@ajudoseunegocio.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-4" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Endereço</h4>
                    <p className="text-gray-400">Rua Praça da Sé, 21 - Centro São Paulo - SP</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mr-4" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-400">Segunda - Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="glass-card rounded-xl p-8">
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;