import { useState } from "react";
import '../styles/CollapseButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CollapseButton ({buttonText, content, description, equipments, isAbout}) {    
    
    const [isOpen, setIsOpen] = useState(false);
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
        <div className='collapse-div-text'>
            <p className="collapse-text">{content}</p>
        </div>                               
    </div>                                                   
) : (            
        <div className="collapse-div">
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

