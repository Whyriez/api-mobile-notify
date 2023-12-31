import express from "express";
import {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  updateUsersByUUID,
} from "../controller/Users.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, adminOnly, getUsers);
router.get("/users/:id", getUsersById);
router.get("/tokens/:id", getUsersById);
router.post("/users", createUsers);
router.patch("/users/:id", updateUsers);
router.patch("/uusers/:id", updateUsersByUUID);
router.delete("/users/:id", deleteUsers);

export default router;
