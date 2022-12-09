import React from "react";
import "../../index.css";
import BeanieBabyLink from "./BeanieBabyLink";

function BeanieBabies({beanieBabies}) {
    const beanies = beanieBabies.map( b => (
        <BeanieBabyLink key={b.id} beanieBaby={b} />
    )); 
    return (
        <div className="beanies-container">
            {beanies}
        </div>
    );
}

export default BeanieBabies;