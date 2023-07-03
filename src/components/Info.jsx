import CollapseButton from "./CollapseButton";


function Info ({description, equipements}) {
    return (
        <div>
            <CollapseButton description={description} />
            <CollapseButton equipements={equipements} />
        </div>
    )
};

export default Info

