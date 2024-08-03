const express = require("express");
const userRouter = express.Router();

userRouter.get("/:id");//get all by id 
userRouter.post("/");//create a new user
userRouter.patch("/:id"); //update all by id 
userRouter.delete("/:id"); // delete user by id 