import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      element.scrollIntoView({ behavior: 'auto' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'sobre', label: '// ABOUT' },
    { id: 'projetos', label: '// PROJECTS' },
    { id: 'stack', label: '// STACK' },
    { id: 'contato', label: '// CONTACT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-none border-b-[3px] border-white ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-none' : 'bg-[#0a0a0a]/80'
      }`}
    >
      <nav className="flex items-center justify-between px-[30px] py-[12px]">
        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
          className="flex items-center gap-3 group"
        >
          <span className="font-mono-brutal text-sm font-bold tracking-[3px] text-white group-hover:text-[var(--primary)] transition-none">
            ELIAS<span className="text-[var(--primary)]"> //</span> DEV
          </span>
          <span className="w-2 h-2 bg-[var(--accent)] animate-blink" />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray-light)] hover:text-[var(--primary)] transition-none glitch-hover"
            >
              {item.label}
            </button>
          ))}
          
          <a
            href="https://github.com/EliasVRG"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-brutal text-xs tracking-[2px] border-2 border-white px-3 py-1 text-white hover:bg-white hover:text-black transition-none"
          >
            GITHUB ↗
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white hover:text-[var(--primary)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t-[3px] border-white">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono-brutal text-sm tracking-[2px] text-white hover:bg-[var(--primary)] hover:text-black px-[30px] py-4 text-left border-b border-white/10 transition-none"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/EliasVRG"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-brutal text-sm tracking-[2px] text-[var(--accent)] px-[30px] py-4 hover:bg-[var(--accent)] hover:text-black transition-none"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;