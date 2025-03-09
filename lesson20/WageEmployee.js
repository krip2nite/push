import Employe from "./Employe";
export default class WageEmployee extends Employe {
    constructor(name, basicSalary, department, hours, wage){
        super(name, basicSalary, department);
        this.hours = hours;
        this.wage = wage;
    }
    computeSalary(){
        const res = super.computeSalary() + this.hours * this.wage;
        return res;
    }
}