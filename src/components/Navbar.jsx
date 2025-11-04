import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sea Level Rise", path: "/sea-level-rise" },
    { label: "Shoreline Change", path: "/shoreline-change" },
    { label: "Plastic Waste", path: "/plastic-waste" },
    { label: "Mangrove Health", path: "/mangrove-health" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-teal-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-2xl">
            🌊 Coastal Resilience
          </Link>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`hidden md:flex gap-8 ${isOpen ? "block" : "hidden"}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block hover:text-yellow-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
