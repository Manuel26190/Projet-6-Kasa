 import '../styles/Card.css';
 import { Link } from "react-router-dom";
 import React from 'react';

function Card ({title, cover, id}) {   

    return (
        <Link to={`/details/${id}`}>
            <div className='div-img' >
                <img className='div-img img' src={cover} alt={title}/>			
			    <h2>{title}</h2>		        
            </div>
        </Link>         
    )
};

export default Card
