import { ArrowRight, Waves, TrendingDown, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium">Kompetisi ASEAN 2025</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
            Sistem Pemantauan
          </span>
          <br />
          <span className="text-white">Resiliensi Pantai Indonesia</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Pemetaan terpadu berbasis teknologi satelit untuk memahami ancaman pesisir: 
          kenaikan muka air laut, abrasi, sampah plastik, dan kesehatan mangrove di Jawa dan Bali.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Waves className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium">Real-time Monitoring</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <TrendingDown className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">AI Analytics</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Ecosystem Health</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/sea-level-rise"
            className="btn-primary flex items-center gap-2 text-lg"
          >
            Mulai Eksplorasi 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-md">
            📖 Dokumentasi
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-1">2,450+</div>
            <div className="text-sm text-blue-200">km² Area Dipantau</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-300 mb-1">4</div>
            <div className="text-sm text-blue-200">Indikator Utama</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-1">24/7</div>
            <div className="text-sm text-blue-200">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-1">100%</div>
            <div className="text-sm text-blue-200">Data Transparan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
