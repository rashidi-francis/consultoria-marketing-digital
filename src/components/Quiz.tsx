
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

// Quiz questions and options
const quizData = [
  {
    question: "Qual é o principal objetivo da sua empresa no marketing digital?",
    options: [
      "Aumentar a visibilidade da marca",
      "Gerar mais leads qualificados",
      "Aumentar as vendas diretas",
      "Melhorar o relacionamento com clientes"
    ]
  },
  {
    question: "Qual canal de marketing digital você já utiliza com mais frequência?",
    options: [
      "Redes Sociais",
      "E-mail Marketing",
      "SEO e Conteúdo",
      "Anúncios Pagos",
      "Nenhum dos anteriores"
    ]
  },
  {
    question: "Qual é o seu maior desafio atual com marketing digital?",
    options: [
      "Falta de estratégia clara",
      "Dificuldade para medir resultados",
      "Orçamento limitado",
      "Falta de conhecimento técnico",
      "Alta competição no mercado"
    ]
  },
  {
    question: "Em quanto tempo você espera ver resultados significativos?",
    options: [
      "1-3 meses",
      "3-6 meses",
      "6-12 meses",
      "Mais de 12 meses"
    ]
  }
];

const QuizResults = [
  {
    title: "Estratégia de Visibilidade",
    description: "Sua empresa precisa de uma estratégia focada em aumentar a visibilidade da marca e construir autoridade no mercado. Recomendamos uma combinação de SEO, marketing de conteúdo e presença ativa em redes sociais.",
    cta: "Baixe nosso guia completo sobre estratégias de visibilidade!"
  },
  {
    title: "Geração de Leads Qualificados",
    description: "Sua empresa precisa aprimorar sua capacidade de atrair leads mais qualificados. Recomendamos investir em marketing de conteúdo estratégico, automação de marketing e landing pages otimizadas.",
    cta: "Baixe nosso checklist gratuito de captação de leads!"
  },
  {
    title: "Otimização de Conversões",
    description: "Sua empresa precisa focar na otimização da jornada do cliente para aumentar as taxas de conversão. Recomendamos testes A/B, otimização de funil de vendas e remarketing estratégico.",
    cta: "Baixe nosso guia de otimização de conversões!"
  },
  {
    title: "Estratégia Integrada de Marketing",
    description: "Sua empresa se beneficiaria de uma abordagem holística que integra múltiplos canais. Recomendamos desenvolver uma estratégia omnichannel com foco em dados e personalização.",
    cta: "Baixe nosso framework de estratégia integrada de marketing!"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [resultIndex, setResultIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    // Move to next question or show results
    if (currentQuestion < quizData.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      // Calculate result
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Simple algorithm to determine which result to show based on answers
    // This is just a placeholder - you'd want a more sophisticated approach in production
    const sum = answers.reduce((acc, val) => acc + val, 0);
    const result = Math.floor(sum % QuizResults.length);
    setResultIndex(result);
    setShowResults(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setFormSubmitted(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setFormSubmitted(false);
    setEmail("");
  };

  // Animation classes for question transitions
  useEffect(() => {
    const questionElement = document.getElementById('current-question');
    if (questionElement) {
      questionElement.classList.add('animate-fade-in');
    }
  }, [currentQuestion]);

  return (
    <section id="quiz" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-blue/5 to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[100px] opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-4">
              Quiz Interativo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Descubra qual estratégia de marketing seu
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink ml-2">
                negócio precisa!
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Responda algumas perguntas rápidas e receba uma análise personalizada das melhores estratégias para o seu negócio.
            </p>
          </div>

          <div className="glass-card rounded-xl p-0.5">
            <div className="bg-card rounded-xl p-8 min-h-[400px] relative flex flex-col">
              {!showResults ? (
                <>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Pergunta {currentQuestion + 1} de {quizData.length}</span>
                      <span>{Math.round(((currentQuestion + 1) / quizData.length) * 100)}% concluído</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Question */}
                  <div id="current-question" className="mb-8 opacity-0">
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-6">
                      {quizData[currentQuestion].question}
                    </h3>
                    
                    {/* Options */}
                    <div className="space-y-4">
                      {quizData[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                            answers[currentQuestion] === index
                              ? "bg-primary/20 border border-primary"
                              : "bg-white/5 border border-white/10 hover:bg-white/10"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="mt-auto flex justify-between">
                    <button
                      onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        currentQuestion > 0
                          ? "text-gray-300 hover:text-white"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={currentQuestion === 0}
                    >
                      Anterior
                    </button>
                    <div className="flex space-x-2">
                      {quizData.map((_, index) => (
                        <span
                          key={index}
                          className={`w-2.5 h-2.5 rounded-full ${
                            index === currentQuestion
                              ? "bg-primary"
                              : index < currentQuestion
                              ? "bg-gray-400"
                              : "bg-gray-600"
                          }`}
                        ></span>
                      ))}
                    </div>
                    <button
                      onClick={() => answers[currentQuestion] !== undefined && currentQuestion < quizData.length - 1 && setCurrentQuestion(currentQuestion + 1)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        answers[currentQuestion] !== undefined && currentQuestion < quizData.length - 1
                          ? "text-primary hover:text-primary/80"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={answers[currentQuestion] === undefined || currentQuestion === quizData.length - 1}
                    >
                      Próximo
                    </button>
                  </div>
                </>
              ) : (
                <div className="animate-fade-in">
                  {!formSubmitted ? (
                    <>
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {QuizResults[resultIndex].title}
                        </h3>
                        <p className="text-gray-300">
                          {QuizResults[resultIndex].description}
                        </p>
                      </div>
                      
                      <div className="glass-card rounded-xl p-6 mb-8">
                        <h4 className="text-xl font-medium text-white mb-4">
                          {QuizResults[resultIndex].cta}
                        </h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                              Seu email para receber o material:
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="seu@email.com"
                              required
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full neo-btn py-3 rounded-lg bg-primary text-black font-medium hover:bg-primary/90"
                          >
                            Baixar Material Gratuito
                          </button>
                        </form>
                      </div>
                      
                      <div className="text-center">
                        <button
                          onClick={restartQuiz}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          Reiniciar Quiz
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12 animate-fade-in">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Material Enviado com Sucesso!
                      </h3>
                      <p className="text-gray-300 mb-8 max-w-md mx-auto">
                        Verifique seu email em alguns minutos para acessar seu material exclusivo sobre {QuizResults[resultIndex].title.toLowerCase()}.
                      </p>
                      <button
                        onClick={restartQuiz}
                        className="px-6 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                      >
                        Fazer o Quiz Novamente
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
