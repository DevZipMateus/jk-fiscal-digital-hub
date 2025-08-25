
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Oferecemos soluções completas em automação fiscal, suporte técnico e equipamentos 
            de informática para atender todas as necessidades do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-hero-gradient/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-hero-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => window.open('https://wa.me/5587999612137', '_blank')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center p-8 bg-card rounded-2xl border border-border/50 shadow-sm">
            <div className="text-center">
              <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
                Precisa de um serviço específico?
              </h3>
              <p className="text-muted-foreground mb-4">
                Entre em contato conosco e vamos encontrar a solução ideal para o seu negócio.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5587999612137', '_blank')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
