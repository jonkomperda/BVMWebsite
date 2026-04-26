const justice = [41.7445, -87.8378];
const radiusMeters = 160934;

if (window.lucide) {
  window.lucide.createIcons();
}

function initServiceMap() {
  const mapEl = document.getElementById("service-map");

  if (!mapEl || !window.L) {
    return;
  }

  mapEl.querySelector(".map-fallback")?.remove();

  const map = window.L.map(mapEl, {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView(justice, 8);

  window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const radius = window.L.circle(justice, {
    radius: radiusMeters,
    color: "#f4b24d",
    weight: 2,
    fillColor: "#42d2c5",
    fillOpacity: 0.13,
  }).addTo(map);

  window.L.marker(justice)
    .addTo(map)
    .bindPopup("<strong>BVM Surveillance</strong><br>Justice, Illinois<br>100-mile service radius");

  map.fitBounds(radius.getBounds(), {
    padding: [26, 26],
  });
}

window.addEventListener("load", initServiceMap);
