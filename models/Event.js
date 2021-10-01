const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    name: String,
    date: Date, 

     location: {
         type:  Schema.Types.ObjectId,
         ref: "Location"
     }
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event;
