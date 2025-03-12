// let first = 1;
// let second = 2;
// [first, second] = [second, first]
// console.log(`second  = ${second}`)
// console.log(`first = ${first}`)

// swap between 2 parameters **interview** question
// import Employe from "./Employe.js";
// import Company from "./Company.js";
import Manager from "./Manager.js";
import { testframework } from "./testframework.js";
import WageEmployee from "./WageEmployee.js";
// const empl1 = new Employe("name1",12000,"DEP1");
// const empl2 = new Employe("name2",13000,"DEP2");
// const empl3 = new Employe("name3",15000,"DEP1");
// const comp1 = new Company();
// comp1.addEmployee(empl1);
// comp1.addEmployee(empl2);
// comp1.addEmployee(empl3);
// comp1.getEmployeeMaxSalary();
// console.log(comp1.getEmployeeDepartment("DEP1"));
// console.log(comp1.getDepBudget("DEP1"));

// testframework("computeSalary testing", 
//     'const empl1 = new Employe("name1",12000,"DEP1");' + 
//     'const wageEmpl1 = new WageEmployee("name2", 10000, "DEP1", 100 , 50);' +
//     'const manager = new Manager("name3", 10000, "DEP2", 2)',
// ['empl1.computeSalary()', 'wageEmpl1.computeSalary()', 'manager.computeSalary()'],
// [12000, 15000, 20000]);

testframework("Company methods testing",
   "const company = new Company();" +
     'company.addEmployee(new Employe("name1", 10000, "Dep1"));' +
     'company.addEmployee(new WageEmployee("name2", 10000, "Dep1", 100, 100));' +
     'company.addEmployee(new Manager("name3", 10000, "Dep2", 2));',
     ['!!company.employees.name1 && !!company.employees.name2 && !!company.employees.name3',
         'company.deleteEmployee(new Employe("name3")); !!company.employees.name3',
         'company.getDepBudget("Dep1")',
         'company.getEmployeeMaxSalary()',
         'company.getEmployeeDepartment("Dep2")'
     ],
     [true, false, 30000, [new WageEmployee("name2", 10000, "Dep1", 100, 100),
         new Manager("name3", 10000, "Dep2", 2)], [new Manager("name3", 10000, "Dep2", 2)]
     ]);
// TODO
// writing tests for all company methods
// testframework("Company testing",