import { Github, Linkedin, Mail, Waves, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Waves className="w-8 h-8 text-cyan-400" />
              <h4 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Coastal Resilience
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sistem pemetaan resiliensi pantai berbasis teknologi satelit untuk mengatasi krisis pesisir Indonesia.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Monitoring Aktif 24/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Dokumentasi", path: "#" },
                { label: "Data Source", path: "#" },
                { label: "API Access", path: "#" },
                { label: "Contact", path: "#" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-full"></span>
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                info@coastalresilience.id
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Coastal Resilience System. 
              <span className="text-cyan-400 font-semibold"> Kompetisi ASEAN 2025</span>
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
