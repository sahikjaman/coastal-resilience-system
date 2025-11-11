import { Link, useLocation } from "react-router-dom";
import { Menu, X, Waves } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sea Level Rise", path: "/sea-level-rise" },
    { label: "Shoreline Change", path: "/shoreline-change" },
    { label: "Plastic Waste", path: "/plastic-waste" },
    { label: "Mangrove Health", path: "/mangrove-health" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-teal-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="font-bold text-2xl flex items-center gap-3 hover:scale-105 transition-transform duration-300 group"
          >
            <Waves className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Coastal Resilience
            </span>
          </Link>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? "bg-white/20 text-cyan-300"
                    : "hover:bg-white/10 text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-t-full"></span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-white/20 text-cyan-300"
                    : "hover:bg-white/10 text-white/90"
                }`}
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
