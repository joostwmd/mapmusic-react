import { Link } from 'react-router-dom';
import React from 'react'
import axios from 'axios';

function LocationCard({name, _id, props}) {
   
    const API_URL = 'http://localhost:5005';

    const deleteLocation = () => {
		console.log("gelöscht" ,`${API_URL}/api/locations/${_id}`)
        axios.delete(`${API_URL}/api/locations/${_id}`)
			.then((res) => {
				// redirect to the locations list
                res.json(res)
				props.history.push('/locations');
			})
			.catch(err => console.log(err));
	}
    
    return (
        <div>
            <h4>{name}</h4>
            <button onClick={deleteLocation}>delete</button>
        </div>
    )
}

export default LocationCard
