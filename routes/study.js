const express = require('express')
const {Router} = require('express');
const router = Router();
const {User,StudyTask} = require('../db/db.js')
const signMiddelware = require('../middelware/signMiddelware.js')
router.use(express.json());


router.post('/createstudytask', async(req, res)=>{
        const {task} = req.body;
        try {
            const response = await StudyTask.create({
                task
            }).then(function(value){
                res.json({
                    msg:"Task created successfully"
                })
            })
        } catch (error) {
            res.json({
                msg:"Failed to create task"
            })
        }
})

router.get('/gettasks', async(req, res)=>{

   
        const tasks = await StudyTask.find()
        res.json({
            tasks
        })
    });
module.exports = router;