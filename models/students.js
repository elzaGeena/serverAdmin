// semester: semester,
//             rollNo: rollNo,
//             regNo: regNo,
//             name: name,
const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    semester: {
        type: Number,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    regNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Student',studentSchema)