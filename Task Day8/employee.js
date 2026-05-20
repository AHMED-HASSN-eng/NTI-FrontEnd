export let departments=["IT","HR","Finance","Sales"];
export class Employee{
    constructor(_fName,_lName,_age,_salary){
        this.fName=_fName;
        this.lName=_lName;
        this.age=_age;
        this.salary=_salary;
    }
    getFullName()
    {
        return `${this.fName} ${this.lName}`;
    }
}