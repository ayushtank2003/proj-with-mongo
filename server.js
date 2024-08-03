const express =require("express");
const mongoose =require("mongoose") 
const userRouter = require("./routes/userRouter");
const app = express();
const port=8000;

app.use("/user",  userRouter);

const server = app.listen(port,()=>{
    console.log(`server is running at port${port}`);
    
});

const DB =mongoose.connect("").then(()=>{
    console.log("connect to database");
    
});

