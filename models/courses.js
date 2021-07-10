const mongoose = require('mongoose')



const courseSchema = new mongoose.Schema({
    semester: {
        type: Number,
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    }, 
})

module.exports = mongoose.model('Course',courseSchema)