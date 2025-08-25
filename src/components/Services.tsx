
import React from 'react';
import { Calculator, Network, HardDrive, Headphones, Wrench, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Sistema Fiscal Empresarial",
      description: "Sistemas completos de automação fiscal com emissão de NFe, NFCe, SPED e demais obrigações fiscais.",
      features: ["Emissão de Notas Fiscais", "SPED Fiscal e Contábil", "Integração com ERP", "Suporte Completo"]
    },
    {
      icon: Headphones,
      title: "Treinamentos Especializados",
      description: "Capacitação da sua equipe para utilização completa dos sistemas fiscais e equipamentos.",
      features: ["Treinamento Presencial", "Suporte Online", "Material Didático", "Certificação"]
    },
    {
      icon: Network,
      title: "Rede Lógica",
      description: "Instalação e manutenção de redes lógicas estruturadas para empresas de todos os portes.",
      features: ["Cabeamento Estruturado", "Configuração de Switches", "Wi-Fi Empresarial", "Monitoramento"]
    },
    {
      icon: Wrench,
      title: "Suporte Técnico",
      description: "Suporte especializado em computadores, notebooks e equipamentos de informática em geral.",
      features: ["Manutenção Preventiva", "Reparo de Equipamentos", "Suporte Remoto", "Atendimento 24h"]
    },
    {
      icon: HardDrive,
      title: "Venda de Computadores",
      description: "Comercialização de computadores, notebooks e equipamentos de informática com garantia.",
      features: ["Equipamentos Novos", "Configuração Personalizada", "Garantia Estendida", "Suporte Pós-Venda"]
    },
    {
      icon: ShoppingCart,
      title: "Peças e Equipamentos",
      description: "Venda de peças, componentes e equipamentos de rede lógica com qualidade garantida.",
      features: ["Peças Originais", "Equipamentos de Rede", "Componentes Diversos", "Entrega Rápida"]
    }
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-foreground">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Oferecemos soluções completas em automação fiscal, suporte técnico e equipamentos 
            de informática para atender todas as necessidades do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-hero-gradient/5 rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-hero-gradient rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => window.open('https://wa.me/5587999612137', '_blank')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center p-6 sm:p-8 bg-card rounded-2xl border border-border/50 shadow-sm max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2 text-foreground">
                Precisa de um serviço específico?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Entre em contato conosco e vamos encontrar a solução ideal para o seu negócio.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5587999612137', '_blank')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto"
              >
                <Headphones className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Falar com Especialista</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
