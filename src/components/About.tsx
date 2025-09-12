import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server,
  Palette,
  Zap,
  Trophy
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const skills = [
    { icon: Code2, name: 'React.js', color: 'text-accent' },
    { icon: Server, name: 'Python', color: 'text-primary' },
    { icon: Globe, name: 'TypeScript', color: 'text-accent' },
    { icon: Database, name: 'PostgreSQL', color: 'text-primary' },
    { icon: Code2, name: 'PHP', color: 'text-accent' },
    { icon: Server, name: 'Node.js', color: 'text-primary' },
    { icon: Smartphone, name: 'React Native', color: 'text-accent' },
    { icon: Palette, name: 'Tailwind CSS', color: 'text-primary' },
  ];

  const stats = [
    { icon: Trophy, value: '2+', label: 'Anos de Experiência' },
    { icon: Code2, value: '15+', label: 'Projetos Concluídos' },
    { icon: Zap, value: '8+', label: 'Tecnologias Dominadas' },
  ];

  return (
    <section id="sobre" className="py-20 bg-background" ref={aboutRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${aboutVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-primary">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* About Text */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Desenvolvedor apaixonado por tecnologia e inovação
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou um desenvolvedor full stack com mais de 2 anos de experiência, 
                  especializado em criar soluções web modernas e eficientes. Minha jornada 
                  começou com curiosidade e se transformou em paixão por resolver problemas 
                  complexos através do código.
                </p>
                <p>
                  Trabalho principalmente com <span className="text-primary font-semibold">React.js</span> no 
                  frontend e <span className="text-accent font-semibold">Python</span> no backend, 
                  sempre buscando as melhores práticas e tecnologias mais recentes para 
                  entregar produtos de alta qualidade.
                </p>
                <p>
                  Acredito que a tecnologia deve ser acessível e intuitiva. Por isso, 
                  foco em criar interfaces que proporcionem uma excelente experiência 
                  do usuário, combinada com arquiteturas robustas e escaláveis.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {stats.map((stat, index) => (
                <Card key={index} className="card-gradient hover-lift border-border/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg glow-effect">
                        <stat.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className={`transition-all duration-1000 ${skillsVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`} ref={skillsRef}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Tecnologias & Ferramentas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="card-gradient hover-lift border-border/30 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-secondary rounded-lg group-hover:bg-gradient-primary transition-all duration-300 glow-effect">
                        <skill.icon className={`w-8 h-8 ${skill.color} group-hover:text-primary-foreground transition-colors`} />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;