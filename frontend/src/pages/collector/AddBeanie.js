import React, { useState, useEffect } from "react";
import "../../index.css"

function AddBeanie({ collector, setCollector, updateCollectors, toggleForm }) {
    
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        poem: "",
        pellets: "",
        img: "",
        collector_id: collector.id
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/collectors/${collector.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": formData.name,
                "dob": formData.dob,
                "poem": formData.poem,
                "pellets": formData.pellets,
                "img": formData.img,
                "collector_id": formData.collector_id
            })
        })
        .then((r) => r.json())
        .then((data) => {
            const updatedBeanieBabies  = [...collector.beanie_babies, data]
            const updatedCollector = {...collector, beanie_babies: updatedBeanieBabies }
            setCollector(updatedCollector)
            updateCollectors(updatedCollector)
        })
        toggleForm()
    }
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }    
    
    return (
        <div className="add-beanie">
            <form onSubmit={handleSubmit} className="create_form">
                <label>Name:
                    <input type="text"
                    name="name"
                    placeholder="Beanie Baby's Name"
                    onChange={handleChange}/>
                </label>
                <label>D.O.B:
                    <input type="text"
                    name="dob"
                    placeholder="yyyy-mm-dd"
                    onChange={handleChange}/>
                </label>
                <label>Poem:
                    <textarea name="poem" 
                    cols="40" 
                    rows="4" 
                    placeholder="Write poem here..." 
                    onChange={handleChange}>
                    </textarea>
                </label>
                <label>Type of pellets:
                    <select 
                    onChange={handleChange} 
                    name="pellets" 
                    id="pellets">Pellets
                    <option>OPTIONS</option>
                    <option value="P.V.C">P.V.C</option>
                    <option value="P.E">P.E.</option>
                    </select>
                </label>
                <label>Image:
                    <input type="text"
                    name="img"
                    placeholder="image url here"
                    onChange={handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddBeanie;