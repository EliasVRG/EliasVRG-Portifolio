import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();

  const links = [
    {
      label: 'WHATSAPP',
      value: '+55 (44) 99710-8065',
      href: 'https://wa.me/5544997108065?text=Saw your portfolio. Let\'s talk.',
      accent: 'var(--accent)',
    },
    {
      label: 'EMAIL',
      value: 'eliasvictor2452@gmail.com',
      href: 'mailto:eliasvictor2452@gmail.com?subject=Project Inquiry&body=Hey Elias, saw your portfolio and want to discuss a project.',
      accent: 'var(--primary)',
    },
    {
      label: 'GITHUB',
      value: 'github.com/EliasVRG',
      href: 'https://github.com/EliasVRG',
      accent: 'var(--white)',
    },
    {
      label: 'LINKEDIN',
      value: 'Elias Victor Rocha Garcia',
      href: 'https://www.linkedin.com/in/elias-victor-rocha-garcia-00243521b/',
      accent: '#0A66C2',
    },
    {
      label: 'INSTAGRAM',
      value: '@elias_victor__',
      href: 'https://www.instagram.com/elias_victor__',
      accent: '#E1306C',
    },
  ];

  return (
    <>
      {/* STATEMENT */}
      <div className="statement-block border-t-4 border-white">
        <span className="text-white">LET'S BUILD </span>
        <span className="text-[var(--primary)]">SOMETHING</span>
        <br />
        <span className="text-[var(--accent)]">REAL</span>
        <span className="text-white">.</span>
      </div>

      {/* CONTACT SECTION */}
      <section
        id="contato"
        className="section-brutal"
        data-section="004 // CONTACT"
        ref={contactRef}
      >
        <div className={`transition-all duration-500 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionTimingFunction: 'steps(8)' }}
        >
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-16">
            {/* Left: Contact Links */}
            <div>
              <h2 className="font-brutal text-[clamp(2rem,5vw,4rem)] text-white mb-4 leading-[0.9]">
                GET IN <span className="text-[var(--primary)]">TOUCH</span>
              </h2>
              <p className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray)] mb-12">
                I DON'T BITE. UNLESS IT'S A BUG IN PRODUCTION.
              </p>

              <div className="space-y-0">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-6 border-b-[2px] border-white/10 hover:border-white/40 transition-none"
                  >
                    <div>
                      <div className="font-mono-brutal text-[10px] tracking-[3px] mb-2" style={{ color: link.accent }}>
                        {link.label}
                      </div>
                      <div className="text-sm text-[var(--gray-light)] group-hover:text-white transition-none">
                        {link.value}
                      </div>
                    </div>
                    <span className="font-brutal text-2xl text-[var(--gray)] group-hover:text-white group-hover:translate-x-2 transition-none inline-block">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Location + Availability */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="border-[3px] border-white p-8 mb-6 relative noise-overlay">
                  <div className="font-mono-brutal text-[10px] tracking-[3px] text-[var(--accent)] mb-4">
                    LOCATION
                  </div>
                  <div className="font-brutal text-2xl text-white leading-[0.9] mb-2">
                    MARINGÁ
                  </div>
                  <div className="font-mono-brutal text-xs text-[var(--gray)] tracking-[1px]">
                    PARANÁ, BRASIL
                  </div>
                  <div className="font-mono-brutal text-xs text-[var(--gray)] tracking-[1px] mt-4">
                    AVAILABLE FOR REMOTE WORK
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[var(--primary)]" />
                </div>

                <div className="border-[3px] border-[var(--accent)] p-8 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-3 h-3 bg-[var(--accent)] animate-blink" />
                    <span className="font-mono-brutal text-[10px] tracking-[3px] text-[var(--accent)]">
                      STATUS
                    </span>
                  </div>
                  <div className="font-brutal text-xl text-white leading-[0.9] mb-2">
                    OPEN FOR PROJECTS
                  </div>
                  <div className="font-mono-brutal text-xs text-[var(--gray)] tracking-[1px]">
                    MON — SAT // 08:00 — 22:00 BRT
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="font-mono-brutal text-xs text-[var(--gray)] tracking-[1px] leading-relaxed">
                  <span className="text-[var(--primary)]">$ </span>response_time: ~24h<br/>
                  <span className="text-[var(--primary)]">$ </span>preferred_contact: whatsapp<br/>
                  <span className="text-[var(--primary)]">$ </span>languages: pt-BR, en<br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;