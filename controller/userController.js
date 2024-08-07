const UserModel=require("../models/userModels");


exports.getAllUser=async function(req,res) {
    let users;
    try{
        users = await UserModel.find().select("-__v");//if we not await this this will be a query  itself 
        //to wait for his proper execution we should wait for this then only this will be a model
    }catch(err){
        res.status(500).json({
            status:"fail",
            message:err.message,
        });
        return;
    }
    res.status(200).json({
        status:"success",
        count:users.length,
        data:users,
    });
};

exports.getUserById=async function(req,res){
    const{id}=req.params;
    let user;
    try{
        user = await UserModel.findById(id).select("-__v");
    }catch(err){
        res.status(500).json({
            status:"fail",
            message:err.message,
        });
        return;
    }
    res.status(200).json({
        status:"success",
        data:user,
    });
};

exports.createUser=async function (req,res){
    const{username ,password, email,role}=req.body;
    let user;
    try{
       user= await UserModel.create({username,
        email,
        password,
        role
    });
    } catch(err){
        res.status(500).send({
            status:"faiure",
            error:err.message,
        })
        return;
   }
     
    res.status(201).send({
        status:"success",
        data:user,
    });
};


exports.updateUserById=async function(req,res){
    const {id}=req.params;
    const{username, email,password,role}=req.body;
    let newUser;
    try{
        newUser = await UserModel.findByIdAndUpdate(id , {
            username,
            email,
            password,
            role,
        },{
            new:true,
        });
    } catch(err){
        res.status(500).send({
            status:"faiure",
            error:err.message,
        })
        return;
    }
    res.status(201).send({
        status:"success",
        data:newUser,
    });
};

exports.deleteUserById=async function(req,res){
    const {id}=req.params;
    try{
        await UserModel.findByIdAndDelete(id);
    }catch(err){
        res.status(500).send({
            status:"faiure",
            error:err.message,
        })
        return;
    }
    res.status(201).send({
        status:"success",
        data:`User with id:${id} deleted succesfully`,

    });
};

exports.authorizeUser = async function(req,res,next){
    const {password:passwordInHeader}=req.headers;
    const{id}=req.params;

    // I will search the user in db
    const user=await UserModel.findById(id);
    //compare the DB password with the provided in header
    if (user.password == passwordInHeader){
        next();
    } else{
        //return 401 unauthorized
        res.status(401).json({
            status:"fail",
            message:`you are not authorized to perform this operation`,
        });
        return;
    }

};