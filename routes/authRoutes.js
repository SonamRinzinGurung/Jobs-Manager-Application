import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";

import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/authenticateUser.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "Request Limit reached for this IP Address. Please try again after 15 minutes.",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
