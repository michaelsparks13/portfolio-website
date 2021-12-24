

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
        if (btn.id == "erase") {
            btn.className = "btn btn-danger"
        } else {
        btn.className = "btn btn-light";
        btn.style.margin = "5px";
        }
    }
}

styleButtons();

//text styling

const heading = document.querySelector("h1");
heading.className = "display-2"; // might have to come back to later and make responsive
heading.style.color = '#d9ffbc'
heading.style.fontFamily = "cursive"


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
const psychedelicColors = ['#46FF31', '#31FFCD', '#3180FF', '#9231FF', '#FF31BB', '#FF5731', '#F6FF31']
const modernColors = ['#1f1f1f', '#86b9ce', '#7772e2', '#4274fd', '#62c799', '#fba66c', '#fdd149']



function draw() {
   
    for (div of divs) {
        div.count = 0;
        div.addEventListener("mouseenter", (e) => {
            if (activeMode == 'Normal') {
                e.target.style.backgroundColor = 'rgb(150, 150, 150';
                e.target.count++;
                e.target.style.opacity = e.target.count * 0.2;
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

       eraseBtn.addEventListener("click", (e) => {
           for (div of divs) {
               div.style.backgroundColor = defaultGrey;
               div.style.opacity = 1;
           }
       }) 
}

erase();