

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