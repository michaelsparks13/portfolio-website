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

        myNav.appendChild(listItem)
    }
}


// mobile nav
const toggleButton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const bar1 = document.getElementsByClassName('bar')[0]
const bar2 = document.getElementsByClassName('bar')[1]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  bar1.classList.add('bar1')
  bar2.classList.add('bar2')
  bar1.classList.toggle('close')
  bar2.classList.toggle('close')
})



/* RUN FUNCTIONS */

createNavItem();

