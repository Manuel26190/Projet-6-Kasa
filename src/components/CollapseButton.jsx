import { useState } from "react";

function CollapseButton () {
    const [isOpen, setIsOpen] = useState(true)
    

    return isOpen ? (                   
            <div className="div-menu-about">
                <button className="button-content-about" onClick={() => setIsOpen (false)}>Fiabilité</button>
                <div className="div-sub-content">
                    <p className="fiability-text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                        et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </p>
                </div>                 
            </div>               
    ) : (
            <div>
                <button className="button-content-about" onClick={() => setIsOpen (true)}>Fiabilité</button>
            </div>
    )
}

export default CollapseButton
/*
            <button className="button-content-about">Respect</button> 
                <button className="button-content-about">Service</button> 
                <button className="button-content-about">Sécurité</button>
                */

/*
    function closeButton (div, div2, div3) {
        div.style.display = "none";       
        div2.style.display = "none";       
        div3.style.display = "none";       
    }
    closeButton()
    */
   /*
<div class="subMenu" id="js-sub-menu">
                <a id="js-link-first_subContent"><i class="fa-solid fa-user"></i>Partie 1<i class="fa-sharp fa-solid fa-chevron-down"></i></a>
                <div class="subContent" id="js-subContent">
                    <a class="subContent-first__link" href="#">OpenClassrooms</a>
                    <a href="#">Blog You-Tube</a>
                    <a href="#">Blog Divers</a>                  
                </div>
            </div>

            function closeDashDiv (div, div2, div3) {
    div.style.display = "none";       
    div2.style.display = "none";       
    div3.style.display = "none";       
}
    closeDashDiv(subContent, secondSubContent, thirdSubContent);


function togg (link, div){
    link.addEventListener('click', function (){    
        if (getComputedStyle(div).display != "none"){
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }        
    });

    togg (dashLink, subContent);
*/