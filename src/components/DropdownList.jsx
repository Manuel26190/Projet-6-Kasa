import { useState } from "react";
import React from "react";
import '../styles/CollapseButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function DropdownList ({buttonText, equipementsList}) {    
    
    const [isOpen, setIsOpen] = useState(false);
    
    //Function handleClick pour gérer un évenement au click, elle inverse la valeur actuelle de isOpen. 
    //si isOpen est true, il deviendra false, et vice versa. 
    function handleClick () {
        setIsOpen(!isOpen)        
    };

    return isOpen ? (                   
        <div className="collapse-div">
            <button className="open-collapse-button" onClick={handleClick}  >
                {buttonText}
                <FontAwesomeIcon
                    className="chevron-logo active"
                    icon={faChevronRight}
                />            
            </button>            
            <ul className='collapse-text'>
                {equipementsList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}                
            </ul>                                                           
        </div>                                                   
) : (            
        <div className='collapse-div'>
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

export default DropdownList