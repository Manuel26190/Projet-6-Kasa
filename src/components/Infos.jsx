import CollapseButton from "./CollapseButton";
import '../styles/Info.css';
import React from "react";
import Rating from "./Rating";

function Infos ({descriptionButton, 
    descriptionText, 
    equipmentsButton, 
    equipmentsList,
    title,
    hostName,
    hostPicture,
    location,
    tags,
    rating}) {

        function equipmentsTable (equip) {
            return (
                <ul>
                    {equip.map((equip) => (
                        <li>{equip}</li>
                    ))}                
                </ul>
            )       
        };
    return (
        <article>
            <section className="section-info">
                <div className="info-host-div">
                    <h1>{title}</h1>
                    <p className="location">{location}</p>
                    <div className="div-tags-rating">
                        <div className="div-tags">
                            {tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                            ))}
                        </div>                                   
                    </div>                
                </div>
                <div className="host-div-box">
                    <div className="host-div">
                        <p>{hostName}</p>
                        <img src={hostPicture} alt={title}/>                        
                    </div>
                    <div className="rating-div">
                        <Rating rating={rating} />
                    </div>
                                               
                </div>            
            </section>
            <section className="section-collapse">
                <div className="info-collapse-div">            
                    <CollapseButton
                        buttonText={descriptionButton}
                        content={descriptionText} />            
                    <CollapseButton
                        buttonText={equipmentsButton}
                        content={equipmentsTable(equipmentsList)} />                          
                </div>
            </section>
        </article>
        
                
    )
    
};

export default Infos