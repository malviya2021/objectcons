// empty object

var myCar = { };

console.log(myCar);



//property pointing to a function

var myCar = {
            name: "Tiago",
            model: 2018,
            color: "White",
            speed: 0,
            move: function(){
                this.speed++;
            }
};

myCar.move();myCar.move();myCar.move();
console.log(myCar.speed);

