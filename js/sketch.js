

//create the grid

function generateGrid(size = 32 * 44, cssClass = "medium-default") {
    const gridContainer = document.getElementById("container");

    gridContainer.innerHTML = '';

    gridContainer.classList.remove("low", "medium-default", "high"); 
    gridContainer.classList.add(cssClass);

    for (let i= 1; i <= size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square")
        gridContainer.appendChild(square);
    }

}

generateGrid();


//size the grid

function gridDensity() {
    document.getElementById("low-density").addEventListener("click", 
    function() {
        generateGrid(16*22, "low")
    });

    document.getElementById("medium-density").addEventListener("click", 
    function() {
        generateGrid(32 * 44, "medium-default")
    });

    document.getElementById("high-density").addEventListener("click", 
    function() {
        generateGrid(64 * 88, "high")
    });
}

gridDensity();

//button styling

const btns = document.querySelectorAll("button");

function styleButtons() {
    for (btn of btns) {
        btn.className = "btn btn-dark";
        btn.style.margin = "5px";
    }
}

styleButtons();

//text styling

const heading = document.querySelector("h1");
heading.className = "display-3"; // might have to come back to later and make responsive


const labels = document.getElementsByClassName("label");

function styleLabels() {
    for (label of labels) {
        label.classList.add("h5");
    }
}

styleLabels();

// draw

let activeMode = ''


// function saveText(e) {
//     activeMode = e.textContent;
// }

const modes = document.querySelectorAll(".mode button")

function currentMode() {
     for (mde in modes) {
         mde.addEventListener("click", (e) => {
             activeMode = e.target.textContent;
             console.log(activeMode);
        })
    }
}

currentMode();


const divs = document.getElementsByClassName("grid-square")

function draw() {
    //for each div in grid container
    //add event listener
    //listen for mouseEnter
    //if mode == normal, change background color to slightly darker
    //if mode == modern, change to one of colors a,b,c
    //if mode == cotton candy, change to one of colors x,y,z

    for (div of divs) {
        div.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = 'rgb(100, 100, 100';
        })
    }
}

draw();

const eraseBtn = document.querySelector("#erase")
const defaultGrey = 'rgb(220, 220, 220)'

function erase() {
//     //for button id erase
//     //add event listener
//     //listen for click
//     //for each div, change background color to default
       eraseBtn.addEventListener("click", (e) => {
           for (div of divs) {
               div.style.backgroundColor = defaultGrey;
           }
       }) 
}

erase();