import Cart from "./Cart";
import data from '../datas/data.js';
import '../styles/Appartment.css';

//console.log(data)

function AppartmentList () {
    
    return (
        <ul className="ul-cart" >
            {data.map(({title, cover, id}) => 
                <div className="div-cart" key={id}>
                    <a  href="#">
                        <Cart
                            title = {title}
                            cover = {cover}            
                        />
                    </a>                    
                </div>                
            )}            
        </ul>
    )
}

export default AppartmentList
