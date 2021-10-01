import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';




function AddEvent(props) {
   
    const API_URL = 'http://localhost:5005';
    
    //get all locations 
    const [locations, setLocations] = useState([])

    const getAllLocations = () => {
        axios.get(`${API_URL}/api/locations`)
             .then(res => {
                 setLocations(res.data)
             })
             .catch(err => console.log(err))
        }
        
        useEffect(() => {
            getAllLocations()
        }, [])

    //post all info
	const [name, setName] = useState('');
	const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {name, date, location};

        axios.post(`${API_URL}/api/events`, requestBody)
             .then(res => {
                 setName("")
                 setDate("")
                 setLocation("")
                 
                props.refreshEvents() 

             })
             .catch(err => console.log(err))
    }
    

    return (
        <div>
            <h3>add a event</h3>

            <form id="addEvents" onSubmit={handleSubmit}>
              
              <label htmlFor="name">name of event</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>

                <label htmlFor="longitude">date of event</label>
				<input
					type="date"
					name="date"
					value={date}
					onChange={e => setDate(e.target.value)}
				/>

                <label htmlFor="chooseLocation">choose your location</label>
                <select id="chooseLocation" onChange={e => setLocation(e.target.value)} >
                 {locations.map(location => {
                    return <option value={location._id}>{location.name}</option>
                 })}
                </select>

                <button type="submit">add this event</button>
            </form>
            
        </div>
    )
}

export default AddEvent
 