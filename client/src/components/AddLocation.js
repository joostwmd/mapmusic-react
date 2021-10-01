import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function AddLocation(props) {
   
    const API_URL = 'http://localhost:5005';

	const [name, setName] = useState('');
	const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {name, longitude, latitude};

        axios.post(`${API_URL}/api/locations`, requestBody)
             .then(res => {
                 setName("")
                 setLongitude("")
                 setLatitude("")
                 
                props.refreshLocations() 

             })
             .catch(err => console.log(err))
    }
    

    return (
        <div>
            <h3>add a location</h3>

            <form id="addLocation" onSubmit={handleSubmit}>
              
              <label htmlFor="name">name of location</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>

                <label htmlFor="longitude">longitude of location</label>
				<input
					type="text"
					name="longitude"
					value={longitude}
					onChange={e => setLongitude(e.target.value)}
				/>

                <label htmlFor="latitude">latitude of location</label>
				<input
					type="text"
					name="latitude"
					value={latitude}
					onChange={e => setLatitude(e.target.value)}
				/>

                <button type="submit">add this location</button>
            </form>
            
        </div>
    )
}

export default AddLocation
 