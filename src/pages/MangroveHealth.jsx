import MapViewer from "../components/MapViewer";
import Dashboard from "../components/Dashboard";
import Methodology from "../components/Methodology";

export default function MangroveHealth() {
  const mangroveData = {
    stats: [
      { label: "Luas Mangrove Tersisa", value: "145,650 ha", trend: -3 },
      { label: "Area Degradasi", value: "18,920 ha", trend: -8 },
      { label: "Prioritas Restorasi", value: "12 lokasi", trend: 2 },
    ],
    chartData: [
      { year: 2000, value: 180000 },
      { year: 2005, value: 172000 },
      { year: 2010, value: 160000 },
      { year: 2015, value: 152000 },
      { year: 2020, value: 146500 },
      { year: 2025, value: 145650 },
    ],
  };

  const methods = [
    {
      icon: "🌿",
      name: "NDVI/NDMI Index",
      description:
        "Normalized Difference Vegetation Index untuk menilai kesehatan vegetasi mangrove.",
      tools: "Sentinel-2, QGIS, Google Earth Engine",
    },
    {
      icon: "⚠️",
      name: "Mangrove Vulnerability Index (MVI)",
      description:
        "Integrasi kepadatan, jarak ke pemukiman, aktivitas manusia, dan perubahan tutupan.",
      tools: "GIS Analysis, ArcGIS",
    },
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            🌿 Pemetaan Kesehatan Mangrove
          </h1>
          <p className="text-lg">
            Penilaian kondisi ekosistem mangrove dan prioritas restorasi
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🗺️ Visualisasi Interaktif</h2>
          <MapViewer
            center={[-6.2088, 106.8456]}
            zoom={8}
            circles={[
              {
                center: [-5.852, 106.5741],
                radius: 20000,
                color: "green",
                label: "Mangrove Sehat - Ujung Kulon",
              },
              {
                center: [-6.9271, 110.4185],
                radius: 15000,
                color: "orange",
                label: "Mangrove Degradasi - Segara Anakan",
              },
            ]}
          />
        </div>

        <Dashboard data={mangroveData} title="Statistik Kesehatan Mangrove" />
        <Methodology title="Metodologi Penilaian Mangrove" methods={methods} />
      </div>
    </div>
  );
}
