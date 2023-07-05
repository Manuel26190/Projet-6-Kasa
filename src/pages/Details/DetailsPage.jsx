import Info from "../../components/Info";
import data from "../../datas/data";
import '../../styles/DetailsPage.css';

//Fonction qui va chercher les données du tableau équipements se trouvant dans la data JSON, 
//et créé une liste de chaque équipements (pour l'appartement selectionné)    
function Details () {
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
        <div>
            {data.map((appart) => (
                
                <Info
                    descriptionButton={'Description'}
                    descriptionText={appart.description}
                    equipmentsButton={'Equipements'}
                    equipmentsList={equipmentsTable(appart.equipments)}                
                />
            ))};            
        </div>
    )
};

export default Details

