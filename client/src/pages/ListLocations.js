import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import AddLocation from '../components/AddLocation';
import LocationCard from '../components/LocationCard';


function ListLocations(props) {
    
    const API_URL = "http://localhost:5005"
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
    }, [/*state or props in here */])

    return (
        <div>
            <AddLocation refreshLocations={getAllLocations} />
            
            <h3>all locations</h3>
            {locations.map(location => <LocationCard key={location._id}  {...location} />)}
            
        </div>
    )
}

export default ListLocations
