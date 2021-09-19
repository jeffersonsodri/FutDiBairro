const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
    },
    apelido: {
        type: String,
        required: false,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select: false
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);