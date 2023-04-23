import { projects } from "./projects.js";

//alaksa to ~madagascar
const bounds = [
  [54.05000545398244, -132.43583594351836],
  [-12.81285112880556, 49.47422273149212],
];

//center
const center = [22.03642143751412, -35.316932205822646];

// browser window width
let windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

let close;

// ============================
// ============================
// HELPER FUNCTIONS
// ============================
// ============================

function setInitialMapZoom(windowWidth) {
  // create variable for map zoom level
  let mapZoom;
  // test for various browser widths
  if (windowWidth < 500) {
    mapZoom = 4;
  } else {
    mapZoom = 6;
  }
  return mapZoom;
}

function createMarkers(projects) {
  for (let project in projects) {
    let mkr = L.marker(
      projects[project].coords,
      { title: project, icon: blackIcon }
    ).addTo(map);
    markersLayer.addLayer(mkr);
    console.log(mkr)
  }
}

function boundMap(coords) {
  map.fitBounds(coords);
}

function showSideBar(e) {
  let sb = document.getElementById("sidebar");
  let project = e.layer.options.title;
  sb.innerHTML = "";

  //create sidebar content
  let content = `
    <article class="sidebar-content">
    <h1>${projects[project].name}</h1>
    <div class="info-content">
        <div><img src="${projects[project].img}" alt="project image">
        <div class="info-description">${projects[project].info}</div>
        <div class="tools">${projects[project].tools}</div>
        <div class="proj-link"><a href="${projects[project].link}" target="_" alt="$maps[k].cityName} map">See it here</a></div>
    </div>
    </article>`;

  sb.innerHTML += content;
  sidebar.toggle();

  //bound map to proj location when sidebar is open
  map.fitBounds([e.latlng], {
    maxZoom: 9,
    paddingTopLeft: [200, 50],
  });

  close = document.getElementsByClassName("close");

  //center zoom and minZoom on sidebar close
  close[0].addEventListener("click", function () {
    map.setView(boundMap(bounds), 2);
  });
}

function showPopUp(e) {
  let project = e.layer.options.title;

  L.popup({
    offset: [0, -32],
    className: "popup",
  })
    .setLatLng(projects[project].coords)
    .setContent(`${projects[project].name}`)
    .openOn(map);
}

// ============================
// ============================
//  MAP
// ============================
// ============================

let options = {
  zoom: setInitialMapZoom(windowWidth),
};

let map = L.map("map", options);

var blackIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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

//sidebar via https://github.com/Turbo87/leaflet-sidebar
let sidebar = L.control.sidebar("sidebar", {
  position: "left",
});

let markersLayer = L.featureGroup().addTo(map);

//map.setMaxBounds(bounds);

// run functions to create map
boundMap(bounds);
createMarkers(projects);
map.addControl(sidebar);
markersLayer.on("click", showSideBar);
markersLayer.on("mouseover", showPopUp);
