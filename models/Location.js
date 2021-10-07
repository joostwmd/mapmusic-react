const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const locationSchema = new Schema({
    name : String,
    coordinates : Array,
    // discription : String,
    
    // nearestStation : {
    //     name : String, 
    //     distance : String,
    //     availableLines : Array
    // }
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location
