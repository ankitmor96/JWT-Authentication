import express from "express";
import userController from "../controller/userController.js";
import auth from "../middleware/auth.js"

const router = express.Router();

router.post("/add",userController.add);

router.get("/getAllUser" ,auth,userController.getAllUser);

router.post("/login", userController.login);

router.post("/authLogin", auth , userController.authLogin);

export default router;