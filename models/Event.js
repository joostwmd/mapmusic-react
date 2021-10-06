const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    name: String,
    date: String, 
    cost : Number, 
    startingTime : String,
    endingTime : String,
    ageOfEntrance : String,
    genre : Array,

     location: {
         type:  Schema.Types.ObjectId,
         ref: "Location"
     }
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event;
