import CollapseButton from "./CollapseButton";
import data from "../datas/data";

console.log(data[0].equipments)


function Info ({buttontext1, content1, buttontext2, content2}) {
    return (
        <div>           
                
                    <CollapseButton
                        buttonText={buttontext1}
                        content={content1}
                    />
                    <CollapseButton
                        buttonText={buttontext2}
                        content={'content2'}
                    />                              
                    
             
        </div>          
               
    )
};

export default Info

