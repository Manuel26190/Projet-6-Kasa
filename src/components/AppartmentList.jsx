import Cart from "./Cart";
import data from '../datas/data.js';
import '../styles/Appartment.css';

//console.log(data)

function AppartmentList () {
    
    return (
        <ul className="ul-cart" >
            {data.map(({title, cover, id}) => 
                <div className="div-cart" key={id}>
                    <Cart
                    title = {title}
                    cover = {cover}
            />
                </div>                
            )}            
        </ul>
    )
}

export default AppartmentList




    
        //<div className="div-cart">
        //    <h1 key={data.id}>{title}</h1>
        //    <img key={data.id} src={cover}></img>
                                    
        //</div>