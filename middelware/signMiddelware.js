const express = require('express')
const {Router} = require('express');
const router = Router();
const {User} = require('../db/db.js')

router.use(express.json());



router.post('/signin', (req,res)=>{
    const {username, password} = req.body;
    try {
        const response = User.find({
            username,
            password
        }).then(function(value){
            res.json({
                msg:"User signed successfully"
            })
        })
    } catch (error) {
        res.status().json({
            msg:"Failed to singin"
        })
    }
} )