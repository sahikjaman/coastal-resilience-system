import React, { useState } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function MasterMap() {
  const [activeLayer, setActiveLayer] = useState("slr");
  const [slrYear, setSlrYear] = useState(2050);
  const [showLegend, setShowLegend] = useState(true);

  // Data khusus JAWA & BALI
  const layerData = {
    slr: {
      name: "Sea Level Rise (Jawa & Bali)",
      icon: "🌊",
      description: "Proyeksi kenaikan muka air laut hingga 2100",
      areas: [
        // JAWA
        {
          name: "Jakarta Utara (Muara Angke)",
          center: [-6.1256, 106.8273],
          radius: 12000,
          risk: "high",
          slr2030: 0.2,
          slr2050: 0.38,
          slr2100: 1.0,
          subsidence: 8,
          population: "2.5M",
          status: "🔴 KRITIS",
        },
        {
          name: "Pantai Cirebon",
          center: [-6.7032, 108.4693],
          radius: 10000,
          risk: "medium",
          slr2030: 0.18,
          slr2050: 0.35,
          slr2100: 0.95,
          subsidence: 3,
          population: "800K",
          status: "🟠 SEDANG",
        },
        {
          name: "Semarang",
          center: [-6.9271, 110.4185],
          radius: 11000,
          risk: "medium",
          slr2030: 0.18,
          slr2050: 0.35,
          slr2100: 0.95,
          subsidence: 5,
          population: "1.5M",
          status: "🟠 SEDANG",
        },
        {
          name: "Surabaya",
          center: [-7.2504, 112.7618],
          radius: 10000,
          risk: "medium",
          slr2030: 0.15,
          slr2050: 0.32,
          slr2100: 0.9,
          subsidence: 4,
          population: "2.8M",
          status: "🟠 SEDANG",
        },
        // BALI
        {
          name: "Bali (Denpasar)",
          center: [-8.6705, 115.2126],
          radius: 10000,
          risk: "low",
          slr2030: 0.15,
          slr2050: 0.3,
          slr2100: 0.85,
          subsidence: 1,
          population: "890K",
          status: "🟡 RENDAH",
        },
        {
          name: "Bali (Sanur)",
          center: [-8.718, 115.263],
          radius: 8000,
          risk: "low",
          slr2030: 0.15,
          slr2050: 0.3,
          slr2100: 0.85,
          subsidence: 1,
          population: "250K",
          status: "🟡 RENDAH",
        },
      ],
    },
    shoreline: {
      name: "Shoreline Change (Jawa & Bali)",
      icon: "🏖️",
      description: "Laju abrasi & akresi (1990-2025)",
      areas: [
        {
          name: "Muara Angke (Erosion)",
          center: [-6.1256, 106.8273],
          radius: 10000,
          risk: "high",
          rate: -1.5,
          totalChange: -52.5,
          type: "Erosion",
          status: "🔴 PARAH",
        },
        {
          name: "Pantai Penimbang (Accretion)",
          center: [-6.09, 106.75],
          radius: 8000,
          risk: "low",
          rate: 0.8,
          totalChange: 20,
          type: "Accretion",
          status: "🟢 POSITIF",
        },
        {
          name: "Semarang (Moderate Erosion)",
          center: [-6.9271, 110.4185],
          radius: 9000,
          risk: "medium",
          rate: -0.8,
          totalChange: -24,
          type: "Erosion",
          status: "🟠 SEDANG",
        },
        {
          name: "Surabaya (Erosion)",
          center: [-7.2504, 112.7618],
          radius: 9000,
          risk: "medium",
          rate: -0.6,
          totalChange: -18,
          type: "Erosion",
          status: "🟠 SEDANG",
        },
        {
          name: "Bali - Sanur Beach",
          center: [-8.718, 115.263],
          radius: 8000,
          risk: "low",
          rate: 0.2,
          totalChange: 6,
          type: "Stable",
          status: "🟢 STABIL",
        },
      ],
    },
    plastic: {
      name: "Plastic Waste Hotspots (Jawa & Bali)",
      icon: "♻️",
      description: "Konsentrasi sampah plastik di pantai",
      areas: [
        {
          name: "Laut Jaya, Jakarta",
          center: [-6.12, 106.83],
          radius: 8000,
          risk: "high",
          concentration: 18.5,
          sources: ["Tourism", "Urban Runoff", "Rivers"],
          status: "🔴 SANGAT TINGGI",
        },
        {
          name: "Semarang Harbor",
          center: [-6.93, 110.42],
          radius: 9000,
          risk: "high",
          concentration: 12.3,
          sources: ["Port Activity", "Fishing"],
          status: "🔴 TINGGI",
        },
        {
          name: "Surabaya Port",
          center: [-7.26, 112.77],
          radius: 8000,
          risk: "medium",
          concentration: 8.5,
          sources: ["Port Activity", "Rivers"],
          status: "🟠 SEDANG",
        },
        {
          name: "Bali - Laut Sanur",
          center: [-8.72, 115.26],
          radius: 7000,
          risk: "low",
          concentration: 4.2,
          sources: ["Tourism", "River Drift"],
          status: "🟡 RENDAH",
        },
        {
          name: "Bali - Kuta Beach",
          center: [-8.685, 115.17],
          radius: 6000,
          risk: "medium",
          concentration: 6.8,
          sources: ["Tourism"],
          status: "🟠 SEDANG",
        },
      ],
    },
    mangrove: {
      name: "Mangrove Health Index (Jawa & Bali)",
      icon: "🌿",
      description: "Indeks kesehatan mangrove & prioritas restorasi",
      areas: [
        {
          name: "Ujung Kulon, Jawa",
          center: [-5.852, 106.5741],
          radius: 15000,
          risk: "low",
          health: "Healthy",
          ndvi: 0.85,
          area: 8500,
          priority: "Konservasi",
          status: "🟢 SEHAT",
        },
        {
          name: "Segara Anakan, Jawa",
          center: [-7.35, 109.35],
          radius: 12000,
          risk: "high",
          health: "Degraded",
          ndvi: 0.45,
          area: 6200,
          priority: "⭐ PRIORITAS RESTORASI",
          status: "🔴 KRITIKAL",
        },
        {
          name: "Demak, Jawa",
          center: [-6.8842, 110.5319],
          radius: 10000,
          risk: "high",
          health: "Moderate",
          ndvi: 0.55,
          area: 4300,
          priority: "Restorasi",
          status: "🟠 SEDANG",
        },
        {
          name: "Bali - Perancak",
          center: [-8.45, 114.9],
          radius: 9000,
          risk: "medium",
          health: "Moderate",
          ndvi: 0.62,
          area: 3200,
          priority: "Monitoring",
          status: "🟠 SEDANG",
        },
        {
          name: "Bali - Cilacap",
          center: [-7.7343, 109.0167],
          radius: 11000,
          risk: "low",
          health: "Healthy",
          ndvi: 0.78,
          area: 5100,
          priority: "Konservasi",
          status: "🟢 SEHAT",
        },
      ],
    },
  };

  const current = layerData[activeLayer];

  const getRiskColor = (risk) => {
    const colors = {
      high: "#ef4444",
      medium: "#f97316",
      low: "#eab308",
    };
    return colors[risk] || "#gray";
  };

  const getSLRValue = (year) => {
    switch (year) {
      case 2030:
        return 0.3;
      case 2050:
        return 0.5;
      case 2100:
        return 1.0;
      default:
        return 0.5;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text text-transparent mb-2">
            {current.icon} {current.name}
          </h1>
          <p className="text-gray-700 text-lg">
            📍 Fokus Jawa & Bali | {current.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Layer Selector */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
              <h3 className="font-bold text-lg mb-4 text-blue-900">
                📊 Pilih Layer
              </h3>
              <div className="space-y-3">
                {Object.entries(layerData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setActiveLayer(key)}
                    className={`w-full py-3 px-4 rounded-lg font-bold transition-all text-left ${
                      activeLayer === key
                        ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200 border-l-4 border-transparent"
                    }`}
                  >
                    {data.icon}{" "}
                    <span className="ml-2">
                      {data.name.split("(")[0].trim()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* SLR Parameter Control */}
            {activeLayer === "slr" && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
                <h3 className="font-bold text-lg mb-4 text-blue-900">
                  ⚙️ Parameter Proyeksi
                </h3>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">
                    Target Tahun:{" "}
                    <span className="text-blue-600 text-xl">{slrYear}</span>
                  </label>
                  <input
                    type="range"
                    min="2030"
                    max="2100"
                    step="10"
                    value={slrYear}
                    onChange={(e) => setSlrYear(parseInt(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs font-bold text-gray-600 mt-2">
                    <span>2030</span>
                    <span>2050</span>
                    <span>2100</span>
                  </div>

                  {/* SLR Value Card */}
                  <div className="mt-6 p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg text-white">
                    <p className="text-sm opacity-90">
                      Proyeksi SLR Jawa & Bali
                    </p>
                    <p className="text-3xl font-bold">
                      +{getSLRValue(slrYear).toFixed(1)} m
                    </p>
                    <p className="text-xs mt-2 opacity-90">
                      pada tahun {slrYear}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
              <h3 className="font-bold text-lg mb-4 text-blue-900">
                🎨 Legenda
              </h3>
              <div className="space-y-3 text-sm">
                {activeLayer === "slr" && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-red-700"></div>
                      <span className="font-semibold text-gray-800">
                        Risiko Tinggi (SLR &gt;0.5m)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500 border-2 border-orange-700"></div>
                      <span className="font-semibold text-gray-800">
                        Risiko Sedang (0.3-0.5m)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 border-2 border-yellow-600"></div>
                      <span className="font-semibold text-gray-800">
                        Risiko Rendah (&lt;0.3m)
                      </span>
                    </div>
                  </>
                )}
                {activeLayer === "shoreline" && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-red-700"></div>
                      <span className="font-semibold text-gray-800">
                        Erosion: &lt;-1.0 m/yr
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500 border-2 border-orange-700"></div>
                      <span className="font-semibold text-gray-800">
                        Stable: -1.0 to +0.5
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-green-700"></div>
                      <span className="font-semibold text-gray-800">
                        Accretion: &gt;+0.5 m/yr
                      </span>
                    </div>
                  </>
                )}
                {activeLayer === "plastic" && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-red-700"></div>
                      <span className="font-semibold text-gray-800">
                        Sangat Tinggi (&gt;10)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500 border-2 border-orange-700"></div>
                      <span className="font-semibold text-gray-800">
                        Tinggi (5-10)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 border-2 border-yellow-600"></div>
                      <span className="font-semibold text-gray-800">
                        Sedang (&lt;5) kg/km²
                      </span>
                    </div>
                  </>
                )}
                {activeLayer === "mangrove" && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-600 border-2 border-green-800"></div>
                      <span className="font-semibold text-gray-800">
                        Sehat (NDVI &gt;0.7)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500 border-2 border-orange-700"></div>
                      <span className="font-semibold text-gray-800">
                        Sedang (0.4-0.7)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-600 border-2 border-red-800"></div>
                      <span className="font-semibold text-gray-800">
                        Degradasi (&lt;0.4)
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            {/* Main Map */}
            <div
              className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-blue-100"
              style={{ height: "700px" }}
            >
              <MapContainer
                center={[-7.4, 110.5]}
                zoom={8}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />

                {/* Render Data Points */}
                {current.areas.map((area, idx) => (
                  <Circle
                    key={idx}
                    center={area.center}
                    radius={area.radius}
                    pathOptions={{
                      color: getRiskColor(area.risk),
                      fillColor: getRiskColor(area.risk),
                      fillOpacity: 0.65,
                      weight: 3,
                    }}
                  >
                    <Popup>
                      <div className="p-3 w-64">
                        <h4 className="font-bold text-lg text-gray-800 mb-2">
                          {area.name}
                        </h4>
                        {activeLayer === "slr" && (
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-semibold">Status:</span>{" "}
                              {area.status}
                            </p>
                            <p>
                              <span className="font-semibold">SLR 2050:</span> +
                              {area.slr2050}m
                            </p>
                            <p>
                              <span className="font-semibold">Subsidence:</span>{" "}
                              {area.subsidence}cm/yr
                            </p>
                            <p>
                              <span className="font-semibold">Populasi:</span>{" "}
                              {area.population}
                            </p>
                          </div>
                        )}
                        {activeLayer === "shoreline" && (
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-semibold">Status:</span>{" "}
                              {area.status}
                            </p>
                            <p>
                              <span className="font-semibold">Laju:</span>{" "}
                              {area.rate}m/yr
                            </p>
                            <p>
                              <span className="font-semibold">
                                Total Perubahan (35 tahun):
                              </span>{" "}
                              {area.totalChange}m
                            </p>
                          </div>
                        )}
                        {activeLayer === "plastic" && (
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-semibold">Status:</span>{" "}
                              {area.status}
                            </p>
                            <p>
                              <span className="font-semibold">
                                Konsentrasi:
                              </span>{" "}
                              {area.concentration}kg/km²
                            </p>
                            <p>
                              <span className="font-semibold">Sumber:</span>{" "}
                              {area.sources.join(", ")}
                            </p>
                          </div>
                        )}
                        {activeLayer === "mangrove" && (
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-semibold">Status:</span>{" "}
                              {area.status}
                            </p>
                            <p>
                              <span className="font-semibold">NDVI Index:</span>{" "}
                              {area.ndvi}
                            </p>
                            <p>
                              <span className="font-semibold">Luas:</span>{" "}
                              {area.area.toLocaleString()}ha
                            </p>
                            <p>
                              <span className="font-semibold">Prioritas:</span>{" "}
                              {area.priority}
                            </p>
                          </div>
                        )}
                      </div>
                    </Popup>
                  </Circle>
                ))}
              </MapContainer>
            </div>

            {/* Info Panel */}
            <div className="mt-4 bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
              <h3 className="text-xl font-bold mb-3 text-blue-900">
                ℹ️ Informasi & Insight
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeLayer === "slr" && (
                  <>
                    <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-gray-700">
                        <strong>🔴 Area Paling Kritis:</strong> Jakarta Utara
                        dengan kombinasi SLR + subsidence mencapai 8.3 cm/tahun
                        setara.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border-l-4 border-orange-500">
                      <p className="text-sm text-gray-700">
                        <strong>🟠 Perhatian Khusus:</strong> Kota-kota di Jawa
                        Utara (Semarang, Surabaya) perlu strategi adaptasi
                        jangka panjang.
                      </p>
                    </div>
                  </>
                )}
                {activeLayer === "shoreline" && (
                  <>
                    <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-gray-700">
                        <strong>🔴 Abrasi Parah:</strong> Muara Angke kehilangan
                        1.5m/tahun - prioritas utama penahan gelombang &
                        mangrove restoration.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-gray-700">
                        <strong>🟢 Area Positif:</strong> Pantai Penimbang
                        mengalami akresi alami - potensi untuk ekspansi
                        konservasi.
                      </p>
                    </div>
                  </>
                )}
                {activeLayer === "plastic" && (
                  <>
                    <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-gray-700">
                        <strong>🔴 Hotspot Utama:</strong> Laut Jaya & Semarang
                        harbor - butuh kebijakan pengelolaan sampah yang ketat.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-sm text-gray-700">
                        <strong>🟡 Bali Lebih Baik:</strong> Konsentrasi lebih
                        rendah - fokus pada sungai sebagai primary source
                        kontrol.
                      </p>
                    </div>
                  </>
                )}
                {activeLayer === "mangrove" && (
                  <>
                    <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-gray-700">
                        <strong>🔴 PRIORITAS: Segara Anakan</strong> - degradasi
                        parah, memerlukan restorasi intensif 10+ tahun.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-gray-700">
                        <strong>🟢 Konservasi Utama:</strong> Ujung Kulon &
                        Cilacap - jaga kualitas & perluas area proteksi.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
