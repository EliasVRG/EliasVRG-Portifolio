import { ArrowDown, Code, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Greeting */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-border/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Olá! Bem-vindo ao meu portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transformo
            <span className="text-transparent bg-clip-text bg-gradient-primary block">
              Ideias em Código
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack especializado em{' '}
            <span className="text-primary font-semibold">React</span>,{' '}
            <span className="text-accent font-semibold">PHP</span>,{' '}
            <span className="text-primary font-semibold">Python</span>,{' '}
            <span className="text-accent font-semibold">Oracle</span> e{' '}
            <span className="text-primary font-semibold">PostgreSQL</span>.
            Criando experiências digitais excepcionais.
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['React.js', 'PHP', 'Python', 'JavaScript', 'TypeScript', 'PostgreSQL', 'Oracle'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-secondary-foreground border border-border/30 hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-gradient text-primary-foreground font-semibold px-8 py-4 rounded-xl"
              onClick={() => scrollToSection('projetos')}
            >
              <Code className="w-5 h-5 mr-2" />
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border/30 hover:border-primary/50 bg-card/20 backdrop-blur-sm text-foreground px-8 py-4 rounded-xl"
              onClick={() => scrollToSection('contato')}
            >
              Vamos Conversar
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;