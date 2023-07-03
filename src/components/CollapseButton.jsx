import { useState } from "react";
import '../styles/CollapseButton.css';
//import '../styles/Dropdown.css';
//import ChevronLogo from '../assets/logo-chevron.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CollapseButton ({buttonText, content, description, equipments, isAbout}) {    
    
    const [isOpen, setIsOpen] = useState(false);
    //function handleOpen () {
    //    setIsOpen(!isOpen)
    //};
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
    
};  
        

export default CollapseButton

/*
return isOpen ? (             
                <div className="collapse-div">
                <button className="open-collapse-button" onClick={() => {setIsOpen (false)} } >
                    {buttonText}
                    <FontAwesomeIcon
                        className="chevron-logo"
                        icon={faChevronRight}
                    />
                    <img src={ChevronLogo} alt="logo-chevron" className="chevron-logo"/>
                </button>
                <div className="collapse-div-text">
                    <p className="collapse-text">{content}</p>
                </div>                 
            </div>                                                   
    ) : (            
                <div className="collapse-div">
                <button className="close-collapse-button" onClick={() => setIsOpen (true)}>
                    {buttonText}
                    <img src={ChevronLogo} alt="logo-chevron" className="chevron-logo"/>
                </button>                
            </div>           
    ) 

*/
