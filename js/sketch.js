

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
        draw();
    });

    document.getElementById("medium-density").addEventListener("click", 
    function() {
        generateGrid(32 * 44, "medium-default")
        draw();
    });

    document.getElementById("high-density").addEventListener("click", 
    function() {
        generateGrid(64 * 88, "high")
        draw();
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

let activeMode = 'Normal'


const modes = document.querySelectorAll(".mode button")

function currentMode() {
    for (mode of modes) {
        mode.addEventListener("click", (e) => {
            activeMode = e.target.textContent;
            console.log(activeMode);
       })
   }
}

currentMode();


const divs = document.getElementsByClassName("grid-square")



// RANDOM    const randomElement = array[Math.floor(Math.random() * array.length)];
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

// PSYCHEDELIC COLORS
const psychedelicColors = ['#46FF31', '#31FFCD', '#3180FF', '#9231FF', '#FF31BB', '#FF5731', '#F6FF31']
const modernColors = ['#fefefe', '#dedae3', '#86b9ce', '#7772e2', '#4274fd', '#62c799', '#fba66c', '#fdd149']

// MODERN COLORS

function draw() {
    //for each div in grid container
    //add event listener
    //listen for mouseEnter
    //if mode == normal, change background color to slightly darker
    //if mode == modern, change to one of colors a,b,c
    //if mode == cotton candy, change to one of colors x,y,z
    
//HOW DO I GET IT TO BE RANDOM FOR EACH SQUARE

    for (div of divs) {
        div.addEventListener("mouseenter", (e) => {
            if (activeMode == 'Normal') {
                e.target.style.backgroundColor = 'rgb(150, 150, 150';
            } else if (activeMode == "Modern") {
                let random = Math.floor(Math.random() * modernColors.length);
                e.target.style.backgroundColor = modernColors[random];
            } else if (activeMode == "Psychedelic") {
                let random = Math.floor(Math.random() * psychedelicColors.length);
                e.target.style.backgroundColor = psychedelicColors[random];
            }         
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