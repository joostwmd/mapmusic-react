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
	const [name, setName] = useState();
	const [date, setDate] = useState()
    const [location, setLocation] = useState() // i need to implement a logic, that waits until all the locations are loadede
    const [price, setPrice] = useState()
    const [startingTime, setStartingTime] = useState()
    const [endingTime, setEndingTime] = useState()
    const [ageOfEntrance, setAgeOfEntrance] = useState()
    const [genre, setGenre] = useState()

    const musicGenres = ["techno", "hip-hop", "jazz"]

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {name, date, location, price, startingTime, endingTime, ageOfEntrance, genre};
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

                <label htmlFor="date">date of event</label>
				<input
					type="text"
					name="date"
					value={date}
					onChange={e => setDate(e.target.value)}
				/>

                <label htmlFor="price">price of event</label>
				<input
					type="number"
					name="price"
					value={price}
					onChange={e => setPrice(e.target.value)}
				/>

                <label htmlFor="startingTime">start of event</label>
				<input
					type="text"
					name="startingTime"
					value={startingTime}
					onChange={e => setStartingTime(e.target.value)}
				/>

                <label htmlFor="endingTime">end of event</label>
				<input
					type="text"
					name="endingTime"
					value={endingTime}
					onChange={e => setEndingTime(e.target.value)}
				/>

                <label htmlFor="ageOfEntrance">age of entrance</label>
				<input
					type="text"
					name="ageOfEntrance"
					value={ageOfEntrance}
					onChange={e => setAgeOfEntrance(e.target.value)}
				/>

                <label htmlFor="genre">genre of event</label>
                <select id="gerne" onChange={e => setGenre(e.target.value)}>
                    {musicGenres.map(musicGenre => {
                        return <option value={musicGenre}>{musicGenre}</option>
                    })}
                </select>

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
 