const mongoose = require("mongoose");
const validator = require("email-validator");

const userSchema = new mongoose.Schema({
    username:{
        required:[true,"please Provide a username"],
        type:String,
    },
    password:{
        required:[true,"please Provide a password"],
        type:String,
    },
    email:{
        type:String,
        required:[true,"please Provide a email"],
        validate: {
            validator: function (v) {
                return validator.validate(v);
            },
            message:"Please provide a valid email",
        },
    },
    role:{
        type:String,
        enum:["user","admin","owner"],
        default:"user",
    },
});

const UserModel = mongoose.model('User',userSchema );
module.exports = UserModel;