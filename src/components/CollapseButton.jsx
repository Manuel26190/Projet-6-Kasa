import { useState } from "react";

function CollapseButton ({entitled, text}) {
    const [isOpen, setIsOpen] = useState(true);
    
        return isOpen ? (                   
            
                <div className="div-collapse">
                    <button className="button-collapse" onClick={() => setIsOpen (false)}>{entitled}</button>
                    <div className="div-text-collapse">
                        <p className="collapse-text">{text}</p>
                    </div>                 
                </div>                                       
    ) : (
            <div>
                <button className="button-fiability" onClick={() => setIsOpen (true)}>{entitled}</button>                
            </div>
    ) 
};

export default CollapseButton
