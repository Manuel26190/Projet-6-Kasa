import Header from "../../components/Header";
import Footer from "../../components/Footer";
import imgAbout from '../../assets/img-about.jpg';
import '../../styles/About.css'; 

function About (){
    return (
        <section>
            <Header />
            <div className="div-about">
                <img className="about-img" src={imgAbout} alt="photographie de haute montagnes"/>
            </div>
            <div></div>
            <Footer />
        </section>     
        
    )
}

export default About