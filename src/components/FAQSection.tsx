
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: 'Preciso ter conhecimentos prévios em tecnologia ou IA?',
      answer: 'Não, o workshop foi desenhado para todos os níveis de conhecimento. Independentemente da sua experiência prévia, você sairá com conhecimentos práticos e aplicáveis ao seu negócio.'
    },
    {
      question: 'Como este workshop se diferencia de outros treinamentos?',
      answer: 'Nosso foco está 100% na aplicação prática. Você não apenas aprenderá conceitos, mas implementará soluções reais durante as 16 horas de evento, acompanhado de especialistas reconhecidos internacionalmente.'
    },
    {
      question: 'O que preciso levar para o workshop?',
      answer: 'Recomendamos que traga seu laptop para as atividades práticas. Todos os materiais necessários serão fornecidos durante o evento.'
    },
    {
      question: 'Haverá suporte após o evento?',
      answer: 'Sim, todos os participantes terão acesso a um grupo exclusivo onde poderão tirar dúvidas e compartilhar experiências após o workshop.'
    },
    {
      question: 'Posso aplicar o que aprenderei no meu negócio específico?',
      answer: 'Absolutamente! O workshop é personalizado para que você possa aplicar os conceitos diretamente no seu negócio, independentemente do setor ou tamanho da empresa.'
    },
    {
      question: 'O que acontece se eu não puder comparecer após a inscrição?',
      answer: 'Compreendemos que imprevistos acontecem. Entre em contato conosco até 7 dias antes do evento e podemos avaliar alternativas, como transferência para uma próxima edição.'
    }
  ];

  return (
    <div className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Perguntas</span> frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o workshop de transformação digital e IA
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200">
              <AccordionTrigger className="px-6 text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
