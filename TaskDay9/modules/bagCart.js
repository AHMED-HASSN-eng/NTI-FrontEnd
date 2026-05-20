//import * as bagCont from "../main.js"
let bagProduct=JSON.parse(localStorage.getItem("bagProduct"));
let products=JSON.parse(localStorage.getItem("products"));
let totalPrice=0;
let totalPriceWithShip=document.getElementById("totalpricewithship");
document.getElementById("head-div").innerHTML+=`<h2>${bagProduct.length} items</h2>`;
document.getElementById("numitemsid").innerHTML+=`<p>${bagProduct.length} ITEMS </p> `;
document.getElementById("numitemsid").innerHTML+=`<p id="totalpriceid"> ${totalPrice}</p> `;

// bagProduct.forEach(elm=>console.log(elm.proqunt));
// products.forEach(elm=>console.log(elm.title));
function displayProductBag(){
    let _parentdiv=document.getElementById("productsid");
   bagProduct.forEach((pro) => {
    
       let element= products.find(elm=>elm.id===pro.id);
    //    console.log(pro);
        console.log(element);
    

     let _newdiv=document.createElement("div");
       totalPrice=Number(totalPrice)+(Number(element.price)*Number(pro.proqunt));
       //console.log(totalPrice);
        _newdiv.className="item";
        _newdiv.id=`item-${element.id}`;
        _newdiv.innerHTML=`
                 
            <div class="item" id="item">
                <div class="div-img">
                    <img src="${element.image}" class="item-img" id="item-img">
                </div>
                <div class="div-cont">
                    <p class="item-title" id="item-title">${element.title.slice(0, 50)}</p>
                    
                        <div class="quntity">
                            <span class="qunt mins" id="mins" onclick="decqunt(${element.id})">&#x2212</span>
                            <p class="count" id="count-${element.id}"> ${pro.proqunt} </p>
                            <span class="qunt plus" id="plus" onclick="incqunt(${element.id})">&#x2b</span>
                        </div>
                        <p class="item-price" id="item-price-${element.id}">$${element.price*pro.proqunt}</p>
                   
                    <button class="btn-dele" id="${element.id}">✖</button>
                </div>
            </div>
           
            
        `;
        _parentdiv.appendChild(_newdiv);
        _parentdiv.innerHTML+=`<hr width="92%">`;
        
    });
} 

displayProductBag();
let selecteditem=document.getElementById("selectid");
document.getElementById("totalpriceid").innerHTML=`$${Number(totalPrice)}`;
let totalPricewithoutship=Number(document.getElementById("totalpriceid").innerHTML.split("$")[1]);
totalPriceWithShip.innerHTML=`$${totalPricewithoutship>0?totalPricewithoutship+Number(selecteditem.value):0}`;
console.log(totalPrice);

window.decqunt= function (id){
    let qunt = document.getElementById(`count-${id}`);
    if(qunt.textContent>1)
    {
    let oldtotal=Number(document.getElementById("totalpriceid").textContent.split("$")[1]);
    
    document.getElementById("totalpriceid").innerHTML=`$${oldtotal-products.find(el=>el.id==id).price}`;
    qunt.textContent = Number(qunt.textContent) - 1;
    }
    document.getElementById(`item-price-${id}`)
    .innerHTML=`$${products.find(elm=>elm.id==id).price*qunt.textContent}`;
    totalPriceWithShip.innerHTML=`$${Number(selecteditem.value)+Number(document.getElementById("totalpriceid").innerHTML.split("$")[1])}`;
}

window.incqunt= function (id) {
    let qunt = document.getElementById(`count-${id}`);
    let oldtotal=Number(document.getElementById("totalpriceid").textContent.split("$")[1]);
    //console.log(oldtotal);
    document.getElementById("totalpriceid").innerHTML=`$${oldtotal+products.find(el=>el.id==id).price}`;
    qunt.textContent = Number(qunt.textContent) + 1;
    document.getElementById(`item-price-${id}`)
    .innerHTML=`$${products.find(elm=>elm.id==id).price*qunt.textContent}`;
    totalPriceWithShip.innerHTML=`$${Number(selecteditem.value)+Number(document.getElementById("totalpriceid").innerHTML.split("$")[1])}`;
}

let btnsdelete=document.querySelectorAll(".btn-dele");

btnsdelete.forEach((btn)=>{
btn.addEventListener("click",(e)=>{

let newBagProduct=bagProduct.filter(el=>el.id!=e.target.id);

localStorage.setItem("bagProduct",JSON.stringify(newBagProduct));
location.reload();
})
});
 
 selecteditem.addEventListener("change",(e)=>{
    
    totalPriceWithShip.innerHTML=`$${Number(selecteditem.value)+Number(document.getElementById("totalpriceid").innerHTML.split("$")[1])}`;
 })
 document.getElementById("btn-checkid").addEventListener("click",()=>{
    
    if(totalPriceWithShip.innerText.split("$")[1]>0){
     let pop=document.getElementById("popcontantid");
     pop.classList.add("popup-open");
     document.getElementById("overlay").style.display="block";
    document.body.classList.add("no-scroll");
    localStorage.clear();
    
    }
    
    
 });

document.getElementById("closebtn").addEventListener("click",()=>{
    let pop=document.getElementById("popcontantid");
     pop.classList.remove("popup-open");
    document.getElementById("overlay").style.display="none";
    document.body.classList.remove("no-scroll");
    location.reload();
});
//localStorage.clear();

