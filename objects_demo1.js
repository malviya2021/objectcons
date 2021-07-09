//creating object using object literal i.e {}
var myCar = {};
     
console.log(myCar);







//property pointing to a function

var myCar = {
    name:'Tiago',
    model:2019,
    color:'Orange',
    speed:0,
    move:function(){
        this.speed++;
    }
};


myCar.move();myCar.move();myCar.move();
console.log(myCar.speed);