import React from 'react';
import { Link } from "react-router-dom"

function BeanieBabyLink({ beanieBaby}) {
    return (
        <div className='center-beanies'>
            <div className="beanie-baby">
                <Link to={`/beaniebabies/${beanieBaby.id}`}>
                    <img src={beanieBaby.img} alt={beanieBaby.name}/>
                    <h3>{beanieBaby.name}</h3>
                </Link>
                
            </div>
        </div>
    )
}

export default BeanieBabyLink;