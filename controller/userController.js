import HttpError from "../middleware/HttpError.js";
import User from "../model/userModel.js";


const add = async (req, res, next) => {
    try {

        const { name, email, password } = req.body;

        const newUser = new User({
            name,
            email,
            password,
        });

        await newUser.save();

        console.log(newUser);

        res.status(201).json({
            success: true,
            message: "new user add successFully",
            data: newUser,
        });
    } catch (error) {
        return next(new HttpError(error.message, 500));
    }
};

const getAllUser = async (req, res, next) => {
    try {
        const user = await User.find({});

        if (!user) {
            throw new Error("user id not found");
        }

        console.log(user);

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        return next(new HttpError("user not found", 500));
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userLogin = await User.findByCredentials(email, password);

        const token = await userLogin.generateAuthToken();

        if (!userLogin) {
            next(new HttpError("unable to login",));
        }

        console.log(userLogin);

        res.status(200).json({
            success: true,
            data: userLogin,
            token
        });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const authLogin = async (req, res, next) => {
    try {
        const user = req.user;

        if (!user) {
            return next(new HttpError("unable to login", 404));
        }

        console.log(user);

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        return next(new HttpError(error.message, 500));
    }
};

const deleteAuth = async (req, res, next) => {
    try {
        const user = req.user;

        await user.deleteOne(user);

        console.log(user);

        res.status(200).json({
            success: true,
            message: "login user deleted successFully"
        });
    } catch (error) {
        return next(new HttpError("please some problems user not deleted", 500));
    }
};

const updateAuth = async (req, res, next) => {
    try {
        const user = req.user;

        const updates = Object.keys(req.body);

        const allowedFields = ["name", "password"];

        const isVaildUpdates = updates.every((field) =>
            allowedFields.includes(field));

        if (!isVaildUpdates) {
            return next(new HttpError("please allowed fileds is updateds dont any fields", 400));
        }

        updates.forEach((updates) => {
            user[updates] = req.body[updates]
        });

        console.log(updates);

        await user.save();

        res.status(200).json({
            success: true,
            message: "allowedField is updated",
            data: user
        });
    } catch (error) {
        return next(new HttpError("user not updated", 500));
    }
};


const deleteAllUser = async(req,res,next)=>{
    try{

        const user = req.user;
        
        user.tokens = [];

        await user.save();

        console.log(user);

        res.status(200).json({
            success:true,
            message: " all users are deleted successFully "
        });

    }catch(error){
        return next (new HttpError(error.messaje,500));
    }
}

export default { add, getAllUser, login, authLogin, deleteAuth, updateAuth , deleteAllUser};
