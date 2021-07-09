// create two objects

var car1 = {
           name:'safari',
           color:'white',
           model:2020,
           prize:50000,
           brand:'TATA',
           version:3.2,
           seats:4,
           ingine:'2 stroke',
           move:function(){
               console.log(this.name +' is very powerfull');
               console.log(this.name +' is very efficient');
               console.log(this.name +' is tough');
        
           }
        }
    
var car2 = {
    name:'Nexon',
    color:'Blue',
    model:2021,
    prize:60000,
    brand:'TATA',
    version:3.5,
    seats:6,
    ingine:'4 stroke',
    func1:function(){
        console.log(this.name +' is very powerfull');
        console.log(this.name +' is very efficient');
        console.log(this.name +' is tough');
 
    }
}
      

console.log(car1);
console.log(car2);
car1.move();
car2.func1();




