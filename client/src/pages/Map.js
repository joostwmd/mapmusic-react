import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactMapGl, {Marker, Popup} from "react-map-gl"

import Datefilter from '../components/Datefilter'


function Map() {
   const [viewport, setViewport] = useState({
       latitude : 52.520008,
       longitude : 13.404954,
       width : "100vw",
       height : "100vh",
       zoom : 10
   })

    
    const [allEvents, setAllEvents] = useState([])
    const API_URL = 'http://localhost:5005';

    const getAllEvents = () => {
        axios.get(`${API_URL}/api/events`)
             .then(res => {
                 setAllEvents(res.data)
             })
             .catch(err => console.log(err))
    }
    useEffect(() => {
        getAllEvents()
    }, [])
   
    const [clickedEvent, setClickedEvent] = useState(null)
    const [hoveredEvent, setHoveredEvent] = useState(null)
    const [clickedFilterMenu, setClickedFilterMenu] = useState(false)

    const openFilterMenu = (e) => {
       e.preventDefault()
       setClickedFilterMenu(true)
    }

    const closeFilterMenu = (e) => {
        e.preventDefault()
        setClickedFilterMenu(false)
    }
    
    return (
        <div>
         <Datefilter />
         <button onClick={openFilterMenu}>filter</button>
         <ReactMapGl
           {...viewport}
           mapboxApiAccessToken = "pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ"
           mapStyle = "mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv"
           onViewportChange = {viewport => {
               setViewport(viewport)
           }}
           >
             {allEvents.map((event) => {
                 return (
                    <Marker 
                    latitude={event.location.coordinates[0]} 
                    longitude={event.location.coordinates[1]}
                    >

                     <button 
                      onClick={(e) => {
                         e.preventDefault()
                         setClickedEvent(event)
                         setHoveredEvent(null)
                         
                     }}
                      onMouseEnter={(e) => {
                          if(clickedEvent === null){
                              setHoveredEvent(event)}
                          
                      }}

                      onMouseLeave={(e) => {
                          setHoveredEvent(null)
                          
                      }}
                     >
                         
                     </button>
                    </Marker>
                 )
             })}
              {clickedEvent ? (
                 <Popup 
                   latitude={clickedEvent.location.coordinates[0]} 
                   longitude={clickedEvent.location.coordinates[1]}
                   onClose={() => {
                       setClickedEvent(null)
                   }}
                   >
                     <div>
                         <h1>{clickedEvent.name}</h1>
                         <p>{clickedEvent.date.toString().slice(0, 10)}</p>
                     </div>
                 </Popup>
              ) : null}
              
              {hoveredEvent ? (
                  <Popup
                   latitude={hoveredEvent.location.coordinates[0]} 
                   longitude={hoveredEvent.location.coordinates[1]}
                  >
                   <div>
                       <h1>hover</h1>
                   </div>

                   </Popup>
              ) : null}
              {clickedFilterMenu ?(
                  <div id="filtermenu">
                      <h1>filter menu</h1>
                      <button onClick={closeFilterMenu}>x</button>
                      <input type="range"></input>
                      <input type="range"></input>
                      <input type="range"></input>
                      
                  </div>
              ): null}
           </ReactMapGl>
            
        </div>
    )
}

export default Map
