const Footer = () => {
  return (
    <footer className="border-t-4 border-white bg-[var(--bg)]">
      {/* Marquee */}
      <div className="overflow-hidden border-b-[3px] border-white/10 py-4">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="font-brutal text-[clamp(1rem,2vw,1.5rem)] text-white/10 whitespace-nowrap mr-12"
            >
              SYSTEMS OVER INTERFACES • CLEAN CODE IS TABLE STAKES • BUILD WHAT MATTERS • SHIP OR SHUT UP • AUTOMATE EVERYTHING • ZERO TOLERANCE FOR BROKEN DEPLOYS •{' '}
            </span>
          ))}
        </div>
      </div>

      <div className="px-[5vw] py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left */}
          <div>
            <div className="font-mono-brutal text-sm font-bold tracking-[3px] text-white mb-2">
              ELIAS<span className="text-[var(--primary)]"> //</span> DEV
            </div>
            <div className="font-mono-brutal text-xs text-[var(--gray)] tracking-[1px]">
              © {new Date().getFullYear()} ELIAS VICTOR ROCHA GARCIA
            </div>
          </div>

          {/* Right */}
          <div className="font-mono-brutal text-xs text-[var(--gray)] tracking-[1px] text-right">
            <div>
              BUILT WITH <span className="text-[var(--primary)]">REACT</span> + <span className="text-[var(--accent)]">TYPESCRIPT</span> + <span className="text-white">VITE</span>
            </div>
            <div className="mt-1">
              DESIGNED TO <span className="text-[var(--primary)]">INTIMIDATE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;