import MapViewer from "../components/MapViewer";
import Dashboard from "../components/Dashboard";
import Methodology from "../components/Methodology";

export default function PlasticWaste() {
  const plasticData = {
    stats: [
      { label: "Total Sampah Plastik", value: "28,500 ton/yr", trend: 15 },
      { label: "Hotspot Utama", value: "8 lokasi", trend: 3 },
      { label: "Kontaminasi Laut", value: "12 kg/km²", trend: 20 },
    ],
    chartData: [
      { year: 2015, value: 5 },
      { year: 2017, value: 12 },
      { year: 2019, value: 18 },
      { year: 2022, value: 25 },
      { year: 2025, value: 28.5 },
    ],
  };

  const methods = [
    {
      icon: "📡",
      name: "Sentinel-2 Image Classification",
      description:
        "Klasifikasi RGB/NIR untuk deteksi area akumulasi sampah plastik.",
      tools: "Google Earth Engine, SNAP",
    },
    {
      icon: "📍",
      name: "Ground Truthing",
      description:
        "Survey lapangan dengan beach litter transect untuk validasi.",
      tools: "Field Data Collection App",
    },
  ];

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            ♻️ Pemetaan Sampah Plastik Pesisir
          </h1>
          <p className="text-lg">
            Identifikasi sumber dan hotspot sampah plastik di pantai Indonesia
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
                radius: 8000,
                color: "red",
                label: "Hotspot Laut Jaya",
              },
              {
                center: [-6.9271, 110.4185],
                radius: 10000,
                color: "orange",
                label: "Hotspot Semarang",
              },
            ]}
          />
        </div>

        <Dashboard data={plasticData} title="Statistik Sampah Plastik" />
        <Methodology title="Metodologi Pemetaan Plastik" methods={methods} />
      </div>
    </div>
  );
}
