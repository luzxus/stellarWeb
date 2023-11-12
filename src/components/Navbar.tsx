
const Navbar = () => {
  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg font-semibold">StellarWeb Solutions</p>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
