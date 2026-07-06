function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PropertyHub
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#properties"
              className="text-slate-700 hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Properties
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-slate-700 hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-slate-700 hover:text-blue-600 hover:scale-105 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Sign In Button */}
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;