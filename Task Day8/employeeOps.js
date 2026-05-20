import { Employee} from "./employee.js";
export let employees=new Array();
export function addEmployee(_fname,_lname,_age,_salary){
   let  newemp= new Employee(_fname,_lname,_age,_salary);
    employees.push(newemp);
}

addEmployee("jsdk","djkw",84,8943);
addEmployee("jsdk","djkw",4,8943);
addEmployee("jsk","djkw",84,8943);
addEmployee("jsd","djkw",74,8943);

export function findEmployee(_name){
    let emps=new Array();
    employees.find((elm)=>{
        if(elm.getFullName().toLowerCase()===_name)
            emps.push(elm);
    });
    if(emps.length===0)
        return `Not Found Employee With this Name`;
    else
    {
        for(let i=0;i<emps.length;i++)
        {
             console.log(`Student ${i+1} is ${emps[i].getFullName()}`);
        }
    }
}

findEmployee("jsd djkw");

export function increassalEmployee(_name,_salary){
    let emps=new Array();
    employees.find((elm)=>{
        if(elm.getFullName().toLowerCase()===_name)
        {
            elm.salary+=_salary;
            emps.push(elm);
        }

    })
    if(emps.length===0)
        return `Not Found Employee With this Name`;
    else
    {
        for(let i=0;i<emps.length;i++)
        {
             console.log(`Student ${i} is ${emps[i].getFullName()} the new salary is ${emps[i].salary}`);
        }
    }
}

increassalEmployee("jsd djkw",23);

