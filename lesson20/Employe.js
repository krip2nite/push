// new syntax
export default class Employe {
    constructor(name , basicSalary, department){
        this.name = name;
        this.basicSalary = basicSalary;
        this.department = department;
    }
    computeSalary(){
        return this.basicSalary;
    }
}