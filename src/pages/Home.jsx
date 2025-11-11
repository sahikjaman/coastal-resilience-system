import Hero from "../components/Hero";
import Team from "../components/Team";
import { Link } from "react-router-dom";
import { Waves, MapPin, Recycle, Trees } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Waves className="w-12 h-12" />,
      emoji: "🌊",
      title: "Kenaikan Muka Air Laut",
      description:
        "Simulasi SLR 2030-2100 dengan DEM dan skenario perubahan iklim",
      color: "from-blue-500 to-cyan-500",
      path: "sea-level-rise"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      emoji: "🏖️",
      title: "Perubahan Garis Pantai",
      description:
        "Analisis abrasi & akresi menggunakan citra satelit multitemporal",
      color: "from-teal-500 to-emerald-500",
      path: "shoreline-change"
    },
    {
      icon: <Recycle className="w-12 h-12" />,
      emoji: "♻️",
      title: "Sampah Plastik",
      description: "Pemetaan hotspot plastik dari wisata dan sungai",
      color: "from-orange-500 to-red-500",
      path: "plastic-waste"
    },
    {
      icon: <Trees className="w-12 h-12" />,
      emoji: "🌿",
      title: "Kesehatan Mangrove",
      description: "Indeks kerentanan mangrove dan prioritas restorasi",
      color: "from-green-500 to-teal-500",
      path: "mangrove-health"
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              📋 Fitur Utama Platform
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sistem monitoring komprehensif dengan teknologi terkini untuk perlindungan pesisir Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {features.map((feature, idx) => (
              <Link
                key={idx}
                to={`/${feature.path}`}
                className="card cursor-pointer group relative"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} rounded-t-2xl`}></div>
                
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Pelajari lebih lanjut →
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Siap Menjelajahi Data?</h3>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Akses data geospasial real-time dan analisis mendalam untuk keputusan berbasis sains
            </p>
            <Link to="/sea-level-rise" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              🗺️ Lihat Peta Interaktif
            </Link>
          </div>
        </div>
      </section>

      <Team />
    </div>
  );
}
// Di Home.jsx, tambahkan link ke master map
<Link to="/master-map" className="btn-primary">
  🗺️ Lihat Peta Terpadu
</Link>;
