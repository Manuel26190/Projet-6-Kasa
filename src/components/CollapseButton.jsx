import { useState } from "react";
import React from "react";
import '../styles/CollapseButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import data from "../datas/data";

function CollapseButton ({buttonText, content}) {    
    
    const [isOpen, setIsOpen] = useState(false);
    
    //Function pour gérer un évenement au click, elle inverse la valeur actuelle de isOpen. 
    //si isOpen est true, il deviendra false, et vice versa. 
    function handleClick () {
        setIsOpen(!isOpen)        
    };
    const location = useLocation();//J'utilise UseLocation de react pour obtenir l'objet location qui contient des informations sur l'URL actuelle.
    const currentPage = location.pathname;//j'extrais le chemin de l'URL avec location.pthname et je le stock dans la variable currentPage.  

    return isOpen ? ( 
                  
        <div className={`${currentPage === '/details' ? ' collapse-div' : "collapse-div" }`}    >
            <button className="open-collapse-button" onClick={handleClick}  >
                {buttonText}
                <FontAwesomeIcon
                    className="chevron-logo active"
                    icon={faChevronRight}
                />            
            </button>            
            <div className='collapse-div-text'>
                <p className="collapse-text">{content}</p>
            </div>                                               
        </div>                                                   
) : (            
        <div className={`${currentPage === '/details' ? ' collapse-div ' : 'collapse-div ' }`} >
            <button className="close-collapse-button" onClick={handleClick}>
                {buttonText}
                <FontAwesomeIcon
                    className="chevron-logo"
                    icon={faChevronRight}                
                />                       
            </button>                        
        </div>               
    )        
};          

export default CollapseButton

