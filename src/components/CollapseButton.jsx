import { useState, useEffect } from "react";
import '../styles/CollapseButton.css';
import ChevronLogo from '../assets/logo-chevron.jpg';

function CollapseButton ({entitled, text}) {
    
    //const [rotation, setRotation] = useState(false); 
    const [isOpen, setIsOpen] = useState(false); 
    //const setIsOp = "seIsOpen(false)";    
    
        return isOpen ? (             
                <div className="collapse-div">
                <button className="open-collapse-button" onClick={() => {setIsOpen (false)} } >
                    {entitled}
                    <img src={ChevronLogo} alt="logo-chevron" className="chevron-logo"/>
                </button>
                <div className="collapse-div-text">
                    <p className="collapse-text">{text}</p>
                </div>                 
            </div>                                                   
    ) : (            
                <div className="collapse-div">
                <button className="close-collapse-button" onClick={() => setIsOpen (true)}>
                    {entitled}
                    <img src={ChevronLogo} alt="logo-chevron" className="chevron-logo"/>
                </button>                
            </div>           
    ) 
};

export default CollapseButton
