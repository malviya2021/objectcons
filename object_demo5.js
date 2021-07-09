// adding and deleting new properties in an existing object
// accessing all properties & values
// present in an object present in for....in loop

var msg1 = {to:9575597820,
    msg:"How are you ?",
    delivered:true,
    read:false,
    from:9179612305};

//properties & values

for(property in msg1)
console.log(property + " : " + msg1[property]);
console.log("-------");
msg1.timestamp = 10;


for(property in msg1)
console.log(property + " : " + msg1 [property]);

console.log('--------');
delete msg1.from;
for(property in msg1)
      console.log(property + " : " + msg1[property]);  
      
      






    