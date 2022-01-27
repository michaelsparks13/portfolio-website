/* GLOBAL VARS */
const sections = Array.from(document.querySelectorAll("section"))
const myNav = document.querySelector("ul");





/* HELPER FUNCTIONS */

function createNavItem() {
    console.log("We have sections: " + sections)
    for (section of sections) {
        sectionName = section.getAttribute("id")
        sectionLink = section.getAttribute("id")

        const listItem = document.createElement("li");

        if (!sectionName) {
            //pass
        } else {
            listItem.innerHTML = `<a class='nav-link' href='#${sectionLink}'>${sectionName}</a>`;
        }    
        console.log(listItem)

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