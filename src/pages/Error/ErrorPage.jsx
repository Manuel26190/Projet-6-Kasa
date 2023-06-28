import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import '../../styles/Error.css';

function Error () {
    return (
        <div>
            <Header />
            <div className="div-error">
                <h1>404</h1>
                <p className="text-error">Oups! La page que vous avez demandez n'existe pas.</p>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error