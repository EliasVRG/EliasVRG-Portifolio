import { Heart, Code, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Motivational Quote */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Rocket className="w-6 h-6 text-primary animate-float" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-relaxed">
              "Cada linha de código é um passo em direção ao{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">futuro</span>"
            </blockquote>
            <p className="text-muted-foreground italic">
              Transformando desafios em oportunidades, uma solução por vez.
            </p>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>

          {/* Footer Content */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>e</span>
              <Code className="w-4 h-4 text-primary" />
              <span>por Elias Victor Rocha Garcia</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Elias Victor Rocha Garcia. Todos os direitos reservados.</p>
              <p className="mt-2">
                Feito com React.js, TypeScript e Tailwind CSS
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground border border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;