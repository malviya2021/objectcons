//creating object using new key word / object() Constructor

var myCar = new object();  //object constructor
myCar.name = 'Tiago';
myCar.color = 'Oreange';
myCar.model = 2020;
myCar.speed = 0;
myCar.move = function(){
    this.speed++;
};

console.log(myCar.name);
console.log(myCar["model"]);
console.log(myCar.color);
myCar.move();

console.log(myCar.speed);