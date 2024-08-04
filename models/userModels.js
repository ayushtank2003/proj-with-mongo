const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        required:[true,"please Provide a username"],
        type:String,
        unique:true,
    },
    password:{
        required:[true,"please Provide a password"],
        type:String,
    },
    email:{
        type:String,
        required:[true,"please Provide a email"],
        validate: {
            validator: function(v) {
                 return validator.validate(v);
            },
            message:"Please provide a valid email",
        },
        unique:true,
    },
    createdAt  :{
        type:Date,
        default:Date.now(),
    },
});

const UserModel = mongoose.model('User',userSchema );
module.exports = UserModel;