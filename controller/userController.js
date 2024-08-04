const UserModel=require("../models/userModels");

exports.getUserById=function(req,res){
    res.status(200).send("you hit getUserByID");
};

exports.createUser=async function (req,res){
    const{username ,password, email}=req.body;
    await UserModel.create();
     
    res.status(200).send("you hit createUser");
};


exports.updateUserById=function(req,res){
    res.status(200).send("you hit updateUserByID");
};

exports.deleteUserById=function(req,res){
    res.status(200).send("you hit deleteUserByID");
};





