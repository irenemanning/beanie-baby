import React from "react";

function DeleteCollectorBtn({collector, onDeleteCollector}) {
    function handleDelete() {
        fetch(`http://localhost:9292/collectors/${collector.id}`, {
            method: "DELETE",
        })
        .then(() => onDeleteCollector(collector))
    }
    return (
        <div className="dlt-collector-div">
            <button className="delete-btn" onClick={handleDelete}>X</button>
        </div>
    )
}

export default DeleteCollectorBtn;