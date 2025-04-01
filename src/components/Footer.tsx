
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Workshop de IA</h3>
            <p className="mb-4">
              Um evento exclusivo para empreendedores brasileiros em Orlando que desejam transformar seus negócios através da tecnologia.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
            <p className="mb-2">Email: info@cacao-ai.com</p>
            <p>WhatsApp: +1 (407) 989-7162</p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Detalhes do Evento</h3>
            <p className="mb-2">Data: 2 e 3 de maio de 2024</p>
            <p className="mb-2">Local: Orlando, FL</p>
            <p>Vagas: Limitadas a 40 participantes</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Workshop de IA e Transformação Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
