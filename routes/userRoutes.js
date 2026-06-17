import express from "express";
import userController from "../controller/userController.js";
import auth from "../middleware/auth.js"

const router = express.Router();

router.post("/add",userController.add);

router.get("/getAllUser" ,userController.getAllUser);

router.post("/login", userController.login);

router.post("/authLogin", auth , userController.authLogin);

router.delete("/deleteAuth", auth , userController.deleteAuth);

router.patch("/updateAuth", auth , userController.updateAuth);

router.delete("/deleteAllUser", auth , userController.deleteAllUser);

export default router;