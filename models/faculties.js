// fId: fId,
// name: name,
// courses: courses
const mongoose = require('mongoose')
const facultySchema = new mongoose.Schema({
    fId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    courses: {
        type: Array,
        required: true
    }, 
})

module.exports = mongoose.model('Faculty',facultySchema)