const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">StellarWeb Solutions</p>
        <p className="mt-2">
          Your pathway to stellar web and software development.
        </p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2 hover:text-gray-400">
            Home
          </a>
          <a href="#services" className=" mx-2  hover:text-gray-400">
            Services
          </a>
          <a href="#pricing" className="hover:text-gray-400 mx-2 ">
            Pricing
          </a>
          <a href="#how-it-works" className="hover:text-gray-400 mx-2 ">
            How it works
          </a>
          <a href="#cta" className="hover:text-gray-400 mx-2 ">
            Contact
          </a>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} StellarWeb Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
