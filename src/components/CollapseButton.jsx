import { useState } from "react";
import React from "react";
import '../styles/CollapseButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CollapseButton ({buttonText, content}) {    
    
    const [isOpen, setIsOpen] = useState(false);
    
    //Function handleClick pour gérer un évenement au click, elle inverse la valeur actuelle de isOpen. 
    //si isOpen est true, il deviendra false, et vice versa. 
    function handleClick () {
        setIsOpen(!isOpen) 
    };    

    return  ( 
                  
        <div className='collapse-div'>
            <button className="open-collapse-button" onClick={handleClick}>
                {buttonText}
                <FontAwesomeIcon 
                    className="chevron-logo active" 
                    icon={faChevronRight} 
                />            
            </button>            
            <div className={`collapse-div-text ${isOpen ? "open" : ""}`}>
                <span className="collapse-text">{content}</span>
            </div>                                                           
        </div>
    )                                                   
   
};          

export default CollapseButton
