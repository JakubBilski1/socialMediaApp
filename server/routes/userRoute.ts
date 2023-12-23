import { Router } from "express";
import verifyJWT from "../middlewares/verify_JWT";
import { getUserData } from "../controllers/user.controller";

const router = Router();

router.post('/dashboard', verifyJWT, getUserData)

export default router;