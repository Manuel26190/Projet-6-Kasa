import { Link } from "react-router-dom";
import '../../styles/Error.css';
import React from "react";

function Error () {
    return (  
                       
        <div className="div-error">
            <p>404</p>
            <p className="text-error">Oups! La page que vous avez demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>        
    )
};

export default Error