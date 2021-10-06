import React from 'react'
import { useState } from 'react'

function Datefilter() {
    
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
    const clickedDayOne = () => {
        setSelectedDate(getDayOne())
    }

    const clickedDayTwo = () => {
        setSelectedDate(getDayTwo())
    }

    const clickedDayThree = () => {
        setSelectedDate(getDayThree())
    }

    const clickedDayFour = () => {
        setSelectedDate(getDayFour())
    }

    const clickedDayFive = () => {
        setSelectedDate(getDayFive())
    }

    const clickedDaySix = () => {
        setSelectedDate(getDaySix())
    }

    const clickedDaySeven = () => {
        setSelectedDate(getDaySeven())
        
    }

    
    return (
        <div>
            
                <button onClick={clickedDayOne} id="dayOne">{getDayOne()}</button>
                <button onClick={clickedDayTwo} id="dayTwo">{getDayTwo()}</button>
                <button onClick={clickedDayThree} id="dayThree">{getDayThree()}</button>
                <button onClick={clickedDayFour} id="dayFour">{getDayFour()}</button>
                <button onClick={clickedDayFive} id="dayFive">{getDayFive()}</button>
                <button onClick={clickedDaySix} id="daySix">{getDaySix()}</button>
                <button onClick={clickedDaySeven} id="daySeven">{getDaySeven()}</button>
            
        </div>
    )
}

export default Datefilter
