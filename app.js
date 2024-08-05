const express =require("express");
const dotenv = require("dotenv");
dotenv.config({path:"./.env"});

const userRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());

app.use("/user",  userRouter);

module.exports=app; 