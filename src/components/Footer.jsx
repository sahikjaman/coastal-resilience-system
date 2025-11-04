import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">🌊 Coastal Resilience</h4>
            <p className="text-gray-400">
              Sistem pemetaan resiliensi pantai untuk mengatasi krisis pesisir
              Indonesia.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Dokumentasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Data Source
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Github className="cursor-pointer hover:text-teal-400" />
              <Linkedin className="cursor-pointer hover:text-teal-400" />
              <Mail className="cursor-pointer hover:text-teal-400" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Coastal Resilience System. Kompetisi ASEAN.</p>
        </div>
      </div>
    </footer>
  );
}
