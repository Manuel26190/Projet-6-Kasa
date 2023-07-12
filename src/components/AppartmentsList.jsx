import Card from "./Card";
import data from '../datas/data.js';
import '../styles/AppartmentsList.css';
import React from "react";

function AppartmentList () {    
   
    return (
        <ul className="ul-card">
            {data.map((appartment) => ( 
                <div className="div-card" key={appartment.id}>                    
                    <Card                        
                        title = {appartment.title}
                        cover = {appartment.cover}
                        id={appartment.id}            
                    />                                      
                </div>                
            ))}            
        </ul>
    )
};

export default AppartmentList
