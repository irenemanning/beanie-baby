import React, { useState } from "react";
import DeleteBeanieBtn from "./DeleteBeanieBtn";
import EditPoemForm from "./EditPoemForm";
import "../../index.css"

function BeanieCollection({ beanieBaby, onDelete, updatePoem }) {
    const [showForm, setShowForm]= useState(false)
    function toggleForm() {
        setShowForm(!showForm)
    }
    return (
        <div className="center-collection">
            <div className="collector-beanie-babies">
                <h2>{beanieBaby.name}</h2>
                <img src={beanieBaby.img} alt={beanieBaby.name}/>
                <h4>Birthday: {beanieBaby.dob}</h4>
                <h4>Filled with {beanieBaby.pellets} pellets</h4>
                <h4>Poem:</h4> 
                <h5>{beanieBaby.poem}</h5>
                <button className="edit-poem-btn" onClick={toggleForm}>{showForm ? 'Cancel':'Edit Poem'}</button>
                {showForm ? <EditPoemForm beanieBaby={beanieBaby} toggleForm={toggleForm} updatePoem={updatePoem}/> : null}
            </div>
            <DeleteBeanieBtn beanieBaby={beanieBaby} onDelete={onDelete}/>
        </div>
    )
}

export default BeanieCollection;