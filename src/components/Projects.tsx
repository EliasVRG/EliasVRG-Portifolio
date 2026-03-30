import projectPreview from '../assets/project-preview-1.jpg';
import projectPreview2 from '../assets/project-preview-2.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'LOADSTAY',
      subtitle: 'SaaS PLATFORM',
      description: 'Full SaaS for stay management. Subscription plans, document handling, advanced filters, admin panel. Replaced spreadsheets for real businesses.',
      image: projectPreview,
      tags: ['React.js', 'TypeScript', 'PHP', 'Laravel', 'PostgreSQL', 'Stripe', 'Tailwind'],
      type: 'PERSONAL',
      featured: true,
      number: '01',
    },
    {
      title: 'REUNION',
      subtitle: 'AUTOMATION ENGINE',
      description: 'WhatsApp + Google Calendar integration. Auto-scheduling, event creation via messages, webhook sync. Deployed on Vercel with cron jobs. Zero manual intervention.',
      image: projectPreview2,
      tags: ['Python', 'Flask', 'Google Calendar API', 'WhatsApp Cloud API', 'Docker'],
      type: 'PERSONAL',
      featured: true,
      number: '02',
    },
    {
      title: 'RPA // ICMS',
      subtitle: 'ROBOTIC PROCESS AUTOMATION',
      description: 'Automated ICMS tax guide reading from monitored directories. Structured data injection into enterprise ERP. Eliminated manual errors entirely.',
      tags: ['Python', 'Pandas', 'Openpyxl', 'PyAutoGUI'],
      type: 'ENTERPRISE',
      company: 'TRANSPANORAMA',
      number: '03',
    },
    {
      title: 'RPA // BILLING',
      subtitle: 'FINANCIAL AUTOMATION',
      description: 'End-to-end billing automation. Scrapes payables, injects into system, generates reports, sends via email. Replaced 3 manual processes.',
      tags: ['Python', 'Playwright', 'Pandas', 'Smtplib'],
      type: 'ENTERPRISE',
      company: 'TRANSPANORAMA',
      number: '04',
    },
    {
      title: 'CARGO TRACKER',
      subtitle: 'LOGISTICS PLATFORM',
      description: 'Real-time shipment tracking for transport clients. Incident management, plate monitoring, delivery status. Built for transparency at scale.',
      tags: ['Python', 'Flask', 'MySQL', 'Bootstrap', 'REST API'],
      type: 'ENTERPRISE',
      company: 'TRANSPANORAMA',
      number: '05',
    },
  ];

  return (
    <>
      {/* STATEMENT */}
      <div className="statement-block border-t-4 border-white">
        <span className="text-white">SYSTEMS </span>
        <span className="text-[var(--primary)]">&gt;</span>
        <span className="text-white"> INTERFACES.</span>
      </div>

      {/* PROJECTS SECTION */}
      <section
        id="projetos"
        className="section-brutal"
        data-section="003 // PROJECTS"
        ref={projectsRef}
      >
        <div className={`transition-all duration-500 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionTimingFunction: 'steps(8)' }}
        >
          <h2 className="font-brutal text-[clamp(2rem,5vw,4rem)] text-white mb-4 leading-[0.9]">
            THINGS I <span className="text-[var(--primary)]">BUILT</span>
          </h2>
          <p className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray)] mb-16">
            REAL PROJECTS. REAL USERS. REAL IMPACT.
          </p>

          {/* FEATURED PROJECTS — large cards */}
          <div className="space-y-0">
            {projects.filter(p => p.featured).map((project) => (
              <div
                key={project.number}
                className="border-b-[3px] border-white/20 py-12 group hover:bg-white/[0.02] transition-none relative"
              >
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
                  {/* Left: Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono-brutal text-xs text-[var(--gray)] tracking-[2px]">
                        {project.number}
                      </span>
                      <span className="font-mono-brutal text-[10px] tracking-[2px] border border-[var(--primary)] text-[var(--primary)] px-2 py-0.5">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="font-brutal text-[clamp(1.5rem,4vw,3rem)] text-white leading-[0.9] mb-2 group-hover:text-[var(--primary)] transition-none">
                      {project.title}
                    </h3>
                    <div className="font-mono-brutal text-xs tracking-[2px] text-[var(--accent)] mb-6">
                      {project.subtitle}
                    </div>

                    <p className="text-sm text-[var(--gray-light)] leading-[1.8] max-w-md mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-brutal text-[10px] tracking-[1px] border border-white/20 px-2 py-1 text-[var(--gray)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Image */}
                  {project.image && (
                    <div className="relative overflow-hidden border-[3px] border-white/20 group-hover:border-[var(--primary)] transition-none">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[250px] md:h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        style={{ transitionTimingFunction: 'steps(6)' }}
                      />
                      <div className="absolute inset-0 bg-[var(--bg)]/30 group-hover:bg-transparent transition-none" />
                      
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-8 h-8 border-b-[3px] border-l-[3px] border-[var(--primary)] opacity-0 group-hover:opacity-100 transition-none" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-t-[3px] border-r-[3px] border-[var(--primary)] opacity-0 group-hover:opacity-100 transition-none" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* OTHER PROJECTS — dense list */}
          <div className="mt-16">
            <div className="font-mono-brutal text-xs tracking-[2px] text-[var(--gray)] mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[var(--accent)] inline-block" />
              ENTERPRISE WORK @ TRANSPANORAMA
            </div>

            <div className="grid md:grid-cols-3 gap-0">
              {projects.filter(p => !p.featured).map((project) => (
                <div
                  key={project.number}
                  className="card-brutal"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-brutal text-xs text-[var(--gray)] tracking-[2px]">
                      {project.number}
                    </span>
                    {project.company && (
                      <span className="font-mono-brutal text-[10px] tracking-[1px] text-[var(--accent)]">
                        @ {project.company}
                      </span>
                    )}
                  </div>

                  <h3 className="font-brutal text-xl text-white mb-2 leading-[0.9]">
                    {project.title}
                  </h3>
                  <div className="font-mono-brutal text-[10px] tracking-[2px] text-[var(--accent)] mb-4">
                    {project.subtitle}
                  </div>

                  <p className="text-xs text-[var(--gray-light)] leading-[1.7] mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-brutal text-[9px] tracking-[1px] text-[var(--gray)] border-b border-white/10 px-1 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="mt-16 flex items-center gap-6">
            <a
              href="https://github.com/EliasVRG?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[3px] border-white px-8 py-3 font-mono-brutal text-sm font-bold tracking-[2px] text-white hover:bg-white hover:text-black transition-none inline-block"
            >
              ALL REPOS ON GITHUB ↗
            </a>
            <span className="font-mono-brutal text-xs text-[var(--gray)] tracking-[1px] hidden md:inline">
              // MORE WORK AVAILABLE
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;