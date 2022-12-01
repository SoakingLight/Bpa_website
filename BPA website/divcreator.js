const vehicleArray = JSON.parse(data);
let finalDivOutput = "";

for (let i = 0; i != vehicleArray.length; i++) {
finalDivOutput += 
`<div class = "vehicleDiv" ${(i%2 == 0)? "" : 'style = "float: right;"'}> 
<img height = "200px" src = "${vehicleArray[i].imageURL}"> 
<h1> ${vehicleArray[i].year + " " + vehicleArray[i].color + " " + vehicleArray[i].brand + " " + vehicleArray[i].model} </h1> 
<h2 style = "margin-left: 450px;"> Price: ${"₿" + vehicleArray[i].price} </h2>
<p style = "margin-left: 450px; margin-right: 40px;"> ${vehicleArray[i].description} <br> <br>
    <button> BUY NOW! </button>    
</p>
</div>`
}

document.getElementById("main").innerHTML = finalDivOutput;

