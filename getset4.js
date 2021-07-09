//playing with the counter
//(Just an example of getter an setter)
var obj = {
    counter:0,
    get reset() {
        this.counter = 0;
    },
    get increment() {
        this.counter++;
    },
    get decrement() {
        this.counter--;
    },
    set add(value) {
        this.counter += value;
        
    },
    set substract(value) {
        this.counter += value;    
    }
};
//Lets play with the counter:
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
