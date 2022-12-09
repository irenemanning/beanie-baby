import React from "react";

function DeleteBeanieBtn({ beanieBaby, onDelete }) {
    
    function handleDelete(){
        fetch(`http://localhost:9292/beaniebabies/${beanieBaby.id}`, {
            method: "DELETE",
        })
        .then(() => onDelete(beanieBaby))
    }
    return (
        <div>
            <button className="delete-btn" onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default DeleteBeanieBtn;