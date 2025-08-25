
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/lovable-uploads/6a7ad79d-0b52-4a8c-b9b3-23f64d58dffa.png" 
                  alt="JK Automação Fiscal & Suporte Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                  JK AUTOMAÇÃO
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 -mt-1">
                  FISCAL & SUPORTE
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Mais de 18 anos oferecendo soluções especializadas em automação fiscal, 
              suporte técnico e equipamentos de informática.
            </p>
            <div className="text-xs sm:text-sm text-gray-300">
              <p className="font-semibold text-white">CNPJ:</p>
              <p className="break-words">31.443.495/0001-57</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Navegação
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm text-left"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Serviços
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li>Sistema Fiscal Empresarial</li>
              <li>Treinamentos Especializados</li>
              <li>Rede Lógica</li>
              <li>Suporte Técnico</li>
              <li>Venda de Computadores</li>
              <li>Peças e Equipamentos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Contato
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 break-words">(87) 99961-2137</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 break-words">jacson-25@hotmail.com</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300">Rua Projetada dois 30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-300">
              © {new Date().getFullYear()} JK Automação Fiscal & Suporte. Todos os direitos reservados.
            </p>
            <p className="text-xs sm:text-sm text-gray-300">
              Desenvolvido com tecnologia e dedicação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
