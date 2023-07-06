import '../styles/Carousel.css';
import React from 'react';

function Carousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % pictures.length);
  };

  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel-div">
      <button onClick={previousSlide}></button>
      <img className='carousel-img' src={pictures[currentSlide]} alt="Slide" />
      <button onClick={nextSlide}></button>
    </div>
  );
}

export default Carousel;

/*
Nous utilisons le hook d'état useState pour gérer l'index de la diapositive actuelle 
avec la variable currentSlide. Lorsque l'utilisateur clique sur les boutons "Previous" ou "Next",
 nous mettons à jour currentSlide en conséquence.
La fonction nextSlide incrémente currentSlide en utilisant l'opérateur de modulo % pour 
assurer que l'index reste dans les limites du tableau pictures. 
La fonction previousSlide décrémente currentSlide en ajoutant pictures.length 
avant d'utiliser le modulo pour gérer correctement les boucles de retour en arrière.
Le rendu du composant affiche les boutons "Previous" et "Next" qui appellent respectivement 
les fonctions previousSlide et nextSlide au clic. 
L'image affichée est basée sur l'URL correspondante à l'index currentSlide dans le tableau pictures.
*/
