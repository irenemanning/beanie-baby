import React from "react";
import { Link } from "react-router-dom";
import DeleteCollectorBtn from "./DeleteCollectorBtn";

function CollectorLink({ collector, onDeleteCollector}){
    return (
        <div className="link-container">
            <Link className="link" to={`/collectors/${collector.id}`}>
                <h3>{collector.name}</h3>
            </Link>
            <DeleteCollectorBtn collector={collector} onDeleteCollector={onDeleteCollector}/>
        </div>
    )
}

export default CollectorLink;