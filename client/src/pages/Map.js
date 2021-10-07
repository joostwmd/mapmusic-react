import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactMapGl, {Marker, Popup} from "react-map-gl"
import FilterSection from '../components/FilterSection'
import ArtistCard from '../components/ArtistCard'



function Map() {

   const berlinBounds = [
       [52.37287294941263, 13.111987793255805], // south west
       [52.703520866231194, 13.793436405383185] // north east
   ] 

   //const mapBounds = [13.404954, 52.520008]

   const [viewport, setViewport] = useState({
       latitude : 52.520008, 
       longitude : 13.404954,
       width : "100w",
       height : "100vh",
       zoom : 9,
       maxBounds : [
        [52.3673215655286, 13.086180844613281], // south west
        [52.70845414984733, 13.809688463870339] // north east
    ] 
       
       //minZoom: 9
   })

   const [dragPan, setDragPan] = useState(false)
   const [scrollZoom, setScrollZoom] = useState(false)
   const [boxZoom, setBoxZoom] = useState(false)

    
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
    
    //tabs logic for the markers

    const [tabValue, setTabsValue] = useState(null)

    const handleTabChange = (e, newValue) => {
        setTabsValue(newValue)
    }

    //filterd
    function getDayOne(){
        const dayOne = new Date().toLocaleDateString()
        const end = dayOne.lastIndexOf(".")
        var dayOneWithoutYear = dayOne.slice(0, end)
        return dayOneWithoutYear
      } 

    const [dateFilter, setDateFilter] = useState(getDayOne)
    const [startingTimeFilter, setStartingTimeFilter] = useState()
    const [endingTimeFilter, setEndingTimeFilter] = useState()
    const [costFilter, setCostFilter] = useState()
    const [ageFilter, setAgeFilter] = useState("18+")
    const [genreFilter, setGenreFilter] = useState("hip-hop")
    const [filterMenuOpen, setFilterMenuOpen] = useState(false)
    
   
    if(filterMenuOpen === true){
        console.log("x")
    }

    console.log(filterMenuOpen)

    // console.log("start ", startingTimeFilter)
    // console.log("end ", endingTimeFilter)
    // console.log("cost ", costFilter)
    // console.log("Age ", ageFilter)
    // console.log("genre ", genreFilter)

    const filteredEvents = allEvents.filter(function(event){
        return (
            event.date === dateFilter 

        //  && Number(event.ageOfEntrance.slice(0, 1)) >= Number(ageFilter.slice(0, 1)) 
        //  && Number(event.startingTime.slice(0, 1)) >= Number(startingTimeFilter.slice(0, 1)) 
        //  && Number(event.endingTime.slice(0, 1)) <= Number(endingTimeFilter.slice(0, 1)) 
        //  && event.cost <= costFilter && event.genre.includes(genreFilter) === true
        )
    })

    return (
    <div>
             <ReactMapGl
                

             {...viewport}
             mapboxApiAccessToken = "pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ"
             mapStyle = "mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv"
              onViewportChange = {viewport => {
                setViewport(viewport)
             }}
             >

                <FilterSection setFilterMenuOpen={setFilterMenuOpen}  setDateFilter={setDateFilter} setAgeFilter={setAgeFilter} setCostFilter={setCostFilter} setGenreFilter={setGenreFilter} setStartingTimeFilter={setStartingTimeFilter} setEndingTimeFilter={setEndingTimeFilter}/>
             
             {filteredEvents.map((event) => {
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
                         setDragPan(false)
                         setScrollZoom(false)
                         
                     }}
                      onMouseEnter={(e) => {
                          if(clickedEvent === null){
                              setHoveredEvent(event)
                              
                              }
                          
                      }}

                      onMouseLeave={(e) => {
                          setHoveredEvent(null)
                          setViewport(viewport)
                          
                      }}
                     >
                      <p>{event.location.name}</p>  
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
                            <div id="popup">
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

                                     <h3>Line Up</h3>
                                     <ArtistCard  clickedEvent={clickedEvent}  />
                                </div>

                               

                                <div>
                                     <h1>{clickedEvent.location.name}</h1>
                                     <p>{clickedEvent.location.coordinates}</p>
                                </div>
                            </div>  
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
    )
}

export default Map
