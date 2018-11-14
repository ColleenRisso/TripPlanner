const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

let body = document.getElementsByTagName('body')

mapboxgl.accessToken = 'pk.eyJ1IjoiY29sbGVlbmFtZWxpZSIsImEiOiJjam9nZjVhNTQwZWY0M3FwamVobDBmdWYxIn0.4TsGkyF-l1UwzYe7l5wFfQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('hotel', [-74.009, 40.705])
console.log(marker)
marker.addTo(map)

// new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map)

// new mapboxgl.Marker(body).setLngLat([-74.009151, 40.705086]).addTo(map);
