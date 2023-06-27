 import '../styles/Cart.css'; 


function Cart ({title, cover}) { 

    return (        
        <li className='li-cart' /*onClick={() => handleClick(name)}*/>			
			<img className='kasa-item-cover' src={cover} alt={`${title} cover`} />
			<h1>{title}</h1>			
		</li> 
    )
}

export default Cart