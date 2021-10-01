const router = require("express").Router();
const Event = require("../models/Event");
const Location = require("../models/Location");





//get all event 
router.get("/events", (req, res, next) => {
  Event.find().populate("location")
       .then(events => {
         console.log("response from events route ", events)
         res.status(200).json(events)
       })

       .catch(err => next(err))
})

//get all locations
router.get("/locations", (req, res, next) => {
  Location.find()
          .then(locations => {
            res.status(200).json(locations)
          })
          .catch(err => next(err))
})

//create a event
//get all locations for drop down


router.get("/events", (req, res, next) => {
  Location.find()
          .then(locations => {
            res.status(200).json(locations)
          })
          .catch(err => next(err))
})    


router.post("/events", (req, res, next) => {
  const name = req.body.name
  const date = req.body.date
  const location =  req.body.location
  Event.create({
    name : name,
    date : date,
    location : location
  })

  .then(event => {
    res.status(201).json(event)
  })
  .catch(err => next(err))
})

//create a location
router.post("/locations", (req, res, next) => {
  const name = req.body.name
  const altitude = req.body.latitude
  const longitude = req.body.longitude
  
  Location.create({
    name : name,
    //check altitude, logitude if correct order
    coordinates : [Number(altitude), Number(longitude)]
  })

  .then(location => {
    res.status(201).json(location)
  })
})

//delete location
router.delete('locations/:id', (req, res, next) => {
  Location.findByIdAndDelete(req.body)
      .then(() => {
          console.log("gelöscht")
          res.status(200).json({ message: 'location deleted' });
      })
});


//edit location



//delete event 



//edit event 





router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
