// accessing all properties & values
// present in an object present in for....in loop

var msg1 = {to:9575597820,
             msg:"How are you ?",
             delivered:true,
             read:false,
             from:9179612305};

//get all properties defined in
//the object msg1
for(prop in msg1)
    console.log(prop);


//properties & values
for(property in msg1)
     console.log(property + " : " + msg1 [property]);
     
 console.log('--------');
 console.log(msg1["delivered"]);
 var keyX = "delivered";
 console.log(msg1[keyX]);    
             