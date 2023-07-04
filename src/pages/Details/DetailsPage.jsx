import Info from "../../components/Info";
import data from "../../datas/data";
import '../../styles/Details.css';


function Details () {
    function equipmentsTable (elem) {
        return (
            <ul>
                {elem.map((elem) => (
                    <li>{elem}</li>
                ))}                
            </ul>
        )       
    };    
    return (
        <div>
            {data.map((el) => (
                <Info
                    buttontext1={'Description'}
                    content1={el.description}
                    buttontext2={'Equipements'}
                    content2={equipmentsTable(el.equipments)}                
                />
            ))};            
        </div>
    )
};

export default Details

