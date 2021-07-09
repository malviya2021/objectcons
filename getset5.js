//Object.defineProperty()
//Define object
var obj = {counter : 0};
//Define setter
Object.defineProperty(obj, "reset", {
 get : function () {this.counter = 0;}   
});
Object.defineProperty(obj, "increment",  {
    get : function () {this.counter++;}   
});
Object.defineProperty(obj, "decrement",  {
    get : function () {this.counter--;}
});
Object.defineProperty(obj, "add",  {
    set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "substract",  {
    set : function (value) {this.counter -= value;}
});



//Lets play counters
obj.reset;
console.log(obj.counter);
obj.add = 5;
console.log(obj.counter);
obj.substract = 1;
console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);
