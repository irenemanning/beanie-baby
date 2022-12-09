import React, {useState} from "react";

function AddCollector({collectors, setCollectors}){
    const [formData, setFormData] = useState({
        name: "",
        dob: ""
    })
    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/collectors", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body:JSON.stringify({
            "name": formData.name,
            "dob": formData.dob,
            })
         })
        .then((r) => r.json())
        .then((data) => {
            setCollectors([...collectors, data])
            setFormData({
                name: "",
                dob: ""
            })
        })
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="add-collector-form">
            <form onSubmit={handleSubmit}>
                <h3>Add Collector To Database</h3>
                <label>Name:
                    <input type="text"
                    name="name"
                    placeholder="Collector Name Here"
                    onChange={handleChange}/>
                </label>
                <label>D.O.B:
                    <input type="text"
                    name="dob"
                    placeholder="yyyy-mm-dd"
                    onChange={handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddCollector;