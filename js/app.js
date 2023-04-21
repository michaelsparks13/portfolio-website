import { projects } from "./projects.js";

/* HELPER FUNCTIONS */

function createList(projects) {
  for (let project in projects) {
    let projBox = document.createElement("div");
    projBox.setAttribute("class", "proj-card show-on-scroll");

    document.querySelector(".proj-cards").appendChild(projBox);

    let content = `<a href=${projects[project].link} target="_" role="button">
                   <img class="card-img-top" src="${projects[project].img}">
                    <h1 class="card-title">${projects[project].name}</h1>
                    <p class="card-text">${projects[project].info}</p>
                    <p>${projects[project].tools}</p>
                    <button type="button" class="btn btn-dark" href=${projects[project].link} target="_">See it here</button>
                   
                   </a>`;

    projBox.innerHTML = content;
  }
}

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
