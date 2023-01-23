import { projects } from "./projects.js";

// center map on cape town
let options = {
  center: [30.654162719283736, 3.679454918417687],
  zoom: 2,
};

let map = L.map("map", options);

//   create map details
let basemap_url =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png";

let basemap_attributes = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
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
      .addTo(map)
      
    markersLayer.addLayer(mkr);
  }
}

function boundMap(coords) {
    map.fitBounds(coords)
}

let close;

function markerOnClick(e) {
  
    let sb = document.getElementById("sidebar");
    let project = e.layer.options.title;
    sb.innerHTML = "";
    
    let content = `
    <article class="sidebar-content">
    <h1>${projects[project].name}</h1>
    <div class="info-content">
        <div><img src="${projects[project].img}" alt="project image">
        <div class="info-description">${projects[project].info}</div>
        <div class="tools">${projects[project].tools}</div>
        <div><a href="${projects[project].link}" target="_" alt="$maps[k].cityName} map">See it here</a></div>
    </div>
    </article>`;

    sb.innerHTML += content;
    sidebar.toggle();


    //can i refactor this into a standalone function?
    map.fitBounds([e.latlng], {
        maxZoom:10,
        paddingTopLeft: [200, 50]
        }
    );

    close = document.getElementsByClassName("close")

    close[0].addEventListener("click", function() {
        map.setView([38.53784243091848, -100.76566617010869], 2);
    })
}

createMarkers(projects);
map.addControl(sidebar);
markersLayer.on("click", markerOnClick);