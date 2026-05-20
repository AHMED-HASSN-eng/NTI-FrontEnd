let bagProduct=new Array();

async function getProducts() {
    const responsejson= await fetch("https://fakestoreapi.com/products");
    const response=await responsejson.json();
     return response;
}

let products=await getProducts();

function displayProduct(){
    let _parentdiv=document.getElementById("productsid");
    products.forEach((element) => {
        let _newdiv=document.createElement("div");
        _newdiv.className="item";
        _newdiv.id=`item-${element.id}`;
        _newdiv.innerHTML=`
                 
             <div class="div-img">
                    <img src=${element.image} class="item-img" id="item-img">
                </div>
                <div class="div-cont">
                    <p class="item-title" id="item-title-${element.id}">${element.title}</p>
                    <div class="pric-rate">
                        <div class="quntity">
                            <span class="qunt mins" id="mins" onclick="decqunt(${element.id})">&#x2212</span>
                            <p class="count" id="count-${element.id}"> 1 </p>
                            <span class="qunt plus" id="plus" onclick="incqunt(${element.id})">&#x2b</span>
                        </div>
                        <p class="item-price" id="item-price">$${element.price}</p>
                    </div>
                    <button class="btn-add" id="btn-add" onclick="addtocart(${element.id})">Add to Cart</button>
                </div>
            
        `;
        _parentdiv.appendChild(_newdiv);
    });
        
    
    
}
displayProduct();

window.decqunt= function (id){
    let qunt = document.getElementById(`count-${id}`);
    if(qunt.textContent>1)
    qunt.textContent = Number(qunt.textContent) - 1;
}

window.incqunt= function (id) {
    let qunt = document.getElementById(`count-${id}`);

    qunt.textContent = Number(qunt.textContent) + 1;
}

window.addtocart=function(id){
   let qunt = document.getElementById(`count-${id}`);
   //bagProduct=JSON.parse(localStorage.getItem("bagProduct"))|[];
   let product=bagProduct.find(prod=>prod.id===id);
   //console.log(product);
   if(product === undefined)
   {
     bagProduct.push({"id":id,"proqunt":Number(qunt.textContent)});
   }
    else{
        // bagProduct.forEach((elm)=>{
          
        //     if(elm.id==id)
        //     {
        //         elm.proqunt+=Number(qunt.textContent);
                
        //     }
        // })
        product.proqunt+=Number(qunt.textContent);
    }


   qunt.textContent=1;
localStorage.setItem("bagProduct",JSON.stringify(bagProduct));
}

localStorage.setItem("products",JSON.stringify(products));


