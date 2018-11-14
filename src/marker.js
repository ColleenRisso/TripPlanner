const mapbox = require("mapbox-gl");


module.exports = function (type, coordinates){
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.display = 'flex'

  if(type === "hotel"){
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }else if(type === 'restaurant'){
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
  }else{
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
  }
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates)
}
