const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhishekbhonde:RnIkGDrq2zPwU9R7@cluster0.lzsrjgd.mongodb.net/database2');

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

const ProgressTracker = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        unique: true // Assuming one entry per day
    },
    studyhours: {
        type: Number,
        required: true
    },
    resthours: {
        type: Number,
        required: true
    }
})

const Progress = mongoose.model('Progress', ProgressTracker)
const User = mongoose.model('User', userSchema);
const StudyTask = mongoose.model('StudyTask', StudyTaskSchema);
module.exports= {
    User,
    StudyTask,
    Progress
}
