/**
 * EFFECTS.JS
 * Interactive Narrative & Visual Glitch Layer
 */

export const initEffects = () => {
  if (typeof window === 'undefined') return;

  // 1. KEYWORD DETECTION (SECRET)
  let buffer = '';
  const keywords = {
    'system': () => {
      document.body.style.setProperty('--primary', '#00FF9F'); // Temporary color swap
      setTimeout(() => document.body.style.removeProperty('--primary'), 3000);
    },
    'override': () => {
      document.body.classList.add('system-override');
      setTimeout(() => document.body.classList.remove('system-override'), 1000);
    },
    'debug': () => {
      document.documentElement.classList.toggle('debug-grid-active');
    }
  };

  window.addEventListener('keydown', (e) => {
    if (e.key.length === 1) {
      buffer += e.key.toLowerCase();
      buffer = buffer.slice(-20); // Keep last 20 chars
      
      for (const key in keywords) {
        if (buffer.endsWith(key)) {
          keywords[key]();
          buffer = '';
        }
      }
    }
  });

  // 2. SCROLL TRIGGERED SYSTEM LOGS
  const logMessages = [
    "I build systems.",
    "Not interfaces.",
    "Zero excuses code.",
    "Connecting to database...",
    "Querying legacy Oracle...",
    "Optimizing PostgreSQL.",
    "Production ready.",
    "System stable."
  ];

  const logContainer = document.createElement('div');
  logContainer.className = 'system-log-container';
  document.body.appendChild(logContainer);

  let lastScrollY = window.scrollY;
  let logCooldown = false;

  const addLog = (msg) => {
    if (logCooldown) return;
    const logItem = document.createElement('div');
    logItem.className = 'system-log-item';
    logItem.textContent = `[SYS] ${msg}`;
    logContainer.appendChild(logItem);
    
    logCooldown = true;
    setTimeout(() => { logCooldown = false; }, 5000); // 5s cooldown between logs

    setTimeout(() => {
      logItem.style.opacity = '0';
      setTimeout(() => logItem.remove(), 500);
    }, 4000);
  };

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const diff = Math.abs(currentScrollY - lastScrollY);
    
    if (diff > 500) { // Every 500px scrolled
      const randomMsg = logMessages[Math.floor(Math.random() * logMessages.length)];
      addLog(randomMsg);
      lastScrollY = currentScrollY;
    }
  }, { passive: true });

  // 3. HOVER SECRET GLITCHES
  // Apply to all H1, H2, H3 and brutal cards
  const elements = document.querySelectorAll('h1, h2, h3, .card-brutal');
  elements.forEach(el => {
    el.addEventListener('mouseover', () => {
      el.classList.add('glitch-heavy');
    });

    // Special behavior for long hover (1s+)
    let hoverTimeout;
    el.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        el.style.color = '#00FF9F';
      }, 1000);
    });

    el.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      el.style.removeProperty('color');
    });
  });
};
