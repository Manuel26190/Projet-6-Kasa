import { useState } from "react";
import '../styles/CollapseButton.css';
import ChevronLogo from '../assets/logo-chevron.jpg';

function CollapseButton ({buttonText, content}) {    
    
    const [isOpen, setIsOpen] = useState(false); 
       
    
        return isOpen ? (             
                <div className="collapse-div">
                <button className="open-collapse-button" onClick={() => {setIsOpen (false)} } >
                    {buttonText}
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
};

export default CollapseButton
