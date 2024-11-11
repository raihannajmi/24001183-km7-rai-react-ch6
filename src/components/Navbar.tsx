import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold bg-blue-900">
          Najmi Raihan
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
        <div className="hidden lg:flex space-x-4 text-black">
          <a href="#" className="hover:text-gray-200">
            Our Services
          </a>
          <a href="#" className="hover:text-gray-200">
            Why Us
          </a>
          <a href="#" className="hover:text-gray-200">
            Testimonial
          </a>
          <a href="#" className="hover:text-gray-200">
            FAQ
          </a>
          <a
            href="#"
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          >
            Register
          </a>
        </div>
      </div>

      {/* Half-screen overlay menu when isOpen is true */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-1/2 bg-blue-100 bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-xl z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
          <a
            href="#"
            className="hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </a>
          <a
            href="#"
            className="hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Why Us
          </a>
          <a
            href="#"
            className="hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Testimonial
          </a>
          <a
            href="#"
            className="hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => setIsOpen(false)}
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
