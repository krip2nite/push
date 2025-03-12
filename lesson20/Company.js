// Object.keys() - returns array of keys
// Object.values() - returns array of values
export default class Company {
    
    constructor() {
        this.employees = {}; //key(object) - name (unique name value), value - employee object(Emploe,wageEmployee,Manager)
    }
    addEmployee(emp){
        this.employees[emp.name] = emp;
    }
    deleteEmployee(emp1){
        delete this.employees[emp1.name];
    }
    getDepBudget(department){
        // const result = [];
        // let final = 0;
        // for (let name in this.employees)
        //     if(this.employees[name].department == department)
        //         result.push(this.employees[name]);
        // for (let name in result){
        //     final += result[name].basicSalary;
        // }
        // return result;
        const budgetRes = this.getEmployeeDepartment(department).reduce((acc, cur) => acc + cur.computeSalary(), 0);
        return budgetRes;
        // returns total salary of all employees working in the given department
    }
    getEmployeeMaxSalary(){
        // const result = [];
        // console.log(`${result}`);
        // let maxSalary = 0;
        // for (let name in this.employees)
        //     if (result.length == 0)
        //         result.push(this.employees[name].department);
        //     else
        //         if(this.employees[name].department != result[name.department])
        //             result.push(this.employees[name].department);
        // console.log(`${result}`)
        // return result;
        const allEmployees = Object.values(this.employees);
        const maxSalary = Math.max(...allEmployees.map(e => e.computeSalary()));
        const employeesRes = allEmployees.filter(e => e.computeSalary() == maxSalary);
        return employeesRes;
        // returns array of employees with maximal salary
    }
    getEmployeeDepartment(department){
        // const result = [];
        // for (let name in this.employees)
        //     if(this.employees[name].department == department)
        //         result.push(this.employees[name]);
        // return result;
        const employeesRes = Object.values(this.employees)
        .filter(empl =>empl.department === department);
        return employeesRes;
        // returns array of employees working in the given department
    }
    getAllEmployees(){
        return this.employees;
    }
}