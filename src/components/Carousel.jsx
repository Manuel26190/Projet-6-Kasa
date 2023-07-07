import '../styles/Carousel.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Carousel({ pictures }) {
/*
Nous utilisons le hook d'état useState pour gérer l'index de la diapositive actuelle 
avec la variable currentSlide. Lorsque l'utilisateur clique sur les boutons "Previous" ou "Next",
 nous mettons à jour currentSlide en conséquence.
L'image affichée est basée sur l'URL correspondante à l'index currentSlide dans le tableau pictures.
*/
  const [currentSlide, setCurrentSlide] = React.useState(0);
//La fonction nextSlide incrémente currentSlide en utilisant l'opérateur de modulo % pour 
//assurer que l'index reste dans les limites du tableau pictures.
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % pictures.length);
  };
//La fonction previousSlide décrémente currentSlide en ajoutant pictures.length 
//avant d'utiliser le modulo pour gérer correctement les boucles de retour en arrière.
  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + pictures.length) % pictures.length);
  };  

  return (
    <div className="carousel-div">
      <div className="image-container">
        <button className={pictures.length === 1 ? 'previous-button active' : 'previous-button'} onClick={previousSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />         
        </button>
        <img className='carousel-img' src={pictures[currentSlide]} alt="Slide" />
        <button className={pictures.length === 1 ? 'next-button active' : 'next-button'} onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;


