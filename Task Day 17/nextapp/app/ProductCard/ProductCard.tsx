import './ProductCard.css'
type prams={
    img:string,
    title:string,
    type:string
}
function ProductCard(props:prams) {
  return (
    <div className='carditem'>
            <div className='cardimg'>
                <img src={props.img}/>
            </div>
            <div className='cardcontent'>
                <h2>{props.title}</h2>
                <h3>{props.type} food</h3>
            </div>
    </div>
  )
}

export default ProductCard