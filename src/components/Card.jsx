 import '../styles/Card.css';
 import { Link } from "react-router-dom";
 import React from 'react';

function Card ({title, cover, id}) {   

    return (
        <Link to={`/details/${id}`}>
            <div className='div-img' >
                <li className='li-card' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${cover})`}}>			
			        <h2>{title}</h2>			
		        </li>
            </div>
        </Link>         
    )
};

export default Card
