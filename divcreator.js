const vehicleArray = JSON.parse(data);
function pageWriter (argumentArray) {
let finalDivOutput = "";
var global;

for (let i = 0; i != argumentArray.length; i++) {
finalDivOutput += 
`<div class = "vehicleDiv" ${(i%2 == 0)? 'style = "margin-right: 0;"' : ""}> 
<img height = "200px" src = "${argumentArray[i].imageURL}"> 
<h1> ${argumentArray[i].year + " " + argumentArray[i].color + " " + argumentArray[i].brand + " " + argumentArray[i].model} </h1> 
<h2 style = "margin-left: 450px;"> Price: ${"$" + argumentArray[i].price} </h2>
<p style = "margin-left: 450px; margin-right: 40px;"> ${argumentArray[i].description} <br> <br>
    <button> BUY NOW! </button>    
</p>
</div>`
}
console.log(global);
document.getElementById("main").innerHTML = finalDivOutput;
}

function searchRedirect (input) {
    window.location.href = "vehicle.html";
    global = input;
}

function searchInputGet () {
    const input = document.getElementById("searchbar").value;
    searchHandler(input);
}

function searchHandler (input) {
    const inputArray = input.split(" ");
    let gate;
    let output = [];
    for (let i = 0; i != vehicleArray.length; i++) {
        gate = false;
        for (let foo = 0; foo != inputArray.length; foo++)
            if (vehicleArray[i].brand.toLowerCase().includes(inputArray[foo].toLowerCase()) || 
            vehicleArray[i].model.toLowerCase().includes(inputArray[foo].toLowerCase()) || 
            vehicleArray[i].year.toLowerCase().includes(inputArray[foo].toLowerCase()) || 
            vehicleArray[i].color.toLowerCase().includes(inputArray[foo].toLowerCase())){
                gate = true;
            }
        if (gate == true) {
            output[output.length] = vehicleArray[i];
        }

    }
    pageWriter(output);
}

