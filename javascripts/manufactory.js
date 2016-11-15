
function Car () {
  this.manufactured_date = Date.now();
}

function YourFavoriteMake () {
  this.manufacturer = "subaru";
}
YourFavoriteMake.prototype = new Car(); 


function SecondFavMake () {
  this.manufacturer = "lexus";
}
SecondFavMake.prototype = new Car();


function YourFavoriteModel () {
  this.model = "sti";
  this.type = "four door sedan";
  this.horsepower = "305 hp";
  this.torque = "290 ft lb";
}
YourFavoriteModel.prototype = new YourFavoriteModel();


let myFirstFavoriteCar = new YourFavoriteModel();
myFirstFavoriteCar.plate_number = "123456";

let mySecondFavoriteCar = new YourFavoriteModel();
mySecondFavoriteCar.plate_number = "654321";

let myThirdFavoriteCar = new YourFavoriteModel();
myThirdFavoriteCar.plate_number = "aabbcc";



function AnotherModel () {
  this.model = "sc400";
  this.horsepower = "288 hp";
  this.type = "coupe";
}
AnotherModel.prototype = new SecondFavMake();




let myFourthFavCar = new AnotherModel();
myFourthFavCar.plate_number = "666";

console.log("myFirstFavoriteCar", myFirstFavoriteCar);
console.log("mySecondFavoriteCar", mySecondFavoriteCar);
console.log("myThirdFavoriteCar", myThirdFavoriteCar);
console.log("myFourthFavCar", myFourthFavCar);


