export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 bg-gray-800 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Olá, sou o Elias Victor</h2>
      <p className="text-xl mb-6">Desenvolvedor Frontend com React</p>
      <div className="flex space-x-4">
        <a href="https://github.com/" className="px-4 py-2 border rounded hover:bg-gray-700">GitHub</a>
        <a href="https://linkedin.com/" className="px-4 py-2 border rounded hover:bg-gray-700">LinkedIn</a>
        <a href="/curriculo.pdf" className="px-4 py-2 border rounded hover:bg-gray-700">Currículo</a>
      </div>
    </section>
  );
}
