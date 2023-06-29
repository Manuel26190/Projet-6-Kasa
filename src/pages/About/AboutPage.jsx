import Header from "../../components/Header";
import Footer from "../../components/Footer";
import imgAbout from '../../assets/img-about.jpg';
import CollapseButton from "../../components/CollapseButton";
import '../../styles/About.css'; 

function About ({entiled, text}){
    
    return (
        <div>
            <Header />
            <div className="div-about">
                <img className="about-img" src={imgAbout} alt="photographie de haute montagnes"/>
            </div>
            <CollapseButton entiled={entiled} text={text} />            
            <Footer />
        </div>
            
            
        
    )
}

export default About
