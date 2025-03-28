
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">O workshop que vai transformar</span> seu negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais que um evento, uma experiência imersiva de transformação para empreendedores que buscam resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Quem deve participar?</h3>
            
            <div className="space-y-4">
              {[
                'Empreendedores e donos de negócios brasileiros em Orlando que buscam transformar suas empresas e se destacar no mercado.',
                'Líderes que desejam adotar soluções práticas de IA e transformação digital para reduzir custos e aumentar a eficiência.',
                'Profissionais que estão cansados de treinamentos teóricos e querem experiências práticas e aplicáveis imediatamente.',
                'Empresários que querem se conectar com outros inovadores e criar uma rede de contatos de alto nível.'
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">O que você vai aprender:</h3>
            
            <div className="space-y-4">
              {[
                'Como implementar IA em seu negócio para reduzir custos e aumentar a eficiência operacional.',
                'Estratégias práticas de transformação digital que você pode aplicar imediatamente.',
                'Técnicas avançadas de prompts e utilização de IA generativa para criar vantagem competitiva.',
                'Como identificar oportunidades de inovação em seu mercado e se posicionar à frente da concorrência.',
                'Metodologias exclusivas do programa "Letramento em IA" aplicadas à realidade do seu negócio.'
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
