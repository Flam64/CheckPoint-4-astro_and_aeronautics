import express from "express";
import { comparePassword, hashPassword } from "../middlewares/argon.middleware";
import { getUserByEmail } from "../middlewares/user.middleware";
import { login } from "../modules/auth/authActions";
import { add } from "../modules/user/userActions";

const router = express.Router();

router.post("/api/register", hashPassword, add);
router.post("/api/login", getUserByEmail, comparePassword, login);

export default router;
