/* GLOBAL VARS */
const sections = Array.from(document.querySelectorAll(".main-two"))
const myNav = document.querySelector("ul");





/* HELPER FUNCTIONS */

function createNavItem() {
    for (section of sections) {
        sectionName = section.getAttribute("id")
        sectionLink = section.getAttribute("id")

        const listItem = document.createElement("li");

        listItem.innerHTML = `<a class='nav-link' href='#${sectionLink}'>${sectionName}</a>`;

        myNav.appendChild(listItem)
    }
}

const navItems = document.querySelector("ul li");

function sectionInView(element) {
    let sectionPos = element.getBoudingClientRect();
    return (sectionPos.top >=0);
}

function toggleActiveClass() {
    for (section of sections) {
        if (sectionInView(section)) {
            if (!section.classList.contains('active')) {
                section.classList.add('active');
            }
        } else {
            section.classList.remove('active')
        }
    }
}



/* RUN FUNCTIONS */

createNavItem();

document.addEventListener("scroll", toggleActiveClass);