import { useState } from "react";
import '../styles/CollapseButton.css';
//import ChevronLogo from '../assets/logo-chevron.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CollapseButton ({buttonText, content, description, equipements, isAbout}) {    
    
    const [isOpen, setIsOpen] = useState(false);
    function handleOpen () {
        setIsOpen(!isOpen)
    };

    if (!isAbout){
        if (description !== undefined) {
            return (
                <div className={`${'dropdown'} ${
                        isAbout
                            ? 'about-page-width'
                            : 'apartement-details-page-width'}
                            ${isOpen ? 'active' : ''}`}
                >                    
                    <button className={`${'dropdown-btn'}`} 
                        onClick={handleOpen}
                    >
                        Bouton equipements
                    </button>
                </div>
                
            )
        }
        if(equipements !== undefined ) {
            return (
                <div>                    
                    <button onClick={handleOpen}>Bouton description</button>
                </div>
            )
        }
    }        
     
     return isOpen ? (             
        <div className="collapse-div">
        <button className="open-collapse-button" onClick={handleOpen} >
            {buttonText}
            <FontAwesomeIcon
                className="logo-chevron"
                icon={faChevronRight}
            />
            
        </button>
        <div className="collapse-div-text">
            <p className="collapse-text">{content}</p>
        </div>                 
    </div>                                                   
) : (            
        <div className="collapse-div">
        <button className="close-collapse-button" onClick={handleOpen}>
            {buttonText}
            <FontAwesomeIcon
                className="logo-chevron"
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
