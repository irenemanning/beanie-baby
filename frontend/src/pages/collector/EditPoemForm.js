import React, { useState } from "react";

function EditPoemForm({beanieBaby, toggleForm, updatePoem}) {
    const [formData, setFormData] = useState({
        poem: ""
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/beaniebabies/${beanieBaby.id}`, {
            method: "PATCH",
            headers: {
                'Accept' : "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "poem": formData.poem
            })
        })
        .then(r => r.json())
        .then(data => {
            updatePoem(data)
            console.log(data)
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
        <div>
            <form onSubmit={handleSubmit}>
                <textarea 
                name="poem" 
                cols="40" 
                rows="4" 
                placeholder="Write poem here..."
                onChange={handleChange}>
                </textarea>
                <button type="submit">Done</button>
            </form>
        </div>
    )
}
export default EditPoemForm;