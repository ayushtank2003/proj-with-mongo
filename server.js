const express =require("express");
const mongoose =require("mongoose") 
const userRouter = require("./routes/userRouter");
const app = express();
const port=8000;

app.use("/user",  userRouter);

const server = app.listen(port,()=>{
    console.log(`server is running at port${port}`);
    
});

const DB =mongoose.connect("mongodb+srv://ayush:kLtVxBEhSTu3ZFIq@cluster0.lqes229.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connect to database");
    
});

