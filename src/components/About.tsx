import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  const skills = [
    { name: 'PHP', category: 'BACKEND' },
    { name: 'PYTHON', category: 'BACKEND' },
    { name: 'FLASK', category: 'FRAMEWORK' },
    { name: 'DJANGO', category: 'FRAMEWORK' },
    { name: 'REACT', category: 'FRONTEND' },
    { name: 'JAVASCRIPT', category: 'LANGUAGE' },
    { name: 'TYPESCRIPT', category: 'LANGUAGE' },
    { name: 'NODE.JS', category: 'RUNTIME' },
    { name: 'ORACLE', category: 'DATABASE' },
    { name: 'POSTGRESQL', category: 'DATABASE' },
    { name: 'MYSQL', category: 'DATABASE' },
    { name: 'TAILWIND', category: 'STYLING' },
    { name: 'BOOTSTRAP', category: 'STYLING' },
    { name: 'SASS', category: 'STYLING' },
    { name: 'DOCKER', category: 'DEVOPS' },
    { name: 'GIT', category: 'TOOLING' },
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="sobre"
        className="section-brutal noise-overlay"
        data-section="001 // ABOUT"
        ref={aboutRef}
      >
        <div className={`max-w-4xl transition-all duration-500 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionTimingFunction: 'steps(8)' }}
        >
          {/* Section Title */}
          <h2 className="font-brutal text-[clamp(2rem,5vw,4rem)] text-white mb-12 leading-[0.9]">
            NOT A <span className="text-[var(--primary)]">DEVELOPER</span>.<br />
            A PROBLEM <span className="text-[var(--accent)]">SOLVER</span>.
          </h2>

          {/* Manifesto */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-base text-[var(--gray-light)] leading-[1.8] font-light">
                <span className="text-white font-bold">2+ years writing code that runs in production.</span> Not 
                tutorials. Not toy projects. Real systems, handling real data, under real pressure.
              </p>
              <p className="text-base text-[var(--gray-light)] leading-[1.8] font-light">
                I work across the full stack — from{' '}
                <span className="text-[var(--accent)] font-medium">Oracle and PostgreSQL</span> queries that don't choke, to{' '}
                <span className="text-[var(--primary)] font-medium">React</span> interfaces that actually make sense.
              </p>
              <p className="text-base text-[var(--gray-light)] leading-[1.8] font-light">
                Built RPAs that replaced entire manual workflows.{' '}
                Shipped ERPs that companies depend on daily.{' '}
                <span className="text-white font-bold">Clean code is table stakes. I deliver systems.</span>
              </p>
            </div>

            <div className="space-y-4">
              {/* Stats blocks */}
              <div className="border-l-4 border-[var(--primary)] pl-6 py-3">
                <div className="font-brutal text-4xl text-[var(--primary)]">2+</div>
                <div className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray)] mt-1">YEARS IN PRODUCTION</div>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-6 py-3">
                <div className="font-brutal text-4xl text-[var(--accent)]">15+</div>
                <div className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray)] mt-1">PROJECTS SHIPPED</div>
              </div>
              <div className="border-l-4 border-white pl-6 py-3">
                <div className="font-brutal text-4xl text-white">10+</div>
                <div className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray)] mt-1">TECHNOLOGIES MASTERED</div>
              </div>
              <div className="border-l-4 border-[var(--danger,#FF3333)] pl-6 py-3">
                <div className="font-brutal text-4xl text-[#FF3333]">0</div>
                <div className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray)] mt-1">TOLERANCE FOR BULLSHIT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT DIVIDER */}
      <div className="statement-block border-t-4 border-white">
        <span className="text-white">I DON'T </span>
        <span className="text-[var(--primary)]">GUESS</span>
        <span className="text-white">.</span>
        <br />
        <span className="text-white">I </span>
        <span className="text-[var(--accent)]">ENGINEER</span>
        <span className="text-white">.</span>
      </div>

      {/* STACK SECTION */}
      <section
        id="stack"
        className="section-brutal"
        data-section="002 // STACK"
      >
        <h2 className="font-brutal text-[clamp(2rem,5vw,4rem)] text-white mb-4 leading-[0.9]">
          TOOLS I <span className="text-[var(--primary)]">TRUST</span>
        </h2>
        <p className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray)] mb-12">
          BATTLE-TESTED TECHNOLOGIES. NOT HYPE-DRIVEN CHOICES.
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="tag-brutal group relative">
              <span>{skill.name}</span>
              <span className="absolute -top-2 -right-2 font-mono-brutal text-[8px] bg-[var(--bg)] text-[var(--gray)] px-1 opacity-0 group-hover:opacity-100 transition-none pointer-events-none">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;