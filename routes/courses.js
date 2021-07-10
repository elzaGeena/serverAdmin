const express = require('express');
const router = express.Router()
const Course = require('../models/courses')
router.get('/',async(req, res) =>{
    try{
        const courses = await Course.find();
        res.json(courses)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res)=>{
    const course = new Course({
        semester: req.body.semester,
        courseCode: req.body.courseCode,
        courseName: req.body.courseName,
    })
    try{
       const a1 = await course.save();
       res.json(a1)
    }catch(err){
        res.send("error")
    }
})
module.exports = router