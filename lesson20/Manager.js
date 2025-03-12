import Employe from "./Employe.js";
export default class Manager extends Employe {
    constructor (name, basicSalary, department, factor){
        super(name, basicSalary, department);
        this.factor = factor;
    }
    computeSalary(){
        const res = super.computeSalary() * this.factor;
        return res;
    }
}