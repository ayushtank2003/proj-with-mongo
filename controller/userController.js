const UserModel=require("../models/userModels");
const {CatchAsync}=require("../errorHandling/utils")

exports.getAllUser = CatchAsync(async (req, res, next) => {
    const users = await UserModel.find().select("-__v");
    res.status(200).json({
        status: "success",
        count: users.length,
        data: users,
    });
});

exports.getUserById = CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const user = await UserModel.findById(id).select("-__v");
    if (!user) {
        return next(new AppError(`User ID ${id} not found`, 404));// this will tranfer this to globle errie handler
    }
    res.status(200).json({
        status: "success",
        data: user,
    });
});

exports.createUser = CatchAsync(async (req, res, next) => {
    const { username, password, email, role } = req.body;
    const user = await UserModel.create({ username, email, password, role });
    res.status(201).json({
        status: "success",
        data: user,
    });
});

exports.updateUserById = CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { username, email, password, role } = req.body;
    const newUser = await UserModel.findByIdAndUpdate(
        id,
        { username, email, password, role },
        { new: true, runValidators: true }
    );
    if (!newUser) {
        return next(new AppError(`User ID ${id} not found`, 404));
    }
    res.status(200).json({
        status: "success",
        data: newUser,
    });
});

exports.deleteUserById = CatchAsync(async (req, res, next) => {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    if  (!user) {
        return next(new AppError(`User ID ${id} not found`, 404));
    }
    res.status(204).json({
        status: "success",
        data: null,
    });
});

exports.authorizeUser = CatchAsync(async (req, res, next) => {
    const { password: passwordInHeader } = req.headers;
    const { id } = req.params;

    const user = await UserModel.findById(id);
    if (!user || user.password !== passwordInHeader) {
        return next(new AppError(`You are not authorized to perform this operation`, 401));
    }
    next();
});
