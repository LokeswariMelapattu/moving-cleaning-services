import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold">Professional Movers</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-green-200 transition">Home</a>
          <a href="#services" className="text-white hover:text-green-200 transition">Services</a>
          <a href="#why" className="text-white hover:text-green-200 transition">Why Students</a>
          <a href="#contact" className="text-white hover:text-green-200 transition">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 pb-4">
          <a href="#home" className="block py-2 hover:text-green-200">Home</a>
          <a href="#services" className="block py-2 hover:text-green-200">Services</a>
          <a href="#why" className="block py-2 hover:text-green-200">Why Students</a>
          <a href="#contact" className="block py-2 hover:text-green-200">Contact</a>
        </div>
      )}
    </header>
  );
}
