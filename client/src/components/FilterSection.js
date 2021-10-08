import React from 'react'
import { useState } from 'react'



function FilterSection(props) {
    

  /* FÜR FILTERBAR UND KARTE 
   
  Z-Index (bestimmt, was über was gelegt wird) einstellen, Filterbar zuerst
  Disable map movement  map dragging 

  */
     function getDayOne(){
        const dayOne = new Date().toLocaleDateString()
        const end = dayOne.lastIndexOf(".")
        var dayOneWithoutYear = dayOne.slice(0, end)
        return dayOneWithoutYear
      }
      
      
      
      function getDayTwo(){
        const dayOne = new Date()
        
        const dayTwo = new Date(dayOne)
        dayTwo.setDate(dayOne.getDate() + 1)
        
        const dayTwoAsLocalTimeString = dayTwo.toLocaleDateString()
        const end = dayTwoAsLocalTimeString.lastIndexOf(".")
        const dayTwoWithoutYear = dayTwoAsLocalTimeString.slice(0, end)
        return dayTwoWithoutYear
        
      }
      
      
      
      function getDayThree(){
        const dayOne = new Date()
        
        const dayThree = new Date(dayOne)
        dayThree.setDate(dayOne.getDate() + 2)
        
        const dayThreeAsLocalTimeString = dayThree.toLocaleDateString()
        const end = dayThreeAsLocalTimeString.lastIndexOf(".")
        const dayThreeWithoutYear = dayThreeAsLocalTimeString.slice(0, end)
        return dayThreeWithoutYear
      }
      
      
      function getDayFour(){
        const dayOne = new Date()
        
        const dayFour = new Date(dayOne)
        dayFour.setDate(dayOne.getDate() + 3)
        
        const dayFourAsLocalTimeString = dayFour.toLocaleDateString()
        const end = dayFourAsLocalTimeString.lastIndexOf(".")
        const dayFourWithoutYear = dayFourAsLocalTimeString.slice(0, end)
        return dayFourWithoutYear
      }
      
      
      function getDayFive(){
        const dayOne = new Date()
        
        const dayFive = new Date(dayOne)
        dayFive.setDate(dayOne.getDate() + 4)
        
        const dayFiveAsLocalTimeString = dayFive.toLocaleDateString()
        const end = dayFiveAsLocalTimeString.lastIndexOf(".")
        const dayFiveWithoutYear = dayFiveAsLocalTimeString.slice(0, end)
        return dayFiveWithoutYear
      }
      
      
      function getDaySix(){
        const dayOne = new Date()
        
        const daySix = new Date(dayOne)
        daySix.setDate(dayOne.getDate() + 5)
        
        const daySixAsLocalTimeString = daySix.toLocaleDateString()
        const end = daySixAsLocalTimeString.lastIndexOf(".")
        const daySixWithoutYear = daySixAsLocalTimeString.slice(0, end)
        return daySixWithoutYear
      }
      
      function getDaySeven(){
         const dayOne = new Date()
        
        const daySeven = new Date(dayOne)
        daySeven.setDate(dayOne.getDate() + 6)
        
        const daySevenAsLocalTimeString = daySeven.toLocaleDateString()
        const end = daySevenAsLocalTimeString.lastIndexOf(".")
        const daySevenWithoutYear = daySevenAsLocalTimeString.slice(0, end)
        return daySevenWithoutYear
      }

    const [selectedDate, setSelectedDate] = useState(getDayOne())
    
    const [dayOneClicked, setDayOneClicked] = useState(true)
    const [dayTwoClicked, setDayTwoClicked] = useState(false)
    const [dayThreeClicked, setDayThreeClicked] = useState(false)
    const [dayFourClicked, setDayFourClicked] = useState(false)
    const [dayFiveClicked, setDayFiveClicked] = useState(false)
    const [daySixClicked, setDaySixClicked] = useState(false)
    const [daySevenClicked, setDaySevenClicked] = useState(false)


    const clickedDayOne = () => {
        setSelectedDate(getDayOne())
        props.setDateFilter(getDayOne())

        //visual feedback
        setDayOneClicked(true)
        setDayTwoClicked(false)
        setDayThreeClicked(false)
        setDayFourClicked(false)
        setDayFiveClicked(false)
        setDaySixClicked(false)
        setDaySevenClicked(false)
    }

    const clickedDayTwo = () => {
        setSelectedDate(getDayTwo())
        props.setDateFilter(getDayTwo())


        //visual feedback
        setDayOneClicked(false)
        setDayTwoClicked(true)
        setDayThreeClicked(false)
        setDayFourClicked(false)
        setDayFiveClicked(false)
        setDaySixClicked(false)
        setDaySevenClicked(false)
        
    }

    const clickedDayThree = () => {
        setSelectedDate(getDayThree())
        props.setDateFilter(getDayThree())


        //visual feedback
        setDayOneClicked(false)
        setDayTwoClicked(false)
        setDayThreeClicked(true)
        setDayFourClicked(false)
        setDayFiveClicked(false)
        setDaySixClicked(false)
        setDaySevenClicked(false)
    }

    const clickedDayFour = () => {
        setSelectedDate(getDayFour())
        props.setDateFilter(getDayFour())


        //visual feedback
        setDayOneClicked(false)
        setDayTwoClicked(false)
        setDayThreeClicked(false)
        setDayFourClicked(true)
        setDayFiveClicked(false)
        setDaySixClicked(false)
        setDaySevenClicked(false)
    }

    const clickedDayFive = () => {
        setSelectedDate(getDayFive())
        props.setDateFilter(getDayFive())


        //visual feedback
        setDayOneClicked(false)
        setDayTwoClicked(false)
        setDayThreeClicked(false)
        setDayFourClicked(false)
        setDayFiveClicked(true)
        setDaySixClicked(false)
        setDaySevenClicked(false)
    }

    const clickedDaySix = () => {
        setSelectedDate(getDaySix())
        props.setDateFilter(getDaySix())


        //visual feedback
        setDayOneClicked(false)
        setDayTwoClicked(false)
        setDayThreeClicked(false)
        setDayFourClicked(false)
        setDayFiveClicked(false)
        setDaySixClicked(true)
        setDaySevenClicked(false)
    }

    const clickedDaySeven = () => {
        setSelectedDate(getDaySeven())
        props.setDateFilter(getDaySeven())


        //visual feedback
        setDayOneClicked(false)
        setDayTwoClicked(false)
        setDayThreeClicked(false)
        setDayFourClicked(false)
        setDayFiveClicked(false)
        setDaySixClicked(false)
        setDaySevenClicked(true)
        
    }
  
    //FILTER MENU

    const [clickedFilterMenu, setClickedFilterMenu] = useState(false)
    

    const openFilterMenu = (e) => {
       e.preventDefault()
       setClickedFilterMenu(true)
       setFilterMenuOpen(true)
       
    }

    const closeFilterMenu = (e) => {
      e.preventDefault()
      setClickedFilterMenu(false)
      setFilterMenuOpen(false)
      
  }

     

    const [startingTimeVal, setStartingTimeVal] = useState(14)
    const [endingTimeVal, setEndingTimeVal] = useState(12)
    const [filteredGenre, setFilteredGenre] = useState("hip-hop")
    const [filteredAge, setFilteredAge] = useState("18+")
    const [costVal, setCostVal] = useState(15)
    const [filterMenuOpen, setFilterMenuOpen] = useState(false)

    const handleSubmit = () => {
      props.setStartingTimeFilter(startingTimeVal)
      props.setEndingTimeFilter(endingTimeVal)
      props.setCostFilter(costVal)
      props.setStartingTimeFilter(filteredAge)
      props.setGenreFilter(filteredGenre)
      props.setFilterMenuOpen(filterMenuOpen)

      setClickedFilterMenu(false)
    }

    
    return (
        <div>            
         <div id="dateFilter">
           <button onClick={clickedDayOne} style={dayOneClicked ? {color : "#ffffff", backgroundColor : '#a48beb'}  : { color : "#a48beb" }}>{getDayOne()}</button>
           <button onClick={clickedDayTwo} style={dayTwoClicked ? {color : "#ffffff", backgroundColor : '#a48beb'}  : { color : "#a48beb" }}>{getDayTwo()}</button>
           <button onClick={clickedDayThree} style={dayThreeClicked ? {color : "#ffffff", backgroundColor : '#a48beb'}  : { color : "#a48beb" }}>{getDayThree()}</button>
           <button onClick={clickedDayFour} style={dayFourClicked ? {color : "#ffffff", backgroundColor : '#a48beb'}  : { color : "#a48beb" }}>{getDayFour()}</button>
           <button onClick={clickedDayFive} style={dayFiveClicked ? {color : "#ffffff", backgroundColor : '#a48beb'}  : { color : "#a48beb" }}>{getDayFive()}</button>
           <button onClick={clickedDaySix} style={daySixClicked ? {color : "#ffffff", backgroundColor : '#a48beb'}  : { color : "#a48beb" }}>{getDaySix()}</button>
           <button onClick={clickedDaySeven} style={daySevenClicked ? {color : "#ffffff", backgroundColor : '#a48beb'}  : { color : "#a48beb" }}>{getDaySeven()}</button>
         </div>

         <div id="filterMenu">
          <button onClick={openFilterMenu}>filter</button>
          {clickedFilterMenu ?(
                  <div id="filtermenu">
                      <h1>filter menu</h1>
                      <button onClick={closeFilterMenu}>x</button>
                      
                      <form id="filterMenu" onSubmit={handleSubmit}>
                      <div id="openingHoursSlider">
                       <input 
                         type="range"
                         min={14}
                         max={24}
                         step={1}
                         value={startingTimeVal}
                         onChange={e => setStartingTimeVal(e.target.value)}
                         >
                       </input>

                       <input 
                         type="range"
                         min={0}
                         max={12}
                         step={1}
                         value={endingTimeVal}
                         onChange={e => setEndingTimeVal(e.target.value)}
                         >
                       </input>

                       <p>from : {startingTimeVal} at least until : {endingTimeVal}</p>
                      </div>  
                        
                       <div>
                         <label>choose genre</label>
                         <select id="filterGenre"
                            onChange={e => setFilteredAge(e.target.value)}>

                           <option value={"hip-hop"}>hip-hop</option>
                           <option value={"techno"}>techno</option>
                           <option value={"jazz"}>jazz</option>
                         </select>
                       </div>
                      
                      <label>age of entrance</label>
                       <select id="filterAge"
                          onChange={e => setFilteredAge(e.target.value)}>

                         <option value={"18+"}>18+</option>
                         <option value={"21+"}>21+</option>
                       </select>

                       <label>max ticket price</label>
                       <input 
                         type="range"
                         min={0}
                         max={20}
                         step={1}
                         value={costVal}
                         onChange={e => setCostVal(e.target.value)}
                         >
                       </input>  
                       <button type="submit">get results</button>
                      </form>        
                  </div>
              ): null}
         </div>
                
        </div>
    )
}

export default FilterSection
