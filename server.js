import express from "express";
import HttpError from "./middlware/HttpError.js";
import ConnectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config({path:"./.env"});


const app = express();

app.use(express.json());

app.get("/",(req , res ,next )=>{
    res.json({message:"hello from server"});
});

app.use("/api/User", userRouter);

app.use((req,res,next)=>{
    return next(new HttpError("route not found",404));
});

app.use((error,req,res,next)=>{
    if(res.headersSent){
        return next(error);
    }

    res.status(error.statusCode || 500).json({
        message:error.message || "internal server error"
    });
});

const port = 5000;

async function StartServer(){
    try{
        await ConnectDB();

        app.listen(port,(error)=>{
            if(error){
                console.log(error);
            }

            console.log(`server runing on port ${port}`);

        });
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

StartServer();