
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
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/6a7ad79d-0b52-4a8c-b9b3-23f64d58dffa.png" 
                  alt="JK Automação Fiscal & Suporte Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground">
                  JK AUTOMAÇÃO
                </h3>
                <p className="text-sm text-muted-foreground -mt-1">
                  FISCAL & SUPORTE
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Mais de 18 anos oferecendo soluções especializadas em automação fiscal, 
              suporte técnico e equipamentos de informática.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">CNPJ:</p>
              <p>31.443.495/0001-57</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('planos')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Planos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
            <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">(87) 99961-2137</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">jacson-25@hotmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Rua Projetada dois 30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} JK Automação Fiscal & Suporte. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Desenvolvido com tecnologia e dedicação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
