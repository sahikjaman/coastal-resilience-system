import MapViewer from "../components/MapViewer";
import Dashboard from "../components/Dashboard";
import DataAnalysis from "../components/DataAnalysis";
import Methodology from "../components/Methodology";

export default function SeaLevelRise() {
  const slrData = {
    stats: [
      { label: "Rata-rata SLR 2025", value: "+0.12 m", trend: 5 },
      { label: "Target Proyeksi 2050", value: "+0.38 m", trend: 3 },
      { label: "Area Terancam Jawa", value: "2,450 km²", trend: 8 },
    ],
    chartData: [
      { year: 2000, value: 0 },
      { year: 2010, value: 0.05 },
      { year: 2020, value: 0.1 },
      { year: 2030, value: 0.2 },
      { year: 2050, value: 0.38 },
      { year: 2100, value: 1.0 },
    ],
  };

  const analysisData = {
    analysis: [
      {
        title: "⚠️ Zona Kritis Jakarta",
        description:
          "Pantai utara Jakarta (Muara Angke) adalah area paling rentan dengan subsidence hingga 8 cm/tahun ditambah SLR.",
        metrics: [
          { label: "Subsidence", value: "-8 cm/yr" },
          { label: "SLR", value: "+0.3 cm/yr" },
          { label: "Total Inundation", value: "-8.3 cm/yr" },
        ],
      },
      {
        title: "🏝️ Bali & Lombok",
        description:
          "Wilayah Bali relatif lebih stabil dengan SLR diperkirakan +0.3-0.5 m hingga 2100, namun infrastruktur wisata tetap terancam.",
        metrics: [
          { label: "Projected SLR 2100", value: "+0.5 m" },
          { label: "Population at Risk", value: "~1.2M" },
        ],
      },
    ],
  };

  const methods = [
    {
      icon: "🗺️",
      name: "Digital Elevation Model (DEM)",
      description:
        "Menggunakan SRTM dan Copernicus untuk visualisasi ketinggian dan proyeksi genangan.",
      tools: "QGIS, ArcGIS, GDAL",
    },
    {
      icon: "📊",
      name: "Simulasi Skenario",
      description:
        "Proyeksi SLR untuk tahun 2030, 2050, dan 2100 dengan overlay penggunaan lahan.",
      tools: "Python (Rasterio), QGIS",
    },
    {
      icon: "📡",
      name: "Data Pasang Surut",
      description:
        "Integrasi data BMKG untuk analisis pasang surut dan storm surge.",
      tools: "BMKG API, PostgreSQL",
    },
    {
      icon: "🎯",
      name: "Pemetaan Risiko",
      description:
        "Overlay dengan permukiman, infrastruktur, dan aset ekonomi penting.",
      tools: "ArcGIS, QGIS, PostGIS",
    },
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            🌊 Pemetaan Kenaikan Muka Air Laut (SLR)
          </h1>
          <p className="text-lg">
            Simulasi kenaikan muka air laut dan ancaman banjir rob di Jawa dan
            Bali hingga 2100
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
                center: [-6.1256, 106.8273],
                radius: 15000,
                color: "red",
                label: "Jakarta Utara - Risiko Tinggi",
              },
              {
                center: [-6.9271, 110.4185],
                radius: 12000,
                color: "orange",
                label: "Semarang - Risiko Sedang",
              },
              {
                center: [-8.6705, 115.2126],
                radius: 10000,
                color: "yellow",
                label: "Bali - Risiko Rendah-Sedang",
              },
            ]}
          />
        </div>

        <Dashboard data={slrData} title="Statistik Kenaikan Muka Air Laut" />

        <div className="my-12">
          <DataAnalysis data={analysisData} />
        </div>

        <Methodology title="Metodologi Pemetaan SLR" methods={methods} />
      </div>
    </div>
  );
}
