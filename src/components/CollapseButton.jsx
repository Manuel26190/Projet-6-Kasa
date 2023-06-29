import { useState } from "react";
import '../styles/CollapseButton.css';

function CollapseButton ({entitled, text}) {
    const [isOpen, setIsOpen] = useState(true);
    
        return isOpen ? (                   
            
            <div className="collapse-div">
                <button className="open-collapse-button" onClick={() => setIsOpen (false)}>{entitled}</button>
                <div className="collapse-div-text">
                    <p className="collapse-text">{text}</p>
                </div>                 
            </div>                                       
    ) : (
            <div>
                <button className="close-collapse-button" onClick={() => setIsOpen (true)}>{entitled}</button>                
            </div>
    ) 
};

export default CollapseButton
