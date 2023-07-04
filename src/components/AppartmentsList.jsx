import Cart from "./Cart";
import data from '../datas/data.js';
import '../styles/AppartmentsList.css';
import { Link } from "react-router-dom";


function AppartmentList () {    
    return (
        <ul className="ul-cart" >
            {data.map(({title, cover, id}) => 
                <div className="div-cart" key={id}>
                    <Link to='/details'>
                        <Cart
                            title = {title}
                            cover = {cover}            
                        />
                    </Link>
                                      
                </div>                
            )}            
        </ul>
    )
}

export default AppartmentList
