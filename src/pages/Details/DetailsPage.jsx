import Info from "../../components/Info";
import data from "../../datas/data";


function Details () {
    function table (elem) {
        return (
            <ul>
                <li>{elem[0]}</li>
            </ul>
        ) 
        

        
    }    
    return (
        <div>
            {data.map((el) => (
                <Info
                    buttontext1={'Description'}
                    content1={el.description}
                    buttontext2={'Equipements'}
                    content2={table(el.equipments)}                
                />
            ))};            
        </div>
    )
};

export default Details

