const express = require('express');
const router = express.Router()
const Faculty = require('../models/faculties')
router.get('/',async(req, res) =>{
    try{
        const faculties = await Faculty.find();
        res.json(faculties)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res)=>{
    const faculty = new Faculty({
        fId: req.body.fId,
        name: req.body.name,
        courses: req.body.courses
    })
    try{
       const f1 = await faculty.save();
       res.json(f1)
    }catch(err){
        res.send("error")
    }
})
module.exports = router