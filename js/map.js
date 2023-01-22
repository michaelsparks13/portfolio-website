import { projects } from "./projects.js";

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

// add marker to map
let sidebar = L.control.sidebar("sidebar", {
  position: "left",
});

let markersLayer = L.featureGroup().addTo(map);

function createMarkers(projects) {
  for (let project in projects) {
    let mkr = L.marker(projects[project].coords, { title: project })
      .bindPopup(projects[project].name)
      .addTo(map);

    markersLayer.addLayer(mkr);
  }
}

markersLayer.on("click", markerOnClick);

function markerOnClick(e) {
  let sb = document.getElementById("sidebar");
  let project = e.layer.options.title;
  let content = "";
  sb.innerHTML = content;
  content = `
   <article class="sidebar-content">
   <h1>${projects[project].name}</h1>
   <div class="info-content">
     <div class="info-description">${projects[project].info}</div>
     <div><a href="${projects[project].link}" target="_" alt="$maps[k].cityName} map">Map</a></div>
   </div>
 </article>`;

  sb.innerHTML += content;
  sidebar.toggle();
}

createMarkers(projects);
map.addControl(sidebar);
