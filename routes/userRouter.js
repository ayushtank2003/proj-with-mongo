const{
    getAllUser,
    getUserById, 
    createUser, 
    updateUserById, 
    deleteUserById,
    authorizeUser,
}=require("../controller/userController");

const express = require("express");
const userRouter = express.Router();


userRouter.get("/",getAllUser);//get all user
userRouter.get("/:id",getUserById);//get all by id 
userRouter.post("/",createUser);//create a new user
userRouter.patch("/:id",authorizeUser,updateUserById); //update all by id 
userRouter.delete("/:id",authorizeUser,deleteUserById); // delete user by id 

module.exports=userRouter;
