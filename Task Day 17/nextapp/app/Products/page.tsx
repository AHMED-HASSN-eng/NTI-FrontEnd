import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";

async function Products() {
    const respond= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=");
    const data= await respond.json();
    console.log(data.meals);
    let cards=data.meals.map((e:any)=>{
        return(
            <Link href={`/Products/${e. idMeal}`}>
            <ProductCard img={e.strMealThumb} 
            title={e.strMeal}
            type={e.strArea}></ProductCard>
            </Link>
            
        );
    });
  return (
    <div className="flex flex-wrap gap-5 mt-5 m-b-5 ml-5">
        {cards}
    </div>
  )
}

export default Products