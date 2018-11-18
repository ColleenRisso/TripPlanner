const { Marker } = require("mapbox-gl");

const iconURLS = {
  hotels: "url(http://i.imgur.com/D9574Cu.png)",
  restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
  activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const buildMarker = (type, coordinates) => {
  const markerElement = document.createElement('div');
  markerElement.style.width = '32px';
  markerElement.style.height = '37px';
  markerElement.style.backgroundImage = `url(${iconURLS[type]})`;
  return new Marker(markerElement).setLngLat(coordinates)
}

module.exports = buildMarker
