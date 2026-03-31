import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Hacker Experience Layer
import '../ui-terminal.css';
import { initEffects } from '../effects';
import { initTerminal } from '../terminal';

const Portfolio = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorExpandedRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, .card-brutal, .tag-brutal, .glitch-hover');
      if (isInteractive && !cursorExpandedRef.current) {
        cursor.classList.add('expanded');
        cursorExpandedRef.current = true;
      } else if (!isInteractive && cursorExpandedRef.current) {
        cursor.classList.remove('expanded');
        cursorExpandedRef.current = false;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-brutal').forEach((el) => {
      observer.observe(el);
    });

    // Initialize Interactive Layer
    initEffects();
    initTerminal();

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block" />

      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Portfolio;