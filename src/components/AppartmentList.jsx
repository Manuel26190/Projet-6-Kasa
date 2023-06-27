import Cart from "./Cart";
import data from '../datas/data.js';
import '../styles/Appartment.css';

console.log(data)

function AppartmentList ({title, cover, id}) {
    /*const title = data.map((appartment) => {
        return appartment.title
    });
    const cover = data.map((appartments) => {
        return appartments.cover
    });
*/
    return (
        <ul className="lmj-plant-list">
            {data.map(({title, cover, id}) => 
                <Cart
                title = {title}
                cover = {cover}
            />
            )}
            
        </ul>
            
        
    )
}

export default AppartmentList




    
        //<div className="div-cart">
        //    <h1 key={data.id}>{title}</h1>
        //    <img key={data.id} src={cover}></img>
                                    
        //</div>