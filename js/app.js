/* GLOBAL VARS */
const sections = Array.from(document.querySelectorAll("section"))
const myNav = document.querySelector("ul");
const skillsList = ["JavaScript", "HTML/CSS", "React", "GIS", "Mapbox", "Python", "Pandas", "Plotly"]




/* HELPER FUNCTIONS */

function createNavItem() {
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

const skillsDiv = document.querySelector(".skills")

const createSkillsList = (array, element) => {
    // array.forEach(skill => {
    //     const li = document.createElement("li")
    //     li.textConent = skill
    //     element.appendChild(li)
    // })

    for (i = 0; i < array.length; i++) {
        let btn = document.createElement("button")
        btn.innerText = array[i]
        btn.setAttribute('type', 'button')
        element.appendChild(btn)
    }
}

//maybe useful for filtering list https://www.youtube.com/watch?v=kLFRFy2S6X8



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
createSkillsList(skillsList, skillsDiv);
