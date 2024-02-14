import { Router } from "express";
import { AuthController } from "../controller/auth";
export const authRouter = Router();
let authController = new AuthController();

authRouter.post("/signup", authController.signUp);
