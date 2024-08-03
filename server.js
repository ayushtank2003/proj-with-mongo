const express =require("express");
const userRouter = require("./routes/userRouter");
const app = express();
const port=8000;

app.use("/user",  userRouter);

const server = app.listen(port,()=>{
    console.log(`server is running at port${port}`);
    
});

