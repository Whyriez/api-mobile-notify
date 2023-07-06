import express from "express";
import {
  Login,
  LogOut,
  Me,
  ValidateEmail,
  ValidateUser,
} from "../controller/Auth.js";

const router = express.Router();

router.get("/me", Me);
router.get("/validate/:name", ValidateUser);
router.get("/validatee/:email", ValidateEmail);
router.post("/login", Login);
router.delete("/logout", LogOut);

export default router;
