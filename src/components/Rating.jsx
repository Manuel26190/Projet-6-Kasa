import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Rating.css';
import React from 'react';

function Rating ({rating}) {
  //La fonction Rating retourne un conteneur <div> 
  //qui affiche les icônes générées en appelant la fonction renderIcons.   
    const renderIcons = () => {
        const icons = [];
//Boucle for qui itère de 1 à 5, puis je vérifie si "i" est inférieur ou égale à rating. 
//Si c'est le cas, j'attribue la couleur #FF6060 à l'icone sinon la coucleur #E3E3E3.
//J'ajoute l'icone a un tableau "icons" en utilisant <FontAwesomeIcon> avec l'icône d'étoile et la couleur correspondante.        
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
        <div className='icon-div'>
          {renderIcons()}
        </div>
      );    
};

export default Rating

