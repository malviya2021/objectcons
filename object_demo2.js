// creating object using new key word

var myCar = new Object();  //object constructor
myCar.color = "white",
myCar.model = 2018,
myCar.speed = 0,
myCar.move = function(){
    this.speed++;
}

console.log(myCar.name);
console.log(myCar["model"]);
console.log(myCar.color);
myCar.move();


console.log(myCar.speed);
