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

const User = mongoose.model('User', userSchema);

module.exports= {
    User
}