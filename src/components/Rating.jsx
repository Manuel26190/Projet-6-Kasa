import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Rating.css';
import React from 'react';

function Rating ({rating}) {
    
    const renderIcons = () => {
        const icons = [];
    
        for (let i = 1; i <= 5; i++) {
          const iconColor = i <= rating ? '#FF6060' : '#E3E3E3';
          icons.push(
            <span className='icon' key={i}>
                <FontAwesomeIcon              
                icon={faStar}
                color={iconColor} />
            </span>            
          );
        }    
        return icons;
      };    
      return (
        <div>
          {renderIcons()}
        </div>
      );    
}

export default Rating

//Nous utilisons une boucle for pour itérer de 1 à 5, 
//puis nous vérifions si i est inférieur ou égal à rating. 
//Si c'est le cas, nous attribuons la couleur 'red' à l'icône, 
//sinon nous attribuons la couleur 'gray'. 
//Ensuite, nous ajoutons l'icône à un tableau icons en utilisant 
//<FontAwesomeIcon> avec l'icône d'étoile et la couleur correspondante.
//Finalement, la fonction IconDisplay retourne un conteneur <div> 
//qui affiche les icônes générées en appelant la fonction renderIcons.