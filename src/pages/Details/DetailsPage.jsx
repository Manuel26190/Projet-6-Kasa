import Info from "../../components/Info"


function Details ({description, equipements}) {
    return (
        <div>
            <Info
            description={description}
            equipements={equipements} 
            />            
        </div>
    )
}

export default Details