export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full shadow z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Elias Victor</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projetos</a></li>
          <li><a href="#about" className="hover:text-gray-400">Sobre</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
