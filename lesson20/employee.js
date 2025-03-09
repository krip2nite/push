// Arrow function cannot be a method of any object
// const empl1 = {name: "Vasya", basicSalary: 10000,
//     computeSalaryFun: function() {
//         return this.basicSalary()
//     },
//     computeSalaryArrow: () => {
//         return this.basicSalary;
//     }
// }
// const salaryFun = empl1.computeSalaryFun();
// const salaryArrow = empl1.computeSalaryArrow();


const empl1 = {name: "Vasya", basicSalary: 10000,
        computeSalary: function() {
            return this.basicSalary()
        }
    }
// factory method - method creating object is not used if an object has method/s
function createEmployee(name, basicSalary){
const res = {name, basicSalary};
res.computeSalary = function() {
    return this.basicSalary()
}
}

// could be in the test (old syntax)
function Employee(name, basicSalary){
    this.name = name;
    this.basicSalary = basicSalary;
}
Employee.prototype.computeSalary = function()
{
    return this.basicSalary;
}

const empl2 = new Employee("Petya", 10000);
const empl3 = new Employee("Sara", 12000);
const empl2Salary = empl2.computeSalary();
const empl3Salary = empl3.computeSalary();