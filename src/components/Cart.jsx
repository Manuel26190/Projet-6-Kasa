 import '../styles/Cart.css'; 


function Cart ({title, cover}) { 

    return (
        <div className='div-img'>
            <li className='li-cart' style={{backgroundImage: `url(${cover})`}}  /*onClick={() => handleClick(name)}*/>			
			<h2>{title}</h2>			
		</li>
        </div>        
         
    )
}
export default Cart
