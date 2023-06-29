import { useState } from "react";

function CollapseButton () {
    const [isOpen, setIsOpen] = useState(true);
    
    const fiabilityEntiled = "fiabilité";
    const fiabilityText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const respectEntiled = "Respect";
    const respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";  
    const serviceEntiled = "Service";
    const serviceText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const securityEntiled = "Securité"
    const securityText ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."; 

    return isOpen ? (                   
            <section>
                <div className="div-collapse">
                    <button className="button-collapse" onClick={() => setIsOpen (false)}>{fiabilityEntiled}</button>
                    <div className="div-text-collapse">
                        <p className="collapse-text">{fiabilityText}</p>
                    </div>                 
                </div>               
                <div className="div-collapse">
                    <button className="button-collapse" onClick={() => setIsOpen (false)}>{respectEntiled}</button>
                    <div className="div-text-collapse">
                        <p className="collapse-text">{respectText}</p>
                    </div>                 
                </div>
                <div className="div-collapse">
                    <button className="button-collapse" onClick={() => setIsOpen (false)}>{serviceEntiled}</button>
                    <div className="div-text-collapse">
                        <p className="collapse-text">{serviceText}</p>
                    </div>                 
                </div>
                <div className="div-collapse">
                    <button className="button-collapse" onClick={() => setIsOpen (false)}>{securityEntiled}</button>
                    <div className="div-text-collapse">
                        <p className="collapse-text">{securityText}</p>
                    </div>                 
                </div>
            </section>                           
    ) : (
            <div>
                <button className="button-fiability" onClick={() => setIsOpen (true)}>{fiabilityEntiled}</button>
                <button className="button-fiability" onClick={() => setIsOpen (true)}>{respectEntiled}</button>
                <button className="button-fiability" onClick={() => setIsOpen (true)}>{serviceEntiled}</button>
                <button className="button-fiability" onClick={() => setIsOpen (true)}>{securityEntiled}</button>
            </div>
    ) 
};

export default CollapseButton
