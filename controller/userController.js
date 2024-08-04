const UserModel=require("../models/userModels");

exports.getUserById=function(req,res){
    res.status(200).send("you hit getUserByID");
};

exports.createUser=async function (req,res){
    const{username ,password, email}=req.body;
    try{
        await UserModel.create({username,password,email});
    } catch(err){
        res.status(500).send({
            status:"faiure",
            error:err.message,
        })
   }
     
    res.status(200).send({
        status:"success",
        data:"user created successfully",
    });
};


exports.updateUserById=function(req,res){
    res.status(200).send("you hit updateUserByID");
};

exports.deleteUserById=function(req,res){
    res.status(200).send("you hit deleteUserByID");
};





