import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import AddEvent from '../components/AddEvent'
import EventCard from '../components/EventCard'

function ListEvents() {
    const API_URL = "http://localhost:5005"
    const [events, setEvents] = useState([])
    
    const getAllEvents = () => {
    axios.get(`${API_URL}/api/events`)
         .then(res => {
             setEvents(res.data)
             console.log("eventspage ", res.data)
         })
         .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllEvents()
    }, [])

    //{events.map(event => <EventCard key={event._id} {...event} />)}
    
    return (
        <div>
            <AddEvent events={events} refreshEvents={getAllEvents}></AddEvent>

            <h3>all events</h3>
            {events.map(event => <EventCard key={event._id} {...event}/>)} 
            
        </div>
    )
}

export default ListEvents
