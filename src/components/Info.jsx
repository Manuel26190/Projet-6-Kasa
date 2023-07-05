import CollapseButton from "./CollapseButton";
import '../styles/Info.css';

function Info ({descriptionButton, descriptionText, equipmentsButton, equipmentsList}) {
    return (
        <div className="info-div">            
                <CollapseButton
                    buttonText={descriptionButton}
                    content={descriptionText}
                />                <CollapseButton
                    buttonText={equipmentsButton}
                    content={equipmentsList}
                />            
        </div>          
    )
};

export default Info

