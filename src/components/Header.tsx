import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, MessageCircle } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-primary glow-effect"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Elias Victor</h1>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/EliasVRG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2 rounded-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/elias-victor-rocha-garcia-00243521b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2 rounded-lg"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border">
            <div className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contato
              </button>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <a
                  href="https://github.com/EliasVRG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/elias-victor-rocha-garcia-00243521b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;