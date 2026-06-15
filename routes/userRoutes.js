import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post("/add",userController.add);

router.get("/getAllUser",userController.getAllUser);

router.post("/login", userController.login);

router.post("/authLogin", userController.authLogin);

export default router;