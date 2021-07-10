// startDate: newDateStart,
// endDate: newDateEnd,
// sem: sem
const mongoose = require('mongoose')
const semdetailSchema = new mongoose.Schema({
   
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    sem:{
        type: String,
        required: true
    }, 
})

module.exports = mongoose.model('Semdetail',semdetailSchema)