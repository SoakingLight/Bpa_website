let data = '[ {"brand": "Ford","model": "maverick","year": 2022,"color": "black","price": "10,000","imageURL": "assets/testimage.png"}, {"brand": "Bugatti","model": "the tate","year": 2019,"color": "red","price": "1,000,000","imageURL": ""}]';

const vehicleArray = JSON.parse(data);

document.getElementById("main").innerHTML = `<div class = "vehicleDiv"> <img height = "200px" src = "${vehicleArray[0].imageURL}"> <h1> ${vehicleArray[0].year + " " + vehicleArray[0].color + " " + vehicleArray[0].brand + " " + vehicleArray[0].model} </h1> </div>`;

