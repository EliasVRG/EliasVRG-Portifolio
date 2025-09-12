import { 
  Mail, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Instagram,
  MapPin,
  Clock,
  Send
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: 'Vamos conversar!',
      value: '+55 (11) 99999-9999',
      link: 'https://wa.me/5511999999999',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Para contato profissional',
      value: 'joao@exemplo.com',
      link: 'mailto:joao@exemplo.com',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: MapPin,
      title: 'Localização',
      subtitle: 'São Paulo, Brasil',
      value: 'Disponível para remoto',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Clock,
      title: 'Disponibilidade',
      subtitle: 'Seg - Sex',
      value: '08:00 - 18:00',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      username: '@joaosilva',
      url: 'https://github.com',
      color: 'text-foreground hover:text-primary'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: 'João Silva',
      url: 'https://linkedin.com',
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      username: '@joao.dev',
      url: 'https://instagram.com',
      color: 'text-pink-500 hover:text-pink-400'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vamos <span className="text-transparent bg-clip-text bg-gradient-primary">Conversar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato comigo!
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-gradient hover-lift border-border/30">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${info.bgColor}`}>
                            <info.icon className={`w-6 h-6 ${info.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{info.title}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{info.subtitle}</p>
                            {info.link ? (
                              <a 
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:text-primary/80 transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-sm text-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Redes Sociais
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="card-gradient hover-lift border-border/30">
                      <CardContent className="p-4">
                        <a 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 group"
                        >
                          <social.icon className={`w-6 h-6 ${social.color} transition-colors`} />
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {social.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">{social.username}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="card-gradient border-border/30 h-full">
                <CardContent className="p-8 flex flex-col justify-center h-full">
                  <div className="text-center space-y-6">
                    <div className="p-4 bg-gradient-primary rounded-full w-20 h-20 mx-auto glow-effect flex items-center justify-center">
                      <Send className="w-10 h-10 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Pronto para começar um projeto?
                      </h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        Tenho disponibilidade para novos projetos e adoraria saber mais 
                        sobre sua ideia. Vamos transformá-la em realidade juntos!
                      </p>
                    </div>

                    {/* Primary CTA */}
                    <div className="space-y-4">
                      <Button 
                        size="lg"
                        className="btn-gradient text-primary-foreground font-semibold w-full"
                        asChild
                      >
                        <a 
                          href="https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Chamar no WhatsApp
                        </a>
                      </Button>
                      
                      <Button 
                        size="lg"
                        variant="outline"
                        className="border-border/30 hover:border-primary/50 bg-card/20 backdrop-blur-sm text-foreground w-full"
                        asChild
                      >
                        <a 
                          href="mailto:joao@exemplo.com?subject=Proposta de Projeto&body=Olá João, vi seu portfólio e gostaria de discutir um projeto."
                          className="flex items-center justify-center"
                        >
                          <Mail className="w-5 h-5 mr-2" />
                          Enviar Email
                        </a>
                      </Button>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Resposta em até 24 horas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;