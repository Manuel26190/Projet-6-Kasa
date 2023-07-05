 import '../styles/Cart.css'; 

function Card ({title, cover}) { 

    return (
        <div className='div-img'>
            <li className='li-cart' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${cover})`}}>			
			<h2>{title}</h2>			
		    </li>
        </div>         
    )
}

export default Card
