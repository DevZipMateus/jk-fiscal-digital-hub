
import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Plans = () => {
  const plans = [
    {
      name: "Sistema Fiscal Básico",
      description: "Ideal para pequenas empresas que estão começando",
      price: "Consulte",
      features: [
        "Emissão de NFe e NFCe",
        "SPED Fiscal básico",
        "Suporte por email",
        "Treinamento inicial",
        "1 usuário simultâneo",
        "Backup automático"
      ],
      popular: false
    },
    {
      name: "Sistema Fiscal Completo",
      description: "Solução completa para empresas em crescimento",
      price: "Consulte",
      features: [
        "Todas as funcionalidades do Básico",
        "SPED Contábil completo",
        "Múltiplos usuários",
        "Suporte telefônico prioritário",
        "Integração com ERP",
        "Relatórios avançados",
        "Treinamento avançado",
        "Consultoria fiscal"
      ],
      popular: true
    },
    {
      name: "Pacote Empresarial",
      description: "Para grandes empresas com necessidades específicas",
      price: "Consulte",
      features: [
        "Sistema fiscal completo",
        "Suporte técnico especializado",
        "Rede lógica estruturada",
        "Equipamentos de informática",
        "Manutenção preventiva",
        "Suporte 24/7",
        "Consultoria personalizada",
        "SLA garantido"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Nossos <span className="text-gradient">Planos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Escolha o plano ideal para o seu negócio. Todas as soluções incluem 
            suporte especializado e garantia de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/50 shadow-lg scale-105 bg-card' 
                  : 'border-border/50 hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-hero-gradient text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => window.open('https://wa.me/5587999612137', '_blank')}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-hero-gradient hover:opacity-90 text-white' 
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                }`}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-sm">
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-foreground">
            Não encontrou o plano ideal?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Criamos soluções personalizadas para atender às necessidades específicas do seu negócio. 
            Entre em contato e vamos desenvolver o plano perfeito para você.
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://wa.me/5587999612137', '_blank')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
          >
            Falar com Consultor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
