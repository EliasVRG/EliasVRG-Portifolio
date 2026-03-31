/**
 * TERMINAL.JS
 * Command Line Interface Logic
 */

class PortfolioTerminal {
  constructor() {
    this.history = [];
    this.historyIndex = -1;
    this.active = false;
    this.commands = {
      'whoami': () => "Elias Victor Rocha Garcia. Systems Engineer & Full Stack Developer. I build systems that don't break in production.",
      'stack': () => "React, TypeScript, PHP, Python, Oracle, PostgreSQL, Docker, RPA (Python/Selenium).",
      'projetos': () => {
        window.history.pushState(null, '', '#projetos');
        document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
        return "Navigating to projects section...";
      },
      'projects': () => {
        window.history.pushState(null, '', '#projetos');
        document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
        return "Navigating to projects section...";
      },
      'contato': () => {
        window.history.pushState(null, '', '#contato');
        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
        return "Navigating to contact section...";
      },
      'contact': () => {
        window.history.pushState(null, '', '#contato');
        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
        return "Navigating to contact section...";
      },
      'stack': () => {
        window.history.pushState(null, '', '#stack');
        document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
        return "Navigating to tech stack section...";
      },
      'open portfolio': () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return "Reloading hero view... Connection stable.";
      },
      'clear': () => {
        this.content.innerHTML = '';
        return '';
      },
      'help': () => "Available: whoami, stack, projects, contact, clear, open portfolio, mode hacker",
      'mode hacker': () => {
        document.documentElement.classList.toggle('cursor-hacker');
        document.querySelector('.custom-cursor')?.classList.toggle('hacker');
        return "Hacker mode toggled. Visual override active.";
      }
    };

    this.createUI();
    this.setupListeners();
  }

  createUI() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'terminal-overlay';
    this.overlay.innerHTML = `
      <div id="terminal-content"></div>
      <div id="terminal-input-wrapper">
        <span id="terminal-prompt">[SYS] eliasVRG@portfolio:~$</span>
        <input type="text" id="terminal-input" autocomplete="off" spellcheck="false" />
      </div>
    `;
    document.body.appendChild(this.overlay);
    this.content = this.overlay.querySelector('#terminal-content');
    this.input = this.overlay.querySelector('#terminal-input');

    this.writeLine("Portfolio Terminal [Version 1.0.4-BRUTAL]");
    this.writeLine("Connecting to system... OK.");
    this.writeLine("Type 'help' for available commands.");
  }

  setupListeners() {
    // Toggle terminal
    window.addEventListener('keydown', (e) => {
      if (e.key === '`' || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault();
        this.toggle();
      }

      if (this.active && e.key === 'Escape') {
        this.toggle();
      }
    });

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim().toLowerCase();
        this.execute(cmd);
        this.input.value = '';
      } else if (e.key === 'ArrowUp') {
        this.historyIndex = Math.min(this.historyIndex + 1, this.history.length - 1);
        if (this.historyIndex >= 0) {
          this.input.value = this.history[this.history.length - 1 - this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        this.historyIndex = Math.max(this.historyIndex - 1, -1);
        this.input.value = this.historyIndex >= 0 ? this.history[this.history.length - 1 - this.historyIndex] : '';
      } else if (e.key === 'Tab') {
        e.preventDefault();
        this.autocomplete();
      }
    });

    // Keep focus on input
    this.overlay.addEventListener('click', () => this.input.focus());
  }

  toggle() {
    this.active = !this.active;
    this.overlay.classList.toggle('active', this.active);
    if (this.active) {
      this.input.focus();
    }
  }

  execute(cmd) {
    if (!cmd) return;
    this.history.push(cmd);
    this.historyIndex = -1;
    this.writeLine(`> ${cmd}`, 'cmd');

    const response = this.commands[cmd] ? this.commands[cmd]() : `Command not found: ${cmd}. Type 'help' for list.`;
    if (response) {
      this.writeLine(response, 'res');
    }

    if (cmd === 'clear') return;

    // Auto-scroll
    this.content.scrollTop = this.content.scrollHeight;
  }

  writeLine(text, type = 'info') {
    const line = document.createElement('div');
    line.className = `terminal-line l-${type}`;
    this.content.appendChild(line);

    // Typing animation for responses
    if (type === 'res') {
      let i = 0;
      const speed = 20;
      const animateText = () => {
        if (i < text.length) {
          line.textContent += text.charAt(i);
          i++;
          setTimeout(animateText, speed);
          this.content.scrollTop = this.content.scrollHeight;
        }
      };
      animateText();
    } else {
      line.textContent = text;
    }
  }

  autocomplete() {
    const current = this.input.value.toLowerCase();
    const matches = Object.keys(this.commands).filter(c => c.startsWith(current));
    if (matches.length === 1) {
      this.input.value = matches[0];
    }
  }
}

export const initTerminal = () => {
  if (typeof window === 'undefined') return;
  new PortfolioTerminal();
};
