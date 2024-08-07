const express =require("express");
const dotenv = require("dotenv");
dotenv.config({path:"./.env"});

const userRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());

app.use("/user",  userRouter);


app.all("*",(req,res)=>{
    res.status(404).json({
        status:"error",
        message:`can't find ${ req.originalUrl} on this server`,
    });
});

module.exports=app; 
