import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      const outline = heroRef.current.querySelector('.hero-outline') as HTMLElement;
      if (outline) {
        outline.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const hero = heroRef.current;
    hero?.addEventListener('mousemove', handleMouseMove);
    return () => hero?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden scanline"
      style={{ padding: '0 5vw' }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-[15vh] right-[5vw] font-mono-brutal text-[12vw] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
        DEV<br/>OPS<br/>SYS
      </div>

      {/* Decorative line number gutter */}
      <div className="absolute left-[2vw] top-[30vh] font-mono-brutal text-xs text-white/10 leading-[2.2] select-none pointer-events-none hidden lg:block">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i}>{String(i + 1).padStart(3, '0')}</div>
        ))}
      </div>

      <div className="relative z-10 max-w-[90vw]">
        {/* Small label */}
        <div className="font-mono-brutal text-xs tracking-[4px] text-[var(--gray)] mb-8 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[var(--primary)] inline-block" />
          BACKEND & FULLSTACK DEVELOPER
        </div>

        {/* Main heading — huge, overlapping, asymmetric */}
        <div className="relative">
          <h1 className="font-brutal leading-[0.82]" style={{ fontSize: 'clamp(3rem, 11vw, 12rem)' }}>
            <span className="block text-white">I BUILD</span>
            <span className="block text-[var(--primary)] relative">
              SYSTEMS
              {/* Ghost outline text */}
              <span
                className="hero-outline absolute top-0 left-0 text-transparent pointer-events-none"
                style={{
                  WebkitTextStroke: '1px rgba(255,214,10,0.3)',
                  transform: 'translate(5px, 5px)',
                  transition: 'transform 0.05s steps(2)',
                }}
                aria-hidden="true"
              >
                SYSTEMS
              </span>
            </span>
            <span className="block text-white">
              THAT <span className="text-[var(--accent)]">WORK</span>
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="font-mono-brutal text-sm text-[var(--gray)] mt-8 max-w-[500px] leading-relaxed tracking-wide">
          <span className="text-[var(--primary)]">$ </span>
          Production-grade code. Zero excuses.<br/>
          <span className="text-[var(--primary)]">$ </span>
          Oracle → PostgreSQL → React → Deploy.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={() => {
              document.getElementById('projetos')?.scrollIntoView({ behavior: 'auto' });
            }}
            className="border-[3px] border-white px-8 py-3 font-mono-brutal text-sm font-bold tracking-[2px] text-white hover:bg-white hover:text-black transition-none"
          >
            VIEW WORK →
          </button>
          <button
            onClick={() => {
              document.getElementById('contato')?.scrollIntoView({ behavior: 'auto' });
            }}
            className="border-[3px] border-[var(--primary)] px-8 py-3 font-mono-brutal text-sm font-bold tracking-[2px] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-none"
          >
            HIRE ME
          </button>
        </div>

        {/* Status bar */}
        <div className="mt-16 flex flex-wrap items-center gap-6 font-mono-brutal text-xs text-[var(--gray)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--accent)] inline-block animate-blink" />
            AVAILABLE FOR WORK
          </div>
          <div>
            <span className="text-white">2+</span> YEARS EXP
          </div>
          <div>
            <span className="text-white">15+</span> PROJECTS SHIPPED
          </div>
          <div>
            MARINGÁ-PR, BRASIL
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-brutal text-xs text-[var(--gray)] flex flex-col items-center gap-2">
        <span className="tracking-[3px]">SCROLL</span>
        <div className="w-[1px] h-8 bg-[var(--gray)]" />
      </div>
    </section>
  );
};

export default Hero;