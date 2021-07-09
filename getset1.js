//getter example
var emp = {
          name: "rahul",
          city: "Khargone",
          salary: 100000,
          get empCity(){
              return this.city;
          },
          get empName(){
              return this.name;
          }
};

console.log(emp.empCity);
console.log(emp.empName);