import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//name, date, location,  _id)
function EventCard({_id, name, date, location}) {
    
    const API_URL = 'http://localhost:5005';
    const history = useHistory
    

    const [isInEditMode, setIsInEditMode] = useState(false)
    const [newName, setNewName] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newLocation, setNewLocation] = useState("")

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


    const deleteEvent = () => {
        axios.delete(`${API_URL}/api/events/${_id}`)
            .then(() => {
                // redirect to the locations list
                history.push('/api/events');
            })
            .catch(err => console.log(err));
    }

    const changeEditMode = () => {
        setIsInEditMode(true) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {newName, newDate, newLocation}
        axios.put(`${API_URL}/api/events/edit/${_id}`, requestBody)
    }
  
    if(isInEditMode === false){
        return (
           <div>
               <h3>{name}</h3>
               <h4>{date}</h4>
               
               <button onClick={deleteEvent}>delete</button>
               <button onClick={changeEditMode}>edit</button>
           </div>
        )
    }

    if(isInEditMode === true){
        return (
            <div>
            <h3>add a event</h3>

            <form id="addEvents" onSubmit={handleSubmit}>
              <label htmlFor="name">name of event</label>
				<input
					type="text"
					name="name"
                    placeholder={name}
					value={newName}
					onChange={e => setNewName(e.target.value)}
				/>

                <label htmlFor="longitude">date of event</label>
				<input
					type="date"
					name="date"
                    placeholder={date}
					value={newDate}
					onChange={e => setNewDate(e.target.value)}
				/>

                <label htmlFor="chooseLocation">choose your location</label>
                <select id="chooseLocation" onChange={e => setNewLocation(e.target.value)} >
                 {locations.map(location => {
                    return <option value={location._id}>{location.name}</option>
                 })}
                </select>

                <button type="submit">update this event</button>
            </form>
            </div>
        )
    }
    
    
}

export default EventCard
