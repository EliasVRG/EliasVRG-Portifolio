import myLibraryShot from '../assets/my-library.png';
import type { L } from '../i18n/context';

/**
 * Todo o conteúdo do portfólio vive aqui, nos dois idiomas.
 * Trechos entre **asteriscos** saem em destaque na página (ver components/Rich.tsx).
 */

export const identity = {
  name: 'Elias Victor Rocha Garcia',
  shortName: 'Elias Garcia',
  location: 'Maringá, PR — BR',
  github: 'https://github.com/EliasVRG',
  eyebrow: {
    pt: 'Desenvolvedor de sistemas · Maringá, PR · remoto',
    en: 'Systems developer · Maringá, PR · remote',
  } satisfies L,
};

/** Título e descrição da aba acompanham o idioma escolhido. */
export const meta = {
  title: {
    pt: 'Elias Garcia — Integrações, causa-raiz e arquitetura de sistemas',
    en: 'Elias Garcia — Integrations, root cause and systems architecture',
  } satisfies L,
  description: {
    pt: 'Desenvolvedor de sistemas em Maringá-PR. Integrações corporativas, análise de causa-raiz e arquitetura: instrumentar, correlacionar e mostrar a evidência.',
    en: 'Systems developer based in Maringá, Brazil. Enterprise integrations, root-cause analysis and architecture: instrument, correlate and show the evidence.',
  } satisfies L,
};

export const nav: { id: string; label: L }[] = [
  { id: 'casos', label: { pt: 'Casos', en: 'Cases' } },
  { id: 'projetos', label: { pt: 'Projetos', en: 'Projects' } },
  { id: 'stack', label: { pt: 'Stack', en: 'Stack' } },
  { id: 'sobre', label: { pt: 'Sobre', en: 'About' } },
  { id: 'contato', label: { pt: 'Contato', en: 'Contact' } },
];

export const hero = {
  /** A última linha recebe o tratamento vazado. */
  headline: {
    pt: ['Eu acho', 'o que os outros', 'não acham'],
    en: ['I find', 'what others', 'miss'],
  },
  sub: {
    pt: 'Integrações corporativas, causa-raiz e arquitetura de sistemas. **Instrumento, correlaciono e mostro a evidência** — em vez de trocar código no escuro.',
    en: 'Enterprise integrations, root cause and systems architecture. **I instrument, correlate and show the evidence** — instead of swapping code in the dark.',
  } satisfies L,
};

export const photos = {
  portrait: {
    /** Basta colocar o arquivo em public/ — sem isso, o slot mostra a moldura. */
    src: '/elias-retrato.jpeg',
    file: 'public/elias-retrato.jpeg',
    /** A proporção do slot acompanha a da foto, para não cortar o rosto. */
    ratio: '1 / 1',
    focus: 'center',
    spec: '1:1',
    alt: { pt: 'Elias Garcia', en: 'Elias Garcia' } satisfies L,
    hint: { pt: 'Seu retrato', en: 'Your portrait' } satisfies L,
  },
  working: {
    src: '/elias-trabalho.jpeg',
    file: 'public/elias-trabalho.jpeg',
    ratio: '4 / 5',
    focus: 'center 25%',
    spec: '4:5',
    alt: {
      pt: 'Elias Garcia trabalhando',
      en: 'Elias Garcia at work',
    } satisfies L,
    hint: { pt: 'Foto 2 — você trabalhando', en: 'Photo 2 — you at work' } satisfies L,
  },
};

export const casesIntro = {
  eyebrow: {
    pt: 'Em produção · sistemas não identificados',
    en: 'In production · systems unnamed',
  } satisfies L,
  title: {
    pt: 'O problema quase nunca está onde o chamado diz que está.',
    en: 'The problem is almost never where the ticket says it is.',
  } satisfies L,
};

export type Case = {
  no: string;
  title: L;
  tag: L;
  action: L;
  metric: { value: L; caption: L };
};

export const cases: Case[] = [
  {
    no: '01',
    title: {
      pt: 'Três meses de "é do outro lado"',
      en: 'Three months of "it\'s the other side"',
    },
    tag: {
      pt: 'Integração ERP ↔ sistema externo',
      en: 'ERP ↔ external system integration',
    },
    action: {
      pt: 'Instrumentei o fluxo com **logging estruturado e correlationId** ponta a ponta. Com as duas pontas correlacionáveis, o ponto da perda apareceu no primeiro dia de tráfego real — e a correção foi pontual, sem reescrever a integração.',
      en: 'I instrumented the flow with **structured logging and a correlationId** end to end. Once both ends could be correlated, the point of loss showed up on the first day of real traffic — and the fix was targeted, with no rewrite.',
    },
    metric: {
      value: { pt: '3 meses → dias', en: '3 months → days' },
      caption: {
        pt: 'até a causa-raiz, com evidência',
        en: 'to root cause, with evidence',
      },
    },
  },
  {
    no: '02',
    title: {
      pt: 'O loop que ninguém assumia',
      en: 'The loop nobody owned',
    },
    tag: {
      pt: 'Gravações sem origem conhecida',
      en: 'Writes from an unknown source',
    },
    action: {
      pt: '**Análise de padrão nos logs** — horário, intervalo e repetição de payload. O espaçamento constante entre as gravações entregou o gatilho: um evento que reenfileirava a si mesmo a cada processamento.',
      en: '**Pattern analysis on the logs** — timestamps, intervals and payload repetition. The constant spacing between writes gave away the trigger: an event re-enqueuing itself on every pass.',
    },
    metric: {
      value: { pt: '33.000 → 0', en: '33,000 → 0' },
      caption: { pt: 'registros por dia', en: 'records per day' },
    },
  },
  {
    no: '03',
    title: {
      pt: 'O bug que não existia',
      en: "The bug that wasn't",
    },
    tag: {
      pt: 'Chamado de perda de mensagens no pub/sub',
      en: 'Pub/sub message-loss ticket',
    },
    action: {
      pt: 'Reproduzi o cenário e reconstruí a **linha do tempo pelos logs dos dois lados**. Todas as mensagens chegavam: o consumidor filtrava por um campo que vinha vazio da origem. O ajuste foi no dado, não no código.',
      en: 'I reproduced the scenario and rebuilt the **timeline from logs on both sides**. Every message arrived: the consumer filtered on a field that came in empty from the source. The fix went into the data, not the code.',
    },
    metric: {
      value: { pt: '0', en: '0' },
      caption: { pt: 'linhas de código alteradas', en: 'lines of code changed' },
    },
  },
];

export type Project = {
  id: string;
  name: string;
  featured?: boolean;
  lead: L;
  deep?: L;
  tags: string[];
  links: { label: L; href: string; muted?: boolean }[];
  art:
    | { kind: 'screenshot'; src: string; alt: L }
    | { kind: 'wordmark'; caption: string; tint: string; ink: string };
};

export const projects: Project[] = [
  {
    id: 'my-library',
    name: 'my-library',
    featured: true,
    lead: {
      pt: 'Biblioteca pessoal de PDFs: o leitor lembra a página, cada livro tem resenha e tudo sincroniza entre aparelhos mesmo depois de horas offline.',
      en: 'A personal PDF library: the reader remembers your page, every book has a review and everything syncs across devices even after hours offline.',
    },
    deep: {
      pt: 'Resolução de conflito **campo a campo**, com timestamp por aparelho — dois dispositivos editando o mesmo livro não se sobrescrevem. Upload multipart com retomada.',
      en: '**Field-level** conflict resolution with a per-device timestamp — two devices editing the same book don\'t overwrite each other. Resumable multipart upload.',
    },
    tags: ['Svelte 5', 'Hono', 'Cloudflare Workers', 'D1', 'R2', 'IndexedDB', 'Vitest'],
    links: [
      {
        label: { pt: 'Demo ao vivo ↗', en: 'Live demo ↗' },
        href: 'https://my-library-demo.eliasvictor2452.workers.dev/',
      },
      { label: { pt: 'GitHub ↗', en: 'GitHub ↗' }, href: 'https://github.com/EliasVRG/my-library' },
    ],
    art: {
      kind: 'screenshot',
      src: myLibraryShot,
      alt: {
        pt: 'Tela do my-library: a estante com oito livros, progresso de leitura por página e filtros por categoria.',
        en: 'The my-library screen: a shelf of eight books with per-page reading progress and category filters.',
      },
    },
  },
  {
    id: 'lead-hunter',
    name: 'lead-hunter',
    lead: {
      pt: 'Encontra vagas freelance publicadas, mede a compatibilidade com o currículo e escreve o rascunho da proposta. Nada sai sozinho: você revisa e envia.',
      en: 'Finds published freelance jobs, scores how well each matches the CV and drafts the proposal. Nothing goes out on its own: you review and send.',
    },
    deep: {
      pt: 'Uma fila por estágio, para dar para ver onde o trabalho parou. **Filtro determinístico antes da IA**, score recalculado pelo sistema, parsers testados contra fixtures reais e agendador idempotente. Custo de operação: zero.',
      en: 'One queue per stage, so you can see where work is stuck. **Deterministic filter before the AI**, score recomputed by the system, parsers tested against real fixtures and an idempotent scheduler. Operating cost: zero.',
    },
    tags: ['TypeScript', 'Fastify', 'BullMQ', 'Redis', 'Cheerio', 'OpenRouter', 'Vitest'],
    links: [
      { label: { pt: 'GitHub ↗', en: 'GitHub ↗' }, href: 'https://github.com/EliasVRG/lead-hunter' },
    ],
    art: {
      kind: 'wordmark',
      caption: 'discovery → triage → proposal',
      tint: '#F0EEFA',
      ink: '#36307A',
    },
  },
  {
    id: 'img-sanitizer',
    name: 'img-sanitizer',
    lead: {
      pt: 'Biblioteca open source que valida, repara e normaliza imagens vindas de fontes não confiáveis antes de entrarem no pipeline do backend.',
      en: 'An open-source library that validates, repairs and normalizes images from untrusted sources before they enter the backend pipeline.',
    },
    deep: {
      pt: 'Buffer que não é imagem, base64 sujo, arquivo truncado, MIME mentindo, data URI colado no meio da string — **tudo tratado antes de quebrar silenciosamente no frontend**.',
      en: 'A buffer that isn\'t an image, dirty base64, a truncated file, a lying MIME type, a data URI pasted mid-string — **all handled before they fail silently on the frontend**.',
    },
    tags: ['TypeScript', 'Node ≥18', 'CI'],
    links: [
      { label: { pt: 'npm ↗', en: 'npm ↗' }, href: 'https://www.npmjs.com/package/img-sanitizer' },
      {
        label: { pt: 'GitHub ↗', en: 'GitHub ↗' },
        href: 'https://github.com/EliasVRG/img-sanitizer',
      },
      {
        label: { pt: '★ 5', en: '★ 5' },
        href: 'https://github.com/EliasVRG/img-sanitizer/stargazers',
        muted: true,
      },
    ],
    art: { kind: 'wordmark', caption: '★ 5 · npm · MIT', tint: '#FAF2E4', ink: '#6A4A12' },
  },
  {
    id: 'web-perf-monitor',
    name: 'web-perf-monitor',
    lead: {
      pt: 'Monitora performance e postura de segurança de várias URLs e correlaciona as duas coisas em incidentes acionáveis.',
      en: 'Monitors performance and security posture across many URLs and correlates both into actionable incidents.',
    },
    deep: {
      pt: 'Core Web Vitals via Playwright, varredura passiva de cabeçalhos e **baselines estatísticas de 2h e 7d** para detectar anomalia — com alerta que já sugere a causa provável.',
      en: 'Core Web Vitals via Playwright, passive header scanning and **2h and 7d statistical baselines** for anomaly detection — with alerts that already suggest a likely cause.',
    },
    tags: ['Python', 'Playwright', 'Clean Architecture'],
    links: [
      {
        label: { pt: 'GitHub ↗', en: 'GitHub ↗' },
        href: 'https://github.com/EliasVRG/web-perf-monitor',
      },
    ],
    art: {
      kind: 'wordmark',
      caption: 'core web vitals + incidentes',
      tint: '#EDEFF2',
      ink: '#30353C',
    },
  },
];

export const stack = {
  eyebrow: { pt: 'Stack em uso hoje', en: 'Stack in use today' } satisfies L,
  items: [
    'TypeScript',
    'Python',
    'PHP',
    'SQL',
    'Node.js',
    'Fastify',
    'Hono',
    'Flask',
    'Laravel',
    'React',
    'Svelte 5',
    'Tailwind',
    'PostgreSQL',
    'Oracle',
    'MySQL',
    'Redis',
    'BullMQ',
    'D1',
    'R2',
    'IndexedDB',
    'Cloudflare Workers',
    'Docker',
    'Vercel',
    'Vitest',
    'Playwright',
    'Cheerio',
  ],
  last: { pt: 'logging estruturado', en: 'structured logging' } satisfies L,
};

export const about = {
  title: { pt: 'Sobre', en: 'About' } satisfies L,
  paragraphs: [
    {
      pt: 'Trabalho com integrações corporativas e sistemas que já estão rodando. **Meu trabalho começa antes do código:** instrumentar, correlacionar e provar — porque em produção a parte difícil é descobrir onde o problema está, não escrever a correção.',
      en: 'I work on enterprise integrations and systems that are already running. **My work starts before the code:** instrument, correlate, prove — because in production the hard part is finding where the problem is, not writing the fix.',
    },
    {
      pt: 'Foi assim com uma integração ERP havia **três meses** em disputa entre duas equipes, com um loop que gravava **33 mil registros por dia** sem dono e com um chamado de pub/sub que terminou **sem nenhuma alteração de código** — porque não havia bug, havia um contrato de dado quebrado.',
      en: 'That\'s how it went with an ERP integration two teams had been blaming each other for over **three months**, a loop writing **33,000 records a day** with no owner, and a pub/sub ticket that ended **with no code change at all** — because there was no bug, there was a broken data contract.',
    },
    {
      pt: 'Nos projetos pessoais a régua é a mesma: fila por estágio para enxergar onde o trabalho parou, filtro determinístico antes de gastar IA, parser testado contra fixture real, agendador que pode rodar duas vezes sem estragar nada.',
      en: 'The same bar applies to my own projects: one queue per stage so you can see where work stopped, a deterministic filter before spending AI, parsers tested against real fixtures, a scheduler that can run twice without breaking anything.',
    },
  ] satisfies L[],
  facts: [
    {
      label: { pt: 'Experiência', en: 'Experience' },
      value: { pt: '3+ anos em produção', en: '3+ yrs in production' },
    },
    {
      label: { pt: 'Base', en: 'Based in' },
      value: { pt: 'Maringá, PR — BR', en: 'Maringá, PR — BR' },
    },
    { label: { pt: 'Modelo', en: 'Work' }, value: { pt: 'Remoto', en: 'Remote' } },
    { label: { pt: 'Idiomas', en: 'Languages' }, value: { pt: 'pt-BR · EN', en: 'pt-BR · EN' } },
    {
      label: { pt: 'Open source', en: 'Open source' },
      value: { pt: 'img-sanitizer · ★5', en: 'img-sanitizer · ★5' },
    },
    { label: { pt: 'Resposta', en: 'Reply' }, value: { pt: '~24h', en: '~24h' } },
  ] satisfies { label: L; value: L }[],
};

export const contact = {
  eyebrow: { pt: 'Aberto a propostas', en: 'Open to work' } satisfies L,
  title: { pt: 'Vamos conversar.', en: "Let's talk." } satisfies L,
  links: [
    { who: 'WhatsApp', value: '+55 44 99710-8065', href: 'https://wa.me/5544997108065' },
    { who: 'E-mail', value: 'eliasvictor2452@gmail.com', href: 'mailto:eliasvictor2452@gmail.com' },
    { who: 'GitHub', value: 'github.com/EliasVRG', href: 'https://github.com/EliasVRG' },
    {
      who: 'LinkedIn',
      value: 'Elias Victor Rocha Garcia',
      href: 'https://www.linkedin.com/in/elias-victor-rocha-garcia-00243521b/',
    },
  ],
};
