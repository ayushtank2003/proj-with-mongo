const express = require("express");
const{
    getUserById, 
    createUser, 
    updateUserById, 
    deleteUserById
}=require("../controller/userController");

const userRouter = express.Router();

userRouter.get("/:id",getUserById);//get all by id 
userRouter.post("/",createUser);//create a new user
userRouter.patch("/:id",updateUserById); //update all by id 
userRouter.delete("/:id",deleteUserById); // delete user by id 

module.exports=userRouter