import Info from "../../components/Info"


function Details ({description, equipments}) {
    return (
        <div>
            <Info
            description={description}
            equipments={equipments} 
            />            
        </div>
    )
}

export default Details