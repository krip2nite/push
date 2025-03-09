// let first = 1;
// let second = 2;
// [first, second] = [second, first]
// console.log(`second  = ${second}`)
// console.log(`first = ${first}`)

// swap between 2 parameters **interview** question
import { testframework } from "./testframework";

testframework("computeSalary testing", 
    'const empl1 = new Employe("name1",12000,"DEP1");' + 
    'const wageEmpl1 = new WageEmployee("name2", 10000, "DEP1", 100 , 50);' +
    'const manager = new Manager("name3", 10000, "DEP2", 2)',
['emp1.computeSalary()', 'wageEmpl1.computeSalary()', 'manager.computeSalary()'],
[12000, 15000, 20000]);