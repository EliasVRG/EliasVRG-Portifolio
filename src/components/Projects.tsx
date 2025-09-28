import { ExternalLink, Github, Star, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import projectPreview from '../assets/project-preview-1.jpg';
import projectPreview2 from '../assets/project-preview-2.jpg';

const Projects = () => {
  const projects = [
    // {
    //   title: 'E-commerce Moderno',
    //   description: 'Plataforma completa de e-commerce desenvolvida com React.js e Python Django. Sistema de pagamentos, gestão de produtos e painel administrativo.',
    //   image: projectPreview,
    //   tags: ['React.js', 'Python', 'Django', 'PostgreSQL', 'Stripe'],
    //   type: 'empresa',
    //   github: 'https://github.com',
    //   demo: 'https://example.com',
    //   featured: true
    // },
    // {
    //   title: 'Dashboard Analytics',
    //   description: 'Sistema de análise de dados em tempo real para empresas. Integração com múltiplas APIs e visualizações interativas.',
    //   tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    //   type: 'empresa',
    //   github: 'https://github.com',
    //   demo: 'https://example.com'
    // },
    // {
    //   title: 'App Mobile Delivery',
    //   description: 'Aplicativo de delivery desenvolvido com React Native. GPS tracking, pagamentos online e sistema de avaliações.',
    //   tags: ['React Native', 'Firebase', 'Node.js', 'Express'],
    //   type: 'freelance',
    //   github: 'https://github.com',
    //   demo: 'https://example.com'
    // },
    // {
    //   title: 'Sistema de Gestão Hospitalar',
    //   description: 'Plataforma web para gestão de pacientes, médicos e consultas. Desenvolvido durante estágio na empresa TechHealth.',
    //   tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    //   type: 'empresa',
    //   github: 'https://github.com',
    //   company: 'TechHealth'
    // },
    // {
    //   title: 'Portfolio Pessoal',
    //   description: 'Site portfolio responsivo criado com React.js e Tailwind CSS. Design moderno e animações suaves.',
    //   tags: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    //   type: 'pessoal',
    //   github: 'https://github.com',
    //   demo: 'https://example.com'
    // },
    // {
    //   title: 'API REST Microserviços',
    //   description: 'Arquitetura de microserviços em Python com FastAPI. Sistema de autenticação JWT e documentação automática.',
    //   tags: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
    //   type: 'pessoal',
    //   github: 'https://github.com'
    // },
    {
      title: 'LoadStay',
      description: 'Plataforma SaaS para gestão de estadias voltada a pequenas e médias empresas, substituindo planilhas por um sistema seguro e escalável. Permite cadastro de clientes com diferentes planos de assinatura, controle detalhado de estadias com documentos anexados, filtros avançados, gestão de usuários por administradores e integração com pagamentos online.',
      image: projectPreview,
      tags: ['React.js', 'TypeScript', 'PHP', 'Laravel', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      type: 'pessoal',
      featured: true
    },
    {
      title: 'RPA para Guias de ICMS',
      description: 'Desenvolvimento de um Robotic Process Automation (RPA) em Python para automatizar a leitura de guias de ICMS em pastas monitoradas e realizar a inserção estruturada dos dados no ERP da empresa, reduzindo erros manuais e aumentando a eficiência operacional.',
      tags: ['Python', 'Pandas', 'Openpyxl', 'PyAutoGUI', 'Automação'],
      type: 'empresa',
      company: 'Transpanorama'
    },
    {
      title: 'RPA para Faturamento',
      description: 'Desenvolvimento de um Robotic Process Automation (RPA) em Python para automatizar a coleta de contas a pagar de um cliente, registrar os dados no sistema e gerar automaticamente relatórios de faturamento enviados por e-mail, reduzindo esforço manual e aumentando a confiabilidade das informações.',
      tags: ['Python', 'Pandas', 'Openpyxl', 'PyAutoGUI', 'Playwright', 'Smtplib', 'Automação'],
      type: 'empresa',
      company: 'Transpanorama'
    },
    {
      title: 'ReuniOn',
      description: 'Sistema de automação que integra WhatsApp e Google Calendar para envio de agendas diárias, criação e edição de eventos por mensagens e sincronização automática. Possui webhook para atualizações, autenticação segura via Google OAuth, deploy simplificado em Vercel (com agendamento via Vercel Cron) e foco em baixo custo de operação.',
      image: projectPreview2,
      tags: ['Python', 'Flask', 'Google Calendar API', 'WhatsApp Cloud API', 'Vercel', 'Docker'],
      type: 'pessoal',
      featured: true
    },
    {
      title: 'Tracker de Carga',
      description: 'Desenvolvimento de um sistema web para clientes da transportadora acompanharem suas entregas em tempo real, com funcionalidades de monitoramento de carga, gestão de ocorrências e rastreamento de placas com problemas, garantindo maior transparência e agilidade logística.',
      tags: ['Python', 'Flask', 'MySQL', 'Jinja', 'Bootstrap', 'API REST'],
      type: 'empresa',
      company: 'Transpanorama'
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'empresa':
        return <Briefcase className="w-4 h-4" />;
      case 'pessoal':
        return <Star className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'empresa':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'pessoal':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'empresa':
        return 'Empresa';
      case 'freelance':
        return 'Freelance';
      case 'pessoal':
        return 'Pessoal';
      default:
        return 'Projeto';
    }
  };

  return (
    <section id="projetos" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meus <span className="text-transparent bg-clip-text bg-gradient-primary">Projetos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, desde soluções empresariais até experimentos pessoais
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`card-gradient hover-lift border-border/30 group overflow-hidden ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                {project.image && (
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Project Type */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="outline" 
                      className={`${getTypeColor(project.type)} border`}
                    >
                      {getTypeIcon(project.type)}
                      <span className="ml-1">{getTypeLabel(project.type)}</span>
                    </Badge>
                    {project.company && (
                      <span className="text-xs text-muted-foreground">
                        @ {project.company}
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-3">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-border/30 hover:border-primary/50 bg-card/20"
                      asChild
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Código
                      </a>
                    </Button>
                    
                    {project.demo && (
                      <Button 
                        size="sm" 
                        className="btn-gradient text-primary-foreground"
                        asChild
                      >
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Ver Projeto
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Gostou dos projetos? Confira mais no meu GitHub!
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary bg-card/20 backdrop-blur-sm text-foreground hover:text-primary"
              asChild
            >
              <a 
                href="https://github.com/EliasVRG?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver Mais no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;