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
    
router.delete('/deletetask/:id', async (req, res) => {
        const { id } = req.params;
        try {
          const result = await StudyTask.findByIdAndDelete(id);
          if (result) {
            res.json({ msg: 'Task deleted successfully' });
          } else {
            res.status(404).json({ msg: 'Task not found' });
          }
        } catch (error) {
          res.status(500).json({ msg: 'Failed to delete task' });
        }
      });
module.exports = router;