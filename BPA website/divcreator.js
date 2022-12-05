const vehicleArray = JSON.parse(data);
let finalDivOutput = "";

for (let i = 0; i != vehicleArray.length; i++) {
finalDivOutput += 
`<div class = "vehicleDiv" ${(i%2 == 0)? 'style = "margin-right: 0;"' : ""}> 
<img height = "200px" src = "${vehicleArray[i].imageURL}"> 
<h1> ${vehicleArray[i].year + " " + vehicleArray[i].color + " " + vehicleArray[i].brand + " " + vehicleArray[i].model} </h1> 
<h2 style = "margin-left: 450px;"> Price: ${"₿" + vehicleArray[i].price} </h2>
<p style = "margin-left: 450px; margin-right: 40px;"> ${vehicleArray[i].description} <br> <br>
    <button> BUY NOW! </button>    
</p>
</div>`
}

document.getElementById("main").innerHTML = finalDivOutput;

function searchHandler () {
    const input = document.getElementById("searchbar").value;
    const inputArray = input.split(" ");
    let gate;
    let output = "";
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
            output += 
            `<div class = "vehicleDiv" ${(i%2 == 0)? 'style = "margin-right: 0;"' : ""}> 
            <img height = "200px" src = "${vehicleArray[i].imageURL}"> 
            <h1> ${vehicleArray[i].year + " " + vehicleArray[i].color + " " + vehicleArray[i].brand + " " + vehicleArray[i].model} </h1> 
            <h2 style = "margin-left: 450px;"> Price: ${"₿" + vehicleArray[i].price} </h2>
            <p style = "margin-left: 450px; margin-right: 40px;"> ${vehicleArray[i].description} <br> <br>
                <button> BUY NOW! </button>    
            </p>
            </div>`
        }
    }

    document.getElementById("main").innerHTML = output;
    console.log(inputArray[0]);
    console.log(finalDivOutput);
    
}

