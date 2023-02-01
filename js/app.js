import { projects } from "./projects.js";


/* HELPER FUNCTIONS */

function createList(projects) {
  for (let project in projects) {
    let projBox = document.createElement("div")
        projBox.setAttribute('class', 'proj-card show-on-scroll')
    
    // const projImg = document.createElement("img");
    // const projInfo = document.createElement("div");
    document.querySelector('.proj-cards').appendChild(projBox)

    let content = `<a href=${projects[project].link} target="_">
                   <img class="proj-img" src="${projects[project].img}">
                   <h1>${projects[project].name}</h1>
                   <p class="proj-description">${projects[project].info}<p>
                   <p>${projects[project].tools}<p>
                   <a href=${projects[project].link} target="_">See it here</a></a>`

    projBox.innerHTML = content;

  }
};

/*

SCROLLING ANIMATION

*/

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    }
  });

  scroll(loop);
}

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

/* RUN FUNCTIONS */
loop();
createList(projects);
