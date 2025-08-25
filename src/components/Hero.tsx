
import React from 'react';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/2368fde8-50a3-4a25-a9c1-6cff08bccf99.png" 
          alt="Tecnologia Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-hero-gradient opacity-40"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float" style={{
          animationDelay: '4s'
        }}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
      </div>

      <div className="relative z-10 container-custom text-center text-white px-4 sm:px-6">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">18 Anos de Experiência</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
            <span className="block">Automação Fiscal</span>
            <span className="block text-white/90">& Suporte Especializado</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Soluções completas em sistemas fiscais empresariais, rede lógica e suporte técnico 
            com a confiança de quem está no mercado há mais de 18 anos.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 px-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap">Suporte Especializado</span>
            </div>
            <div className="hidden sm:block w-px h-6 lg:h-8 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold whitespace-nowrap">Atendimento Personalizado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/5587999612137', '_blank')} 
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group"
            >
              <span className="whitespace-nowrap">Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('servicos')?.scrollIntoView({
                behavior: 'smooth'
              })} 
              className="w-full sm:w-auto border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-lime-600 hover:bg-lime-500 text-white"
            >
              <span className="whitespace-nowrap">Conhecer Serviços</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
