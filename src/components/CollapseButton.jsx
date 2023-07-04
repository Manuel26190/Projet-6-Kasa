import { useState } from "react";
import '../styles/CollapseButton.css';
//import '../styles/Dropdown.css';
//import ChevronLogo from '../assets/logo-chevron.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import data from "../datas/data";

console.log(data[0].equipments)

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

/*
return isOpen ? (             
        <div className="collapse-div">
        <button className="open-collapse-button" onClick={() => {setIsOpen (false)} } >
            {buttonText}
            <FontAwesomeIcon
                className="chevron-logo active"
                icon={faChevronRight}
            />
            
        </button>
        <div className="collapse-div-text">
            <p className="collapse-text">{content}</p>
        </div>                 
    </div>                                                   
) : (            
        <div className="collapse-div">
        <button className="close-collapse-button" onClick={() => setIsOpen (true)}>
            {buttonText}
            <FontAwesomeIcon
                className="chevron-logo"
                icon={faChevronRight}                
            />                       
        </button>                        
    </div>               
    )

*/
/*
return (
        <div className={`${'div'} ${isOpen ? 'active' : ''}`}>
            <button className="btn" onClick={handleClick}>
                {buttonText}
                <FontAwesomeIcon
                        className="chevron-logo"
                        icon={faChevronRight}
                />
            </button>
            <div className={`${'div-text'} ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    )
    */