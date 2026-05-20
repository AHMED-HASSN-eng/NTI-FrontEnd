 import * as empjs from "./employeeOps.js";

empjs.addEmployee("Ahmed","Hassan",73,9943);
empjs.addEmployee("Bakr","mahdy",23,8943);
empjs.addEmployee("samir","nessim",33,1943);
empjs.addEmployee("Ali","Ali",13,2943);
empjs.addEmployee("Hussin","Ali",23,3343);
empjs.addEmployee("Mohamed","Ali",33,4243);
empjs.addEmployee("Abdo","Ali",43,5543);
empjs.addEmployee("Ahmed","Ali",59,6943);
empjs.addEmployee("Ahmed","Ali",53,7943);
empjs.addEmployee("Ahmed","Ali",63,843);
empjs.addEmployee("Ahmed","Hassan",93,3943);
let di_content=document.getElementById("tblid");
for(let i=0;i<empjs.employees.length;i++)
{
    let _newemp=document.createElement("tbody");
    
    _newemp.innerHTML=`
      <tr class="tb">
            <td>${empjs.employees[i].fName}</td>
            <td>${empjs.employees[i].lName}</td>
            <td>${empjs.employees[i].age}</td>
            <td>${empjs.employees[i].salary}</td>
      </tr>
      `;
    di_content.appendChild(_newemp);

}