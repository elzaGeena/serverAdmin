const express = require('express');
const router = express.Router()
const Semdetail = require('../models/semdetails')
router.get('/',async(req, res) =>{
    try{
        const semdetails = await Semdetail.find();
        res.json(semdetails[0])
    }catch(err){
        res.send('Error'+ err)
    }
})

router.delete('/:id',async(req, res) =>{
    try{
        const semdetails = await Semdetail.findByIdAndDelete(req.params.id);
        res.json(semdetails)
    }catch(err){
        res.send('Error'+ err)
    }
})

router.put('/:id',async(req, res) =>{
    try{
        const semdetails = await Semdetail.findByIdAndUpdate(req.params.id,{
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        sem: req.body.sem
    });
        res.json(semdetails)
    }catch(err){
        res.send('Error'+ err)
    }
})

module.exports = router
