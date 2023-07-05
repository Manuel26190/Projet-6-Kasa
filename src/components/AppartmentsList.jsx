import Card from "./Card";
import data from '../datas/data.js';
import '../styles/AppartmentsList.css';



function AppartmentList () {    
   
    return (
        <ul className="ul-cart">
            {data.map((appartment) => ( 
                <div className="div-cart" key={appartment.id}>                    
                    <Card                        
                        title = {appartment.title}
                        cover = {appartment.cover}
                        id={appartment.id}            
                    />                                      
                </div>                
            ))}            
        </ul>
    )
}

export default AppartmentList
