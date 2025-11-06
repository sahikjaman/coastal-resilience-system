import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  GeoJSON,
} from "react-leaflet";
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

  // Data untuk berbagai layer
  const layerData = {
    slr: {
      name: "Kenaikan Muka Air Laut",
      icon: "🌊",
      color: {
        2030: "#yellow",
        2050: "#orange",
        2100: "#red",
      },
      circles: [
        {
          center: [-6.1256, 106.8273],
          radius: 15000,
          color: "red",
          label: "Jakarta Utara - SLR Tinggi",
          value: "0.38m",
        },
        {
          center: [-6.9271, 110.4185],
          radius: 12000,
          color: "orange",
          label: "Semarang - SLR Sedang",
          value: "0.35m",
        },
        {
          center: [-8.6705, 115.2126],
          radius: 10000,
          color: "yellow",
          label: "Bali - SLR Rendah",
          value: "0.30m",
        },
      ],
    },
    shoreline: {
      name: "Perubahan Garis Pantai",
      icon: "🏖️",
      color: { erosion: "#red", accretion: "#green" },
      circles: [
        {
          center: [-6.1256, 106.8273],
          radius: 12000,
          color: "red",
          label: "Erosion: -1.5m/yr",
          value: "-52.5m",
        },
        {
          center: [-6.9271, 110.4185],
          radius: 10000,
          color: "orange",
          label: "Erosion: -0.8m/yr",
          value: "-24m",
        },
        {
          center: [-8.6705, 115.2126],
          radius: 8000,
          color: "green",
          label: "Accretion: +0.5m/yr",
          value: "+12m",
        },
      ],
    },
    plastic: {
      name: "Sampah Plastik Pesisir",
      icon: "♻️",
      color: { high: "#red", medium: "#orange", low: "#yellow" },
      circles: [
        {
          center: [-6.1256, 106.8273],
          radius: 10000,
          color: "red",
          label: "Hotspot: 18.5 kg/km²",
          value: "Sangat Tinggi",
        },
        {
          center: [-6.9271, 110.4185],
          radius: 12000,
          color: "orange",
          label: "Hotspot: 12.3 kg/km²",
          value: "Tinggi",
        },
        {
          center: [-8.6705, 115.2126],
          radius: 8000,
          color: "yellow",
          label: "Area: 5.2 kg/km²",
          value: "Sedang",
        },
      ],
    },
    mangrove: {
      name: "Kesehatan Mangrove",
      icon: "🌿",
      color: { healthy: "#green", degraded: "#red" },
      circles: [
        {
          center: [-5.852, 106.5741],
          radius: 20000,
          color: "green",
          label: "Sehat: NDVI 0.85",
          value: "8,500 ha",
        },
        {
          center: [-6.9271, 110.4185],
          radius: 15000,
          color: "orange",
          label: "Degradasi: NDVI 0.45",
          value: "6,200 ha",
        },
        {
          center: [-8.6705, 115.2126],
          radius: 12000,
          color: "red",
          label: "Kritis: NDVI 0.25",
          value: "3,100 ha",
        },
      ],
    },
  };

  const current = layerData[activeLayer];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {current.icon} {current.name}
          </h1>
          <p className="text-gray-600">
            Klik layer atau gunakan kontrol parameter di bawah
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Sidebar - Layer Control & Parameters */}
          <div className="lg:col-span-1 space-y-4">
            {/* Layer Buttons */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-lg mb-4">📊 Pilih Layer</h3>
              <div className="space-y-2">
                {Object.entries(layerData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setActiveLayer(key)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                      activeLayer === key
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {data.icon} {data.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter Control */}
            {activeLayer === "slr" && (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="font-bold text-lg mb-4">⚙️ Parameter</h3>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Target Tahun:{" "}
                    <span className="text-blue-600 font-bold">{slrYear}</span>
                  </label>
                  <input
                    type="range"
                    min="2030"
                    max="2100"
                    step="10"
                    value={slrYear}
                    onChange={(e) => setSlrYear(parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>2030</span>
                    <span>2050</span>
                    <span>2100</span>
                  </div>
                </div>

                {/* SLR Value */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Proyeksi SLR {slrYear}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    +
                    {slrYear === 2030
                      ? "0.3"
                      : slrYear === 2050
                      ? "0.5"
                      : "1.0"}{" "}
                    m
                  </p>
                </div>
              </div>
            )}

            {/* Legend */}
            {showLegend && (
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="font-bold text-lg mb-4">🎨 Legenda</h3>
                <div className="space-y-2 text-sm">
                  {activeLayer === "slr" && (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-500"></div>
                        <span>Risiko Tinggi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                        <span>Risiko Sedang</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                        <span>Risiko Rendah</span>
                      </div>
                    </>
                  )}
                  {activeLayer === "shoreline" && (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-500"></div>
                        <span>Erosion: -m/yr</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                        <span>Stable</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <span>Accretion: +m/yr</span>
                      </div>
                    </>
                  )}
                  {activeLayer === "plastic" && (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-500"></div>
                        <span>Sangat Tinggi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                        <span>Tinggi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                        <span>Sedang</span>
                      </div>
                    </>
                  )}
                  {activeLayer === "mangrove" && (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-600"></div>
                        <span>Sehat (NDVI &gt;0.7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                        <span>Sedang (NDVI 0.4-0.7)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-500"></div>
                        <span>Degradasi (NDVI &lt;0.4)</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Map - Main Content */}
          <div className="lg:col-span-3">
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{ height: "700px" }}
            >
              <MapContainer
                center={[-6.2088, 106.8456]}
                zoom={7}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />

                {/* Render circles berdasarkan active layer */}
                {current.circles.map((circle, idx) => (
                  <Circle
                    key={idx}
                    center={circle.center}
                    radius={circle.radius}
                    pathOptions={{
                      color: circle.color,
                      fillColor: circle.color,
                      fillOpacity: 0.6,
                      weight: 2,
                    }}
                  >
                    <Popup>
                      <div className="p-2">
                        <p className="font-bold">{circle.label}</p>
                        <p className="text-sm text-gray-600">{circle.value}</p>
                      </div>
                    </Popup>
                  </Circle>
                ))}
              </MapContainer>
            </div>

            {/* Info Card */}
            <div className="mt-4 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-3">ℹ️ Informasi Layer</h3>
              {activeLayer === "slr" && (
                <p className="text-gray-700">
                  Peta ini menunjukkan proyeksi kenaikan muka air laut untuk
                  tahun <strong>{slrYear}</strong>. Area berwarna merah
                  menunjukkan risiko tertinggi, sementara kuning menunjukkan
                  risiko rendah. Gunakan slider parameter untuk melihat proyeksi
                  di tahun berbeda (2030, 2050, 2100).
                </p>
              )}
              {activeLayer === "shoreline" && (
                <p className="text-gray-700">
                  Analisis perubahan garis pantai menggunakan citra satelit
                  multitemporal dari 1990-2025. Area merah menunjukkan erosion
                  (abrasi), sementara hijau menunjukkan accretion. Data dari
                  DSAS (Digital Shoreline Analysis System).
                </p>
              )}
              {activeLayer === "plastic" && (
                <p className="text-gray-700">
                  Pemetaan hotspot sampah plastik berdasarkan analisis
                  Sentinel-2 dan survey lapangan. Warna merah menunjukkan
                  konsentrasi tertinggi. Data diperbarui secara berkala.
                </p>
              )}
              {activeLayer === "mangrove" && (
                <p className="text-gray-700">
                  Indeks kesehatan mangrove dihitung menggunakan NDVI dari citra
                  Sentinel-2. Area hijau menunjukkan mangrove sehat, sementara
                  merah/hitam menunjukkan degradasi. Prioritas restorasi
                  difokuskan pada area kritis.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
