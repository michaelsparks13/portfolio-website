const projects = {
  CrowdedParks: {
    name: "CrowdedParks.org",
    coords: [25.314629174232937, -80.93108396464223],
    info: "To start my journalism career, I needed somewhere to publish. So I taught myself how to code and bulit this website. It's pretty cool.",
    tools: "",
    link: "https://www.crowdedparks.org",
    img: "images/projects/crowded-cover.jpg",
  },

  Flavortown: {
    name: "Flavortown, USA",
    coords: [36.13835786130589, -95.92951703890127],
    info: "Guy Fieri, my personal hero, has been to almost 1,400 restaurants (as of Jan 2023) on his flagship show Diners, Drive-ins, and Dives. This awesome map shows you where they are.",
    tools:
      "Made with Mapbox Studio & Mapbox GL to design and place the map. Python & BeautifulSoup to scrape the data.",
    link: "https://michael-sparks13.github.io/flavortown/",
    img: "images/projects/flavortown.png",
  },

  KenyanEducation: {
    name: "Kenyan Education",
    coords: [0.2853733499853051, 37.87327360373084],
    info: "This map looks at trends in school enrollment by gender, from grades 1 through 8 in Kenya.",
    tools: "Made with Leaflet",
    link: "https://michael-sparks13.github.io/kenyan-education/",
    img: "images/projects/kenya.png",
  },

  UsHousing: {
    name: "US Housing Statistics",
    coords: [39.70891413649224, -105.01057200146928],
    info: "Interactively mapping homeownership rates across the country",
    tools: "Built using Leaflet",
    link: "https://michael-sparks13.github.io/housing-data/",
    img: "images/projects/housing-stats.png",
  },

  Unemployment: {
    name: "US Unemployment Rates",
    coords: [30.483901539326855, -91.13732980931077],
    info: "Interactively mapping 2001-2021 unemployment rates county-by-county",
    tools: "Built using Leaflet",
    link: "https://michael-sparks13.github.io/us-unemployment/",
    img: "images/projects/unemployment.png",
  },

  LotsAndSpaces: {
    name: "Exploring the natural and built environment in Westchester County",
    coords: [41.05306540117774, -73.78076437707696],
    info: "Using data from Westchester County Geohub, I mapped how the county's racial demographics correlate with its natural and built environments",
    tools:
      "Map style made with Mapbox. Data processing done with QGIS and Python Geopandas",
    link: "https://michael-sparks13.github.io/lots-and-spaces/",
    img: "images/projects/parking-lots.png",
  },

  Turbines: {
    name: "Calculating Wind Turbine Density",
    coords: [43.10490761460963, -91.25129270151406],
    info: "Exploring where wind turbines are really located across the country",
    tools: "Layers styled and calculations done with QGIS",
    link: "images/projects/wind-turbine.png",
    img: "images/projects/wind-turbine.png",
  },

  Arches: {
    name: "Natural Arches across the US",
    coords: [31.10480812658743, -85.88757975203619],
    info: "I built this map as a way to explore creating elevation countours in QGIS.",
    tools:
      "I used GDAL and QGIS to convert raster elevation units and create contours. Mapbox to display the final data and styles.",
    link: "https://michael-sparks13.github.io/arches/",
    img: "images/projects/arches.jpeg",
  },

  PCT: {
    name: "The Pacific Crest Trail",
    coords: [46.07966073152327, -118.32050841369403],
    info: "I took an old school map of the US in 1957 by Erwin Raisz, vectorized it in QGIS, and then added a country layer and trail layer. I modeled the map's style after the original by Mr. Raisz",
    tools:
      "Made with QGIS to create & style layers & GDAL to vectorize the raster image",
    link: "images/projects/pct.png",
    img: "images/projects/pct.png",
  },

  Assateague: {
    name: "The National Park Where Preservation Isn't the Goal",
    coords: [38.04527891738589, -75.24531372596016],
    info: "I traveled to Assateague Island National Seashore to see their unique approach to handling climate change",
    tools: "Originally published on CrowdedParks.org",
    link: "https://www.crowdedparks.org/articles/assateague-island.html",
    img: "images/projects/assateague.jpeg",
  },

  EV: {
    name: "Electric Vehicles Unplugged",
    coords: [33.948296137016875, -115.92987457271755],
    info: "An exploration of the promises of EVs and the challenges the Park Service faces in transitioning to them.",
    tools: "Originally published on NationalParksTraveler.org",
    link: "https://www.crowdedparks.org/articles/electric-vehicles.html",
    img: "images/projects/solar-array.webp",
  },

  GDP: {
    name: "GDP per Capita and Internet Connectivity",
    coords: [7.188086166883424, -76.03973083459546],
    info: "Mapping how GDP per capita and internet connectivity are correlated around the world",
    tools: "Built with QGIS",
    link: "images/projects/gdp.png",
    img: "images/projects/gdp.png",
  },

  Popden: {
    name: "Visualizing Pennsylvania's Population Density",
    coords: [40.43474454258068, -79.90385417292746],
    info: "Surprising no one, PA's population is concentrated near Philly and Pittsburgh.",
    tools: "Layers styled and calculations done with QGIS",
    link: "images/projects/pa_popden.png",
    img: "images/projects/pa_popden.png",
  },

  Hydropower: {
    name: "Hydropower in New England",
    coords: [46.86855654933388, -68.48888247101007],
    info: "There's a lot of hydropower in New England",
    tools: "Made with Leaflet.",
    link: "https://michael-sparks13.github.io/newengland-hydropower/",
    img: "images/projects/hydropower.png",
  },

  // PaFires: {
  //   name: "Pennsylvania Wildfires",
  //   coords: [41.41369331460013, -75.64258398846081],
  //   info: "Thanks to the US Forest Research Service, we can finally uncover how many wildfires there <em>really</em> are in PA.",
  //   tools: "Layers styled and calculations done with QGIS",
  //   link: "images/projects/pa_fires.png",
  //   img: "images/projects/pa_fires.png",
  // },

  // Volunteers: {
  //   name: "Our National Parks' Secret Weapon? Volunteers.",
  //   coords: [32.28315467563012, -111.16455109035692],
  //   info: "An look into how and why the Park Service relies so heavily on volunteer labor",
  //   tools: "Originally published on CrowdedParks.org",
  //   link: "https://www.crowdedparks.org/articles/volunteers-article.html",
  //   img: "images/projects/volunteers.jpeg",
  // },

  CrowdingPt1: {
    name: "Crowded Parks Part One",
    coords: [46.95420341230037, -103.54198107611549],
    info: "Using data to investigate how crowded national parks really are",
    tools:
      "Data pulled, cleaned, and visualized using Python and Pandas. \nOriginally published on CrowdedParks.org",
    link: "https://www.crowdedparks.org/articles/crowding-part-one.html",
    img: "images/projects/crowded-pt1.jpeg",
  },

  CrowdingPt2: {
    name: "Crowded Parks Part Two",
    coords: [44.65495762347162, -111.00656012920007],
    info: "Using data to investigate how crowded national parks really are",
    tools: "Originally published on CrowdedParks.org",
    link: "https://www.crowdedparks.org/articles/crowding-part-two.html",
    img: "images/projects/crowded-pt2.jpeg",
  },

  // EtchASketch: {
  //   name: "Etch-a-Sketch",
  //   coords: [46.85986952962811, -114.13911146018496],
  //   info: "An interactive game of Etch-a-Sketch. Give it a try!",
  //   tools: "Made with JavaScript",
  //   link: "eng-projects/sketch.html",
  //   img: "images/projects/etchasketch.jpeg",
  // },

  FIRMS: {
    name: "Active Fires and Thermal Anomalies",
    coords: [22.73180141686002, -102.09298985456519],
    info: "Using an API provided by NASA, this map shows active fires and thermal anomalies for a week in May 2022. You can over over each point to learn more about it.",
    tools: "Made with NASA's Fire Info for Resource Mgmt API",
    link: "https://michaelsparks13.github.io/firms/",
    img: "images/projects/fire.png",
  },

  //   end of projects object
};

export { projects };
