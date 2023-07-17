import Card from "./Card";
import data from '../datas/data.js';
import '../styles/AppartmentsList.css';
import React from "react";

function AppartmentList () {    
   
    return (
        <section className="section-card">
            {data.map((appartment) => ( 
                <div className="div-card" key={appartment.id}>                    
                    <Card                        
                        title = {appartment.title}
                        cover = {appartment.cover}
                        id={appartment.id}            
                    />                                      
                </div>                
            ))}            
        </section>
    )
};

export default AppartmentList
