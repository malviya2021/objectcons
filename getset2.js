//setter example
var emp = {
         name: "Rahul",
         city: "Inore",
         salary: 200000,

       set empCity(empCity) {
           this.city = empCity;
       },

       set empName(empName) {
           this.name = empName;
       }
    };

    emp.empCity = "Delhi";
    emp.empName = "Hitesh";

    console.log(emp["name"]);
    console.log(emp.city);

