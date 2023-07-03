import CollapseButton from "./CollapseButton";


function Info ({description, equipments}) {
    return (
        <div>
            <CollapseButton description={description} />
            <CollapseButton equipments={equipments} />
        </div>
    )
};

export default Info

