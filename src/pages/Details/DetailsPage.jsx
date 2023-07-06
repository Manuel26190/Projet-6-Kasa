import Info from "../../components/Info";
import data from "../../datas/data";
import '../../styles/DetailsPage.css';
import React from "react";
import { useParams } from "react-router-dom";
import Error from '../Error/ErrorPage';
import Carousel from "../../components/Carousel";
   
function Details () {
    //Utilise le hook useParams de React Router pour extraire les paramètres de l'URL. 
    //L'URL a un paramètre id. La valeur de id est extraite et stockée dans la constante id.
    //Utilise la méthode find sur le tableau data, qui est supposé contenir des objets d'appartements
    //avec une propriété id, pour rechercher un objet d'appartement dont la propriété id correspond à la valeur extraite de l'URL (id). 
    //La fonction de rappel (item) => item.id === id est utilisée pour comparer chaque élément du tableau avec la valeur id et renvoyer le premier élément correspondant trouvé. 
    //Cet élément d'appartement est ensuite stocké dans la constante appartment.
    const { id } = useParams();
    const appartment = data.find((item) => item.id === id);    

    if (!appartment) {
        return <Error />;
    }
    return (
        <div className="div-detail-page">
                <Carousel
                    pictures={appartment.cover}
                    title={appartment.title}    
                />            
                <Info
                    descriptionButton={'Description'}
                    descriptionText={appartment.description}
                    equipmentsButton={'Equipements'}
                    equipmentsList={appartment.equipments}
                    title={appartment.title}
                    hostName={appartment.host.name}
                    hostPicture={appartment.host.picture}                
                />                        
        </div>
    )
};

export default Details

