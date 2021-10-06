import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactMapGl, {Marker, Popup} from "react-map-gl"
import Style from '../App.css'

import FilterSection from '../components/FilterSection'


function Map() {

   const berlinBounds = [
       [52.37287294941263, 13.111987793255805], // south west
       [52.703520866231194, 13.793436405383185] // north east
   ] 

   //const mapBounds = [13.404954, 52.520008]

   const [viewport, setViewport] = useState({
       latitude : 52.520008,
       longitude : 13.404954,
       width : "100vw",
       height : "100vh",
       zoom : 9,
       //maxBounds : mapBounds,
       minZoom: 9
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
    
    
    return (
    <div>
        <div id="mapPage">
          <div id="map">
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
                         <p>some short discription</p>
                         <p>some dj</p>
                         <audio controls>
                             <source src="https://p.scdn.co/mp3-preview/6be8eb12ff18ae09b7a6d38ff1e5327fd128a74e?cid=162b7dc01f3a4a2ca32ed3cec83d1e02"></source>
                         </audio>

                         <h3>info</h3>
                         <p>genre : {clickedEvent.genre}</p>
                         <p>cost : {clickedEvent.cost}</p>
                         <p>opening Hours : from {clickedEvent.startingTime} to {clickedEvent.endingTime}</p>
                         <p>age of entrance : {clickedEvent.ageOfEntrance}</p>
                     </div>
                 </Popup>
              ) : null}
              
              {hoveredEvent ? (
                  <Popup
                   latitude={hoveredEvent.location.coordinates[0]} 
                   longitude={hoveredEvent.location.coordinates[1]}
                  >
                   <div>
                       <h1>{hoveredEvent.name}</h1>
                       <p>propmeted by: some propmoter</p>
                   </div>

                   </Popup>
              ) : null}
             </ReactMapGl>
          </div>
          <div id="filter">
              <FilterSection />
          </div>
        </div>   
    </div>
    )
}

export default Map
