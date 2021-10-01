import { Link } from 'react-router-dom';
import React from 'react'

//name, date, location,  _id)
function EventCard(props) {
    const location = props.location
    return (
        <div>
            <Link to={`/events/${props._id}`} >
                <h3>{props.name}</h3>
                <h4>{(props.date).toString().slice(0, 10)}</h4>
                <h4>{location.name}</h4>
                
            </Link>
        </div>
    )
}

export default EventCard
