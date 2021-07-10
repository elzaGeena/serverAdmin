const express = require('express');
const router = express.Router()
const Student = require('../models/students')
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    const student = new Student({
        semester:req.body.semester,
        rollNo: req.body.rollNo,
        regNo: req.body.regNo,
        name: req.body.name,
    })
    try {
        const s1 = await student.save();
        res.json(s1)
    } catch (err) {
        res.send("error")
    }
})
module.exports = router