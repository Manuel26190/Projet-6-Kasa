import '../styles/Carousel.css';

function Carousel ({pictures, title}) {
    return (
        <div className="carousel-div">
            <img className='carousel-img' src={pictures} alt={title}></img>
        </div>
    )
}

export default Carousel