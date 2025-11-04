import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
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

export default function MapViewer({
  center = [-6.2088, 106.8456],
  zoom = 8,
  markers = [],
  circles = [],
}) {
  return (
    <MapContainer center={center} zoom={zoom} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.position}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}

      {circles.map((circle, idx) => (
        <Circle
          key={idx}
          center={circle.center}
          radius={circle.radius}
          pathOptions={{ color: circle.color, fillColor: circle.color }}
        >
          <Popup>{circle.label}</Popup>
        </Circle>
      ))}
    </MapContainer>
  );
}
