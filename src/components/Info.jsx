import CollapseButton from "./CollapseButton";
import '../styles/Info.css';
import React from "react";
import DropdownList from "./DropdownList";


function Info ({descriptionButton, descriptionText, equipmentsButton, equipmentsList}) {
    return (

        <div className="info-div">            
                <CollapseButton
                    buttonText={descriptionButton}
                    content={descriptionText}
                />            
                <DropdownList 
                    buttonText={equipmentsButton}
                    equipementsList={equipmentsList}
                />                           
        </div>          
    )
};

export default Info

