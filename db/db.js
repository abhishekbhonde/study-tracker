const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:String
})


const StudyTaskSchema = new mongoose.Schema({
        task:String,
        createdDate: {
            type: Date,
            default: Date.now // Set the default value to the current date and time
        }
})

const User = mongoose.model('User', userSchema);
const StudyTask = mongoose.model('StudyTask', StudyTaskSchema);
module.exports= {
    User,
    StudyTask
}