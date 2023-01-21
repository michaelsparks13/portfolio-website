 // center map on cape town
 let options = {
    center: [38.53784243091848, -100.76566617010869],
    zoom: 2,
  };

  let map = L.map("map", options);

  //   create map details
  let basemap_url =
    "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}";

  let basemap_attributes = {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20,
    ext: "png",
  };

  let tiles = L.tileLayer(basemap_url, basemap_attributes).addTo(map);

  let message = "Cape Town, Western Cape, SA";

  const cityName = "Cape Town",
    cityCoords = [-33.885513604234575, 18.454849596109685];

    // create the Leaflet marker using the coordinates
    L.marker(cityCoords)
    .bindTooltip(cityName)
    .addTo(map);

  // add marker to map
  var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
});

map.on('click', function () {
    sidebar.toggle();
})

map.addControl(sidebar);