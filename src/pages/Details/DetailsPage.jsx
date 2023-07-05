import Info from "../../components/Info";
import data from "../../datas/data";
import '../../styles/DetailsPage.css';
import React from "react";
//import Error from "../Error/ErrorPage";
import { useParams } from "react-router-dom";


//Fonction qui va chercher les données du tableau équipements se trouvant dans la data JSON, 
//et créé une liste de chaque équipements (pour l'appartement selectionné)    
function Details () {
    const { id } = useParams();
    const appartment = data.find((item) => item.id === id);
    //if (!appartment) {
     //   return <Error />;
  //}
  //const equipmentsTest = appartment.equipments; 

    function equipmentsTable (equip) {
        return (
            <ul>
                {data.map((equip, index) => (
                    <li key={index}>{equip}</li>
                ))}                
            </ul>
        )       
    };    
    return (
        <div className="div-detail-page">
                            
                <Info
                    descriptionButton={'Description'}
                    descriptionText={appartment.description}
                    equipmentsButton={'Equipements'}
                    equipmentsList={equipmentsTable(appartment.equipments)}                
                />
                        
        </div>
    )
};

export default Details

