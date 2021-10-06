import React from 'react'
import { useState } from "react"
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function LocationCard({_id, name, coordinates, history}) {

    
    //name, longitude, latitude
    const API_URL = 'http://localhost:5005';

    const [isInEditMode, setIsInEditMode] = useState(false)
    const [newName, setNewName] = useState('');
	const [newLongitude, setNewLongitude] = useState('')
    const [newLatitude, setNewLatitude] = useState('')

	//const history = useHistory()

    const deleteLocation = () => {
    
        axios.delete(`${API_URL}/api/locations/${_id}`)
            .then(() => {
                // redirect to the locations list
                history.push('/api/locations');
            })
            .catch(err => console.log(err));
    }

    const changeEditMode = () => {
        setIsInEditMode(true) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {newName, newLatitude, newLongitude}
        axios.put(`${API_URL}/api/locations/edit/${_id}`, requestBody)
             .then()
    }


    if(isInEditMode === false){
        return (
            <div>
             <h4>{name}</h4>
             <h4>{coordinates[0]}</h4>
             <h4>{coordinates[1]}</h4>
             <button onClick={deleteLocation}>delete</button>
             <button onClick={changeEditMode}>edit</button>
            </div>
        )
    }

    if(isInEditMode === true){
        return (
            <div>
                <h3>edit this location</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">edit name of location</label>
				<input
					type="text"
					name="name"
                    placeholder={name}
					value={newName}
					onChange={e => setNewName(e.target.value)}
				/>

				<label htmlFor="longitude">edit logitude of location </label>
				<input
					type="text"
					name="longitude"
                    placeholder={coordinates[0]}
					value={newLongitude}
					onChange={e => setNewLongitude(e.target.value)}
				/>

				<label htmlFor="latitude">edit latitude of location </label>
				<input
					type="text"
					name="latitude"
                    placeholder={coordinates[1]}
					value={newLatitude}
					onChange={e => setNewLatitude(e.target.value)}
				/>
				<button type="submit">update this location</button>
			</form>
            </div>
        )
    }
}

export default LocationCard
