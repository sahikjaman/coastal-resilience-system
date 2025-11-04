import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-teal-800 to-green-700 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          🌊 Sistem Pemantauan Resiliensi Pantai Indonesia
        </h1>
        <p className="text-xl mb-8 text-gray-100">
          Pemetaan terpadu untuk memahami ancaman pesisir: kenaikan muka air
          laut, abrasi, sampah plastik, dan kesehatan mangrove di Jawa dan Bali.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/sea-level-rise"
            className="btn-primary flex items-center gap-2"
          >
            Mulai Eksplorasi <ArrowRight size={18} />
          </Link>
          <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
            Dokumentasi
          </button>
        </div>
      </div>
    </section>
  );
}
