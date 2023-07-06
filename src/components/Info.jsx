import CollapseButton from "./CollapseButton";
import '../styles/Info.css';
import React from "react";
import DropdownList from "./DropdownList";

function Info ({descriptionButton, 
                descriptionText, 
                equipmentsButton, 
                equipmentsList,
                title,
                hostName,
                hostPicture,
                location,
                tags,
                rating}) {
    return (
        <section className="section-info">
            <div className="info-host-div">
                <h1>{title}</h1>
                <div className="host-div">
                    <p>{hostName}</p>
                    <img src={hostPicture} alt={title}/>
                </div>                
            </div>
            <p className="location">{location}</p>
            <div className="div-tag-rating">
                <div className="div-tag">{tags}</div>
                <div></div>

            </div>

            <div className="info-collapse-div">            
                    <CollapseButton
                     buttonText={descriptionButton}
                        content={descriptionText} />            
                    <DropdownList 
                        buttonText={equipmentsButton}
                        equipementsList={equipmentsList} />                           
            </div>
        </section>                  
    )
};

export default Info

