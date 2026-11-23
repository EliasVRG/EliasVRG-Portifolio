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
    pt: 'Desenvolvedor Full Stack · Maringá, PR · presencial, híbrido ou remoto',
    en: 'Full-stack developer · Maringá, PR · on-site, hybrid or remote',
  } satisfies L,
};

/** Título e descrição da aba acompanham o idioma escolhido. */
export const meta = {
  title: {
    pt: 'Elias Garcia — Integrações com ERPs, causa-raiz e sistemas logísticos',
    en: 'Elias Garcia — ERP integrations, root cause and logistics systems',
  } satisfies L,
  description: {
    pt: 'Desenvolvedor Full Stack em Maringá-PR. Responsável por integrações com ERPs (SAP, Senior Sapiens, Google Pub/Sub) em um ERP logístico: crio o padrão, a ferramenta e, quando quebra, mostro a evidência.',
    en: 'Full-stack developer based in Maringá, Brazil. I own ERP integrations (SAP, Senior Sapiens, Google Pub/Sub) in a logistics ERP: I set the standard, build the tooling and, when it breaks, show the evidence.',
  } satisfies L,
};

export const nav: { id: string; label: L }[] = [
  { id: 'casos', label: { pt: 'Casos', en: 'Cases' } },
  { id: 'experiencia', label: { pt: 'Experiência', en: 'Experience' } },
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
    pt: 'Assumo integrações com ERPs de ponta a ponta em sistemas logísticos: **crio o padrão, a ferramenta e, quando quebra, mostro a evidência** — em vez de trocar código no escuro.',
    en: 'I own ERP integrations end to end in logistics systems: **I set the standard, build the tooling and, when it breaks, show the evidence** — instead of swapping code in the dark.',
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
      pt: 'O outro lado garantia que a homologação era igual à produção — e, como em produção funcionava, o problema seria nosso. Não guardávamos quais requisições chegavam ao servidor para contestar. Ativei a **captura temporária de tudo o que chegava**, cruzei com o histórico do usuário e provei: a homologação deles nunca enviava a requisição.',
      en: 'The other side insisted their staging matched production — and since production worked, the problem had to be ours. We had no record of which requests actually reached our server. I turned on **temporary capture of everything coming in**, cross-checked it against the user\'s history and proved it: their staging never sent the request.',
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
      pt: 'Reprocessamento em integração com ERP',
      en: 'Reprocessing in an ERP integration',
    },
    action: {
      pt: 'Clientes relatavam duplicidade e lentidão. Com **análise de padrão nos logs** e no fluxo de reenvio, achei o gatilho: um campo específico da resposta que mandava reprocessar tudo de novo. Reestruturei a sincronização para tratar só o que estava de fato pendente.',
      en: 'Customers reported duplicates and slowness. With **pattern analysis on the logs** and the resend flow, I found the trigger: a specific response field that sent everything back for reprocessing. I restructured the sync to handle only what was actually pending.',
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
      pt: 'Chamado de status não atualizado no Pub/Sub',
      en: 'Pub/Sub "status not updated" ticket',
    },
    action: {
      pt: 'O chamado dizia que o status não atualizava, sem erro nenhum. Reconstruí a **linha do tempo pelos logs do container**, descartei o escopo inflado e achei a causa: um conflito operacional, não um bug. Chamado encerrado em horas, sem mexer em produção.',
      en: 'The ticket said the status wasn\'t updating, with no error at all. I rebuilt the **timeline from the container logs**, ruled out the inflated scope and found the cause: an operational conflict, not a bug. Ticket closed in hours, without touching production code.',
    },
    metric: {
      value: { pt: '0', en: '0' },
      caption: { pt: 'linhas de código alteradas', en: 'lines of code changed' },
    },
  },
  {
    no: '04',
    title: {
      pt: 'O gargalo que virou ferramenta',
      en: 'The bottleneck that became a tool',
    },
    tag: {
      pt: 'Configuração do Oracle em produção',
      en: 'Oracle configuration in production',
    },
    action: {
      pt: 'Criar tabelas, índices e componentes e liberá-los para os usuários dependia de poucas pessoas. Por iniciativa própria, criei um **console em Go com salvaguardas**: transação com rollback, modo de simulação, SQL de reversão gerado junto, bind em todos os valores, DDL só por lista de permissões e revisão antes de gravar.',
      en: 'Creating tables, indexes and components and releasing them to users depended on a handful of people. On my own initiative I built a **Go console with safeguards**: transactions with rollback, a dry-run mode, generated revert SQL, bound values everywhere, allow-listed DDL and a review step before writing.',
    },
    metric: {
      value: { pt: 'rollback', en: 'rollback' },
      caption: {
        pt: 'em toda alteração, com SQL de reversão gerado',
        en: 'on every change, with generated revert SQL',
      },
    },
  },
];

export type Job = {
  role: L;
  company: string;
  period: L;
  points: L[];
};

export const experience = {
  title: { pt: 'Experiência', en: 'Experience' } satisfies L,
  cv: {
    label: { pt: 'Baixar currículo (PDF) ↓', en: 'Download CV (PDF, Portuguese) ↓' } satisfies L,
    href: '/curriculo-elias-garcia.pdf',
  },
  jobs: [
    {
      role: { pt: 'Desenvolvedor Full Stack', en: 'Full-stack developer' },
      company: 'Vertti Tecnologia',
      period: { pt: 'set/2024 – atual', en: 'Sep 2024 – present' },
      points: [
        {
          pt: 'ERP logístico com **NestJS, PHP, React/TypeScript e Oracle SQL**, do banco à interface.',
          en: 'Logistics ERP built with **NestJS, PHP, React/TypeScript and Oracle SQL**, from database to UI.',
        },
        {
          pt: 'Responsável pelo **domínio de integrações** com ERPs e serviços externos (SAP, Senior Sapiens, Google Pub/Sub): padrão de retorno adotado pelo time, guia técnico e simulador de integrações.',
          en: 'Owner of the **integrations domain** with ERPs and external services (SAP, Senior Sapiens, Google Pub/Sub): a response standard the team adopted, a technical guide and an integration simulator.',
        },
        {
          pt: 'Módulo de log com **classificador de erros** que indica quem resolve cada falha (cliente, TI do cliente ou time interno) e permite o reenvio.',
          en: 'Logging module with an **error classifier** that says who fixes each failure (the customer, their IT or our team) and allows resending.',
        },
        {
          pt: 'Funcionalidades completas sozinho, do SQL à interface, com **testes unitários (Jest)**.',
          en: 'Complete features on my own, from SQL to UI, with **unit tests (Jest)**.',
        },
        {
          pt: 'Maior parte das **promoções de release** entre ambientes em 2026 e CI com GitHub Actions para sincronização entre ambientes.',
          en: 'Most of the **release promotions** across environments in 2026, plus GitHub Actions CI to keep environments in sync.',
        },
        {
          pt: '**Revisão de código** de 15 colegas, com orientação técnica a desenvolvedores menos experientes.',
          en: '**Code review** for 15 colleagues, with technical guidance for less experienced developers.',
        },
        {
          pt: 'Biblioteca compartilhada de logs em monorepo (Turborepo) com Redis e monitoramento de erros em produção com Bugsink.',
          en: 'Shared logging library in a monorepo (Turborepo) with Redis, and production error monitoring with Bugsink.',
        },
      ],
    },
    {
      role: { pt: 'Assistente de Desenvolvimento de Sistemas', en: 'Systems development assistant' },
      company: 'Transpanorama Transportes',
      period: { pt: 'fev/2024 – set/2024', en: 'Feb 2024 – Sep 2024' },
      points: [
        {
          pt: 'RPAs com Python e Selenium, APIs REST, servidores Linux com Nginx, dashboards de BI no Qlik Sense e consultas SQL.',
          en: 'RPAs with Python and Selenium, REST APIs, Linux servers with Nginx, BI dashboards in Qlik Sense and SQL queries.',
        },
      ],
    },
    {
      role: { pt: 'Assistente e Auxiliar de Logística', en: 'Logistics assistant' },
      company: 'Transpanorama Transportes',
      period: { pt: 'mar/2022 – jan/2024', en: 'Mar 2022 – Jan 2024' },
      points: [
        {
          pt: 'Emissão de CT-e e carta frete, programação de créditos, rotas e macros no ERP para a folha de pagamento — **a operação que hoje ajudo a automatizar**.',
          en: 'Issued CT-e (electronic waybills) and freight letters, scheduled credits and routes, and built ERP macros for payroll — **the operation I now help automate**.',
        },
      ],
    },
  ] satisfies Job[],
};

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
];

export const stack = {
  eyebrow: { pt: 'Stack em uso hoje', en: 'Stack in use today' } satisfies L,
  items: [
    'TypeScript',
    'PHP',
    'Go',
    'Python',
    'NestJS',
    'Node.js',
    'React',
    'Svelte 5',
    'Hono',
    'Flask',
    'Oracle SQL',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'D1',
    'R2',
    'IndexedDB',
    'Cloudflare Workers',
    'Google Pub/Sub',
    'SAP',
    'Senior Sapiens',
    'GitHub Actions',
    'Turborepo',
    'Jest',
    'Vitest',
    'Bugsink',
    'Linux',
    'Nginx',
  ],
  last: { pt: 'logging estruturado', en: 'structured logging' } satisfies L,
};

export const about = {
  title: { pt: 'Sobre', en: 'About' } satisfies L,
  paragraphs: [
    {
      pt: 'Antes de programar, trabalhei na operação de logística: emiti CT-e e carta frete e programei rotas e créditos de motoristas. Hoje desenvolvo um ERP para esse mesmo tipo de operação, e **conhecer o dia a dia de quem usa o sistema pesa nas decisões que tomo**.',
      en: 'Before I wrote code, I worked in logistics operations: issuing waybills and freight letters, planning routes and driver credits. Today I build an ERP for that same kind of operation, and **knowing the day-to-day of the people using it shapes my decisions**.',
    },
    {
      pt: 'Na Vertti, assumi o domínio de integrações: defini o padrão que o time segue, escrevi o guia e construí as ferramentas de diagnóstico. **Meu trabalho começa antes do código:** instrumentar, correlacionar e provar — porque em produção a parte difícil é descobrir onde o problema está, não escrever a correção.',
      en: 'At Vertti I took ownership of the integrations domain: I set the standard the team follows, wrote the guide and built the diagnostic tooling. **My work starts before the code:** instrument, correlate, prove — because in production the hard part is finding where the problem is, not writing the fix.',
    },
    {
      pt: 'Foi assim com uma integração ERP travada havia **três meses**, com um loop que reprocessava **33 mil registros por dia** e com um chamado de Pub/Sub que terminou **sem nenhuma alteração de código** — porque não havia bug, havia um conflito operacional.',
      en: 'That\'s how it went with an ERP integration stuck for **three months**, a loop reprocessing **33,000 records a day**, and a Pub/Sub ticket that ended **with no code change at all** — because there was no bug, there was an operational conflict.',
    },
    {
      pt: 'Nos projetos pessoais a régua é a mesma: sincronização offline que não perde dado quando dois aparelhos editam a mesma coisa, imagem validada antes de entrar no pipeline, testes antes de publicar. Uso IA no desenvolvimento (Claude Code) com regras de projeto que defini para o time.',
      en: 'The same bar applies to my own projects: offline sync that doesn\'t lose data when two devices edit the same thing, images validated before they enter the pipeline, tests before publishing. I use AI in development (Claude Code) with project rules I wrote for the team.',
    },
  ] satisfies L[],
  facts: [
    {
      label: { pt: 'Experiência', en: 'Experience' },
      value: { pt: 'quase 3 anos em produção', en: 'almost 3 yrs in production' },
    },
    {
      label: { pt: 'Base', en: 'Based in' },
      value: { pt: 'Maringá, PR — BR', en: 'Maringá, PR — BR' },
    },
    {
      label: { pt: 'Modelo', en: 'Work' },
      value: { pt: 'Presencial · híbrido · remoto', en: 'On-site · hybrid · remote' },
    },
    { label: { pt: 'Idiomas', en: 'Languages' }, value: { pt: 'pt-BR · EN (leitura técnica)', en: 'pt-BR · EN (technical reading)' } },
    {
      label: { pt: 'Open source', en: 'Open source' },
      value: { pt: 'img-sanitizer · ★5', en: 'img-sanitizer · ★5' },
    },
    { label: { pt: 'Resposta', en: 'Reply' }, value: { pt: '~24h', en: '~24h' } },
  ] satisfies { label: L; value: L }[],
};

export const contact = {
  eyebrow: { pt: 'Contato', en: 'Contact' } satisfies L,
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
