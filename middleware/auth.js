import jwt from "jsonwebtoken";
import HttpError from "./HttpError.js";
import User from "../model/userModel.js";

const auth = async function(req,res,next){

    try{
        const authHeader = req.header("Authorization");

        console.log("authHeader",authHeader);

        if(!authHeader){
            return next(new HttpError("auth header is not defined",401));
        }

        const token = authHeader.replace("Bearer ","");

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        console.log(user);

        if(!user){
             return next(new HttpError("authorization id not matched",401));
        }

        req.user = user;

        req.token = token;

        next();

    }catch(error){
        return next(new HttpError ("please authorization is failed",500));
    }

};

export default auth;