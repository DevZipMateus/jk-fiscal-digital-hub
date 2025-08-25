import React from 'react';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute inset-0 bg-black/10"></div>
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

      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">18 Anos de Experiência</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
            <span className="block">Automação Fiscal</span>
            <span className="block text-white/90">& Suporte Especializado</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em sistemas fiscais empresariais, rede lógica e suporte técnico 
            com a confiança de quem está no mercado há mais de 18 anos.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-white/80" />
              <span className="text-lg font-semibold">Suporte Especializado</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-white/80" />
              <span className="text-lg font-semibold">Atendimento Personalizado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => window.open('https://wa.me/5587999612137', '_blank')} className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold group">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('servicos')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-white/30 hover:border-white/50 px-8 py-4 text-lg font-semibold bg-lime-600 hover:bg-lime-500 text-white">
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;