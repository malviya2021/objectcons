//adding function to an existing object
var ford = {name:"Aspire",
            colour:"Blue",
            

};

ford.printDetails = function(){
    console.log(this.name + " " + this.colour);
}


ford.printDetails();