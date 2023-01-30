/* GLOBAL VARS */
const sections = Array.from(document.querySelectorAll("section"));
const myNav = document.querySelector("ul");


/* HELPER FUNCTIONS */

function createNavItem() {
  for (section of sections) {
    sectionName = section.getAttribute("id");
    sectionLink = section.getAttribute("id");

    const listItem = document.createElement("li");

    if (!sectionName) {
      //pass
    } else {
      listItem.innerHTML = `<a class='nav-link' href='#${sectionLink}'>${sectionName}</a>`;
    }

    myNav.appendChild(listItem);
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

// mobile nav
const toggleButton = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];
const bar1 = document.getElementsByClassName("bar")[0];
const bar2 = document.getElementsByClassName("bar")[1];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  bar1.classList.add("bar1");
  bar2.classList.add("bar2");
  bar1.classList.toggle("close");
  bar2.classList.toggle("close");
});

/* RUN FUNCTIONS */

createNavItem();
loop();
