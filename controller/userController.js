import HttpError from "../middlware/HttpError.js";
import user from "../model/userModel.js";
import User from "../model/userModel.js";


const add = async (req, res, next) => {
    try {

        const { name, email, password } = req.body;

        const newUser = new user({
            name,
            email,
            password,
        });

        await newUser.save();

        const token = await newUser.generateAuthToken();

        res.status(201).json({
            success: true,
            message: "new user add successFully",
            token,
            data: newUser,
        });
    } catch (error) {
        return next(new HttpError(error.message, 500));
    }
};

const getAlluUser = async (req, res, next) => {
    try {
        const user = await users.find({});

        if (!user) {
            throw new Error("user id not found");
        }

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

        const userLogin = await user.findByCredentials(email, password);

        if (!userLogin) {
            next(new HttpError("unable to login",));
        }

        res.status(200).json({
            success: true,
            data: userLogin
        });
    } catch (error) {
        next(new HttpError("error.message", 500));
    }
};

export default { add, getAlluUser, login };
