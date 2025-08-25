
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(87) 99961-2137",
      action: () => window.open('tel:+5587999612137', '_self')
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "jacson-25@hotmail.com",
      action: () => window.open('mailto:jacson-25@hotmail.com', '_self')
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Projetada dois 30",
      action: () => window.open('https://maps.google.com/?q=Rua Projetada dois 30', '_blank')
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda à Sexta: 8h às 18h",
      action: null
    }
  ];

  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-foreground">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Estamos prontos para atender você! Entre em contato e descubra como podemos 
            ajudar seu negócio a crescer com nossas soluções especializadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-xl sm:text-2xl mb-4 sm:mb-6 text-foreground">
              Informações de Contato
            </h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className={`p-3 sm:p-4 border-border/50 hover:border-primary/20 transition-all duration-300 ${
                    contact.action ? 'cursor-pointer hover:shadow-md' : ''
                  }`}
                  onClick={contact.action || undefined}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{contact.title}</h4>
                      <p className="text-muted-foreground text-sm sm:text-base break-words">{contact.info}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-card p-4 sm:p-6 rounded-xl border border-border/50">
              <h4 className="font-heading font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-foreground">
                CNPJ: 31.443.495/0001-57
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Empresa especializada em automação fiscal com mais de 18 anos de experiência 
                no mercado, oferecendo soluções completas e suporte técnico especializado.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="font-heading font-semibold text-xl sm:text-2xl mb-4 sm:mb-6 text-foreground">
              Fale Conosco Agora
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6 border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-primary" />
                  <h4 className="font-semibold text-lg sm:text-xl mb-2 text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                    Atendimento rápido e personalizado via WhatsApp. 
                    Clique no botão abaixo e fale diretamente conosco.
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => window.open('https://wa.me/5587999612137', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">Conversar no WhatsApp</span>
                  </Button>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="text-center">
                  <Phone className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-secondary" />
                  <h4 className="font-semibold text-lg sm:text-xl mb-2 text-foreground">Ligação Direta</h4>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                    Prefere falar por telefone? Ligue agora e receba 
                    atendimento especializado.
                  </p>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('tel:+5587999612137', '_self')}
                    className="w-full border-secondary text-secondary hover:bg-secondary/10"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">(87) 99961-2137</span>
                  </Button>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="text-center">
                  <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-primary" />
                  <h4 className="font-semibold text-lg sm:text-xl mb-2 text-foreground">E-mail</h4>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                    Envie sua dúvida ou solicitação por e-mail e retornaremos 
                    o mais breve possível.
                  </p>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('mailto:jacson-25@hotmail.com', '_self')}
                    className="w-full border-primary text-primary hover:bg-primary/10"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="whitespace-nowrap">Enviar E-mail</span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
