import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "18 Anos de Experiência",
      description: "Mais de uma década e meia de expertise no mercado de automação fiscal."
    },
    {
      icon: Shield,
      title: "Suporte Especializado",
      description: "Equipe técnica qualificada para resolver qualquer desafio tecnológico."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para as necessidades específicas do seu negócio."
    },
    {
      icon: Zap,
      title: "Tecnologia Avançada",
      description: "Sistemas modernos e eficientes para otimizar seus processos fiscais."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-foreground">
            Sobre a <span className="text-gradient">JK Automação</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Empresa especializada com mais de 18 anos atuando no ramo de Automação Fiscal 
            e auto atendimento, oferecendo soluções completas e suporte especializado para 
            empresas de todos os portes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-hero-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-foreground">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Oferecer soluções tecnológicas inovadoras e confiáveis em automação fiscal, 
                proporcionando aos nossos clientes eficiência operacional, conformidade legal 
                e tranquilidade nos processos fiscais de seus negócios.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    <strong className="text-foreground">Excelência:</strong> Compromisso com a qualidade em todos os serviços prestados.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    <strong className="text-foreground">Inovação:</strong> Sempre atualizados com as últimas tecnologias do mercado.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    <strong className="text-foreground">Confiabilidade:</strong> Parceiros de confiança para o crescimento do seu negócio.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div 
                className="aspect-square w-full max-w-sm mx-auto lg:max-w-none rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: `url('/lovable-uploads/54abaaa8-51b8-4908-90d2-c9fc89292986.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-gradient-overlay"></div>
                <div className="text-center text-white z-10 px-4 py-8">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-2">18+</div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-medium">Anos de</div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-medium">Experiência</div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 sm:w-6 sm:h-6 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-3 h-3 sm:w-4 sm:h-4 bg-white/10 rounded-full"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-3 h-3 sm:w-4 sm:h-4 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
