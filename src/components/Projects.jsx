const projetos = [
  {
    nome: 'LoadStay',
    desc: 'Plataforma SaaS para gestão de Estadias',
    github: '#',
    demo: '#',
  },
  {
    nome: 'Projeto 2',
    desc: 'Oratogo pero temo',
    github: '#',
    demo: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-gray-900">
      <h3 className="text-3xl font-bold text-center mb-10">Projetos</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projetos.map((proj, idx) => (
          <div key={idx} className="bg-white rounded shadow p-4">
            <div className="w-full h-40 bg-gray-300 mb-4" /> {/* Placeholder de imagem */}
            <h4 className="text-xl font-semibold">{proj.nome}</h4>
            <p className="mb-4">{proj.desc}</p>
            <div className="flex space-x-2">
              <a href={proj.github} className="px-4 py-1 border rounded hover:bg-gray-200">GitHub</a>
              <a href={proj.demo} className="px-4 py-1 border rounded hover:bg-gray-200">Ver online</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
