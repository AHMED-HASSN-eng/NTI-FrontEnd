type prams={

  params:{productId: string}
}
async function ProductDetailes({params}:prams) {
    const id=(await params).productId;
    const respond=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const item=await respond.json();
    console.log(item);
  return (
    <div>
        {id}
    </div>
  )
}
export default ProductDetailes