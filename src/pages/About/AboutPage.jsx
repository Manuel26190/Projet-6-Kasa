import imgAbout from '../../assets/img-about.jpg';
import CollapseButton from "../../components/CollapseButton";
import '../../styles/About.css'; 

function About (){

    const contentList = [
        {
              buttonText: 'Fiabilité',
              content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
              id:1
        },
        {
              buttonText: 'Respect',
              content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
              id:2
        },
        {
              buttonText: 'Service',
              content: 'Chez Kasa, nous nous engageons à fournir un service exceptionnel à nos utilisateurs. Notre équipe est dédiée à vous offrir une expérience sans pareille, en répondant rapidement à vos besoins et en vous fournissant un support personnalisé à chaque étape de votre parcours sur notre plateforme. Nous nous efforçons de rendre votre expérience de location de logement aussi fluide et agréable que possible.',
              id:3
        },
        {
              buttonText: 'Sécurité',
              content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes",
              id:4
        },
  ];

  const isAbout = true;
    
    return (
        <div>            
            <div className="div-about">
                <img className="about-img" src={imgAbout} alt="photographie de haute montagne"/>
            </div>
            {contentList.map((content) => (
                <CollapseButton 
                    key={content.id}
                    buttonText = {content.buttonText}
                    content = {content.content}
                    
                />
                
            ))}
                       
                        
        </div>        
    )
}

export default About
