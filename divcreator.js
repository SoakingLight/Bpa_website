let cookieChecker = document.cookie.split('; ');
const vehicleArray = JSON.parse(data);

function initialize () {
    if (!cookieChecker[1]) {
        pageWriter(vehicleArray);
    }
    if (cookieChecker[1].includes('true')) {
           searchHandler(cookieChecker[0].split("=")[1]);
    }
     else {
        pageWriter(vehicleArray);
    }
}



function pageWriter (argumentArray) {
let finalDivOutput = "";

for (let i = 0; i != argumentArray.length; i++) {
finalDivOutput += 
`<div class = "vehicleDiv" ${(i%2 == 0)? 'style = "margin-right: 0;"' : ""}> 
<img height = "200px" style = " margin-top: 10px;" src = "${argumentArray[i].imageURL}"> 
<h1 style = "margin-left: 225px;"> ${argumentArray[i].year + " " + argumentArray[i].color + " " + argumentArray[i].brand + " " + argumentArray[i].model} </h1> 
<h2 style = "margin-left: 250px;"> Price: ${"$" + argumentArray[i].price} </h2>
<h2 style = "margin-left: 250px; margin-right: 40px;"> ${"Mileage: " + argumentArray[i].Miles} <br> <br>
    <button> BUY NOW! </button>    
</h2>
</div>`
}
console.log(cookieChecker[1]);
document.getElementById("main").innerHTML = finalDivOutput;
}

function resetCookies () {
    document.cookie = "areSearch=false; path=/vehicle.html;";
}

function searchRedirect (input) {
    window.location.href = "vehicle.html";
    const d = new Date();
    d.setTime(d.getTime() + 5);
    document.cookie = "searchQuery = " + input + ";path =/vehicle.html;";
    document.cookie = "areSearch = true; path =/vehicle.html;";
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

