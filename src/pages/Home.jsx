import Hero from "../components/Hero";
import Team from "../components/Team";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: "🌊",
      title: "Kenaikan Muka Air Laut",
      description:
        "Simulasi SLR 2030-2100 dengan DEM dan skenario perubahan iklim",
    },
    {
      icon: "🏖️",
      title: "Perubahan Garis Pantai",
      description:
        "Analisis abrasi & akresi menggunakan citra satelit multitemporal",
    },
    {
      icon: "♻️",
      title: "Sampah Plastik",
      description: "Pemetaan hotspot plastik dari wisata dan sungai",
    },
    {
      icon: "🌿",
      title: "Kesehatan Mangrove",
      description: "Indeks kerentanan mangrove dan prioritas restorasi",
    },
  ];

  return (
    <div>
      <Hero />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            📋 Fitur Utama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Link
                key={idx}
                to={
                  [
                    "sea-level-rise",
                    "shoreline-change",
                    "plastic-waste",
                    "mangrove-health",
                  ][idx]
                }
                className="card cursor-pointer"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </Link>
            ))}
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
