import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    servico: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
      }}
    >
      <label>
        Nome Completo *
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email *
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Telefone
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
      </label>
      <label>
        Empresa
        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
        />
      </label>
      <label>
        Serviço de interesse
        <select
          name="servico"
          value={formData.servico}
          onChange={handleChange}
        >
          <option value="Consultoria">Consultoria</option>
          <option value="Tráfego pago">Tráfego pago</option>
          <option value="SEO">SEO</option>
        </select>
      </label>
      <label>
        Mensagem *
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Gostaria de agendar uma consultoria gratuita
        <input type="checkbox" name="agendar" />
      </label>
      <button type="submit">Enviar Mensagem</button>
    </form>
  );
};

export default ContactForm;