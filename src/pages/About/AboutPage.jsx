import Header from "../../components/Header";
import Footer from "../../components/Footer";
import imgAbout from '../../assets/img-about.jpg';
import CollapseButton from "../../components/CollapseButton";
import '../../styles/About.css'; 

function About (){

    const fiabilityEntitled = "fiabilité";
    const fiabilityText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const respectEntitled = "Respect";
    const respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";  
    const serviceEntitled = "Service";
    const serviceText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const securityEntitled = "Securité"
    const securityText ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."; 
    
    return (
        <div>
            <Header />
            <div className="div-about">
                <img className="about-img" src={imgAbout} alt="photographie de haute montagnes"/>
            </div>
            <CollapseButton entitled={fiabilityEntitled} text={fiabilityText} />            
            <CollapseButton entitled={respectEntitled} text={respectText} />            
            <CollapseButton entitled={serviceEntitled} text={serviceText} />            
            <CollapseButton entitled={securityEntitled} text={securityText} />            
            <Footer />
        </div>        
    )
}

export default About
