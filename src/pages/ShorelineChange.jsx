import MapViewer from "../components/MapViewer";
import Dashboard from "../components/Dashboard";
import Methodology from "../components/Methodology";

export default function ShorelineChange() {
  const shorelineData = {
    stats: [
      { label: "Abrasi Rata-rata", value: "-1.2 m/yr", trend: -12 },
      { label: "Akresi Maksimal", value: "+0.8 m/yr", trend: 2 },
      { label: "Panjang Pantai Terancam", value: "432 km", trend: -5 },
    ],
    chartData: [
      { year: 1990, value: 0 },
      { year: 2000, value: -8 },
      { year: 2010, value: -18 },
      { year: 2020, value: -28 },
      { year: 2025, value: -32 },
    ],
  };

  const methods = [
    {
      icon: "🛰️",
      name: "Citra Satelit Multitemporal",
      description:
        "Landsat 5, 7, 8 dan Sentinel-2 untuk analisis perubahan garis pantai sejak 1990.",
      tools: "Google Earth Engine, USGS",
    },
    {
      icon: "📐",
      name: "DSAS Analysis",
      description:
        "Digital Shoreline Analysis System untuk menghitung tren abrasi/akresi dalam m/year.",
      tools: "ArcGIS + DSAS Plugin",
    },
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            🏖️ Pemetaan Perubahan Garis Pantai
          </h1>
          <p className="text-lg">
            Analisis abrasi dan akresi pantai dari 1990 hingga 2025
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🗺️ Visualisasi Interaktif</h2>
          <MapViewer
            center={[-6.2088, 106.8456]}
            zoom={8}
            markers={[
              {
                position: [-6.1256, 106.8273],
                label: "Pantai Muara Angke - Abrasi 1.5m/yr",
              },
            ]}
          />
        </div>

        <Dashboard
          data={shorelineData}
          title="Statistik Perubahan Garis Pantai"
        />
        <Methodology title="Metodologi Analisis Shoreline" methods={methods} />
      </div>
    </div>
  );
}
