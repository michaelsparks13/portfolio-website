function createNav(item) {
    const myItem = document.createElement("li");
    myItem.textContent = item;
    myItem.setAttribute("class", "nav-link")
    
    const myNav = document.querySelector("ul");

    myNav.appendChild(myItem);
}

createNav("Journalism Projects");
createNav("Software Projects");

// for scrolling & active state you can use querySelectorAll and list[index].textContent 

function activeNav() {
    const navToActivate = document.querySelectorAll(".nav-link")

    navToActivate[0].addEventListener("click", function() {
        navToActivate[0].style.textDecoration = "underline"
    })
    navToActivate[1].addEventListener

}