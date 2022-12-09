import React from "react";
import AddCollector from "./AddCollector";
import CollectorLink from "./CollectorLink";
import "../../index.css"
function Collectors({collectors, setCollectors}) {
    function onDeleteCollector(deletedCollector) {
        const updatedCollectors = collectors.filter((c)=> c.id !== deletedCollector.id)
        setCollectors(updatedCollectors)
    }
    const listofCollectors = collectors.map( c => (
        <CollectorLink key={c.id} collector={c} onDeleteCollector={onDeleteCollector}/>
    ))
    return (
        <div>
            <div className="collectors-list">
                <h2>Collector Names A-Z</h2>
                <div>{listofCollectors}</div>
            </div>
            <AddCollector collectors={collectors} setCollectors={setCollectors}/>
        </div>
        
    )
}

export default Collectors;