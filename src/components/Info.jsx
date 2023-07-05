import CollapseButton from "./CollapseButton";
import '../styles/Info.css';

function Info ({descriptionButton, descriptionText, equipmentsButton, equipmentsList}) {
    return (
        <div className="info-div">
            <div className="dropdown">
                <CollapseButton
                    buttonText={descriptionButton}
                    content={descriptionText}
                />
            </div>
            <div className="dropdown">
                <CollapseButton
                    buttonText={equipmentsButton}
                    content={equipmentsList}
                />   
            </div> 
        </div>          
    )
};

export default Info

