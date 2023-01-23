const projects = {
  CapeTown: {
    name: "Cape Town",
    coords: [-33.885513604234575, 18.454849596109685],
    info: "A relatively simple map highlighting some of Cape Town's main attractions. Also uses map markers to indicate a few neighboring towns.",
    tools: "Made with Leaflet",
    link: "https://michael-sparks13.github.io/cape-town/",
    img: "../images/projects/cape-town.webp"
  },

  Flavortown: {
    name: "Flavortown",
    coords: [35.896261041961644, -96.21469091320857],
    info: "Guy Fieri, my personal hero, has been to almost 1,400 restaurants (as of Jan 2023) on his flagship show Diners, Drive-ins, and Dives. This awesome map shows you where they are.",
    tools:
      "Made with Mapbox Studio & Mapbox GL to design and place the map. Python & BeautifulSoup to scrape the data.",
    link: "https://michael-sparks13.github.io/flavortown/",
    img: "../images/projects/guy-fieri.jpeg"
  },

  EtchASketch: {
    name: "Etch-a-Sketch",
    coords: [46.48418197998091, -115.69788726797707],
    info: "An interactive game of Etch-a-Sketch.",
    tools: "Made with JS and DOM manipulation",
    link: "../eng-projects/sketch.html",
    img: "../images/projects/etchasketch.jpeg"
  },

  Parkle: {
    name: "Parkle",
    coords: [39.98245108243665, -110.69302948877049],
    info: "A play on the popular word game, but for parks!",
    tools: "Made with National Park Service API",
    link: "https://michaelsparks13.github.io/guessParks/",
    img: "../images/projects/nps.jpeg"
  },

  FIRMS: {
    name: "Active Fires and Thermal Anomalies",
    coords: [22.73180141686002, -102.09298985456519],
    info: "Using an API provided by NASA, this map shows active fires and thermal anomalies for a week in May 2022. You can over over each point to learn more about it.",
    tools: "Made with NASA Fire Info for Resource Mgmt API",
    link: "https://michaelsparks13.github.io/firms/",
    img: "../images/projects/fire.jpeg"
  },

  PCT: {
    name: "The Pacific Crest Trail",
    coords: [44.19496167340003, -123.71408331786702],
    info: "I took an old school map of the US in 1957 by Erwin Raisz, vectorized it in QGIS, and then added a country layer and trail layer. I modeled the map's style after the original by Mr. Raisz",
    tools: "Made with QGIS & GDAL to vectorize the raster image",
    link: "../images/projects/pct.png",
    img: "../images/projects/pct.png"
  },
  
  EV: {
    name: "Unplugged",
    coords: [33.948296137016875, -115.62987457271755],
    info: "An exploration of the promises of EVs and the challenges the Park Service faces in transitioning to them.",
    tools: "Originally published on NationalParksTraveler.org",
    link: "https://www.crowdedparks.org/articles/electric-vehicles.html",
    img: "../images/projects/solar-array.webp"
  },

  GDP: {
    name: "GDP per Capita and Internet Connectivity",
    coords: [7.188086166883424, -76.03973083459546],
    info: "Mapping how GDP per capita and internet connectivity are correlated around the world",
    tools: "Built with QGIS",
    link: "../images/projects/gdp.png",
    img: "../images/projects/gdp.png"
  },
  
  LotsAndSpaces: {
    name: "Exploring the natural and built environment in Westchester County",
    coords: [41.05306540117774, -73.78076437707696],
    info: "Using data from Westchester County Geohub, I mapped how the county's racial demographics correlate with its natural and built environments",
    tools: "Map style made with Mapbox. Data processing done with QGIS and Python Geopandas",
    link: "https://michael-sparks13.github.io/lots-and-spaces/",
    img: "../images/projects/westchester.webp"
  },

  Turbines: {
    name: "Calculating Wind Turbine Density",
    coords: [43.10490761460963, -91.25129270151406],
    info: "Exploring where wind turbines are really located across the country",
    tools: "Layers styled and calculations done with QGIS",
    link: "../images/projects/wind-turbine.png",
    img: "../images/projects/wind-turbine.png"
  },

  Geoprocessing: {
    name: "Geoprocessing with OSM and QGIS",
    coords: [39.91766323926189, -75.38960351778898],
    info: "Using data from Open Street Map I calculated, using the built-in GDAL library within QGIS, to analyze how many miles of walking paths are in Delaware County, PA",
    tools: "Layers styled and calculations done with QGIS",
    link: "../images/projects/geoprocessing.png",
    img: "../images/projects/geoprocessing.png"
  },

  Popden: {
    name: "Visualizing Pennsylvania's Population Density",
    coords: [41.48205489900087, -77.70132875471792],
    info: "Surprising no one, PA's population is concentrated near Philly and Pittsburgh.",
    tools: "Layers styled and calculations done with QGIS",
    link: "../images/projects/pa_popden.png",
    img: "../images/projects/pa_popden.png"
  },

  Hydropower: {
    name: "Hydropower in New England",
    coords: [46.86855654933388, -68.48888247101007],
    info: "There's a lot of hydropower in New England",
    tools: "Made with Leaflet; Markers drawn with D3",
    link: "https://michael-sparks13.github.io/newengland-hydropower/",
    img: "../images/projects/hydropower.jpeg"
  },

  PaFires: {
    name: "Pennsylvania Wildfires",
    coords: [41.89234418126014, -76.6849071886933],
    info: "More wildfires in PA than you might think",
    tools: "Layers styled and calculations done with QGIS",
    link: "../images/projects/pa_fires.png",
    img: "../images/projects/pa_fires.png"
  },

  Volunteers: {
    name: "The National Park's Secret Weapon? Volunteers.",
    coords: [32.28315467563012, -111.16455109035692],
    info: "An investigation into how the Park Service relies so heavily on volunteer labor",
    tools: "Originally published on CrowdedParks.org",
    link: "https://www.crowdedparks.org/articles/volunteers-article.html",
    img: "../images/projects/volunteers.jpeg"
  },

  CrowdingPt1: {
    name: "Crowding Part 1",
    coords: [47.17045577788941, -102.39525283320644],
    info: "Using data to investigate how crowded national parks really are",
    tools: "Originally published on CrowdedParks.org",
    link: "https://www.crowdedparks.org/articles/crowding-part-one.html",
    img: "../images/projects/crowded-pt1.jpeg"
  },

  CrowdingPt2: {
    name: "Crowding Part 2",
    coords: [44.44165207168299, -110.84092665146639],
    info: "Using data to investigate how crowded national parks really are",
    tools: "Originally published on CrowdedParks.org",
    link: "https://www.crowdedparks.org/articles/crowding-part-two.html",
    img: "../images/projects/crowded-pt2.jpeg"
  },

  Delmarva: {
    name: "Climate Change is Coming for Delmarva",
    coords: [38.425824651494594, -76.10104993831315],
    info: "Traveled to the Delmarva Peninsula to look at how climate change is changing this historic area",
    tools: "Originally published on CrowdedParks.org",
    link: "https://www.crowdedparks.org/articles/delmarva.html",
    img: "../images/projects/delmarva.jpeg"
  },

  Assateague: {
    name: "The national park where preservation isn't the goal",
    coords: [38.04527891738589, -75.24531372596016],
    info: "Traveled to the Assateague Island to see their unique approach to handling climate change",
    tools: "Originally published on CrowdedParks.org",
    link: "https://www.crowdedparks.org/articles/assateague-island.html",
    img: "../images/projects/assateague.jpeg"
  },

  FireIsland: {
    name: "A breach in Fire Island",
    coords: [40.700275262920506, -72.95833157451744],
    info: "Fire Island",
    tools: "Originally published on NationalParksTraveler.org",
    link: "https://www.crowdedparks.org/articles/fire-island.html",
    img: "../images/projects/fire-island.jpeg"
  },

  Expansion: {
    name: "Eastern Expansion",
    coords: [35.611474138485065, -83.68414686633372],
    info: "expanding parks",
    tools: "Originally published on NationalParksTraveler.org",
    link: "https://www.crowdedparks.org/articles/eastern-expansion.html",
    img: "../images/projects/eastern-expansion.jpeg"
  },

  Expansion: {
    name: "Eastern Expansion",
    coords: [35.611474138485065, -83.68414686633372],
    info: "expanding parks",
    tools: "Originally published on NationalParksTraveler.org",
    link: "https://www.crowdedparks.org/articles/eastern-expansion.html",
    img: "../images/projects/eastern-expansion.jpeg"
  },

  Hatteras: {
    name: "house falling cape hatteras",
    coords: [35.397478946946556, -75.48899745843084],
    info: "a house fell down",
    tools: "Originally published on NationalParksTraveler.org",
    link: "https://www.crowdedparks.org/articles/sea-level-rise.html",
    img: "../images/projects/cape-hatteras.jpeg"
  },

  CrowdedParks: {
    name: "CrowdedParks",
    coords: [25.314629174232937, -80.93108396464223],
    info: "i kick ass",
    tools: "I built it; self taught",
    link: "https://www.crowdedparks.org",
    img: "../images/projects/cape-hatteras.jpeg"
  },

  Arches: {
    name: "Natural Arches across the US",
    coords: [31.10480812658743, -85.88757975203619],
    info: "i kick ass",
    tools: "I built it; self taught",
    link: "https://michael-sparks13.github.io/arches/",
    img: "../images/projects/arches.jpeg"
  },

  Aus: {
    name: "cities in australia",
    coords: [-31.89917642592571, 116.11606502685913],
    info: "i kick ass",
    tools: "I built it; self taught",
    link: "https://michael-sparks13.github.io/australia/",
    img: "../images/projects/aus.jpeg"
  },

//   end of projects object
};

export { projects };
