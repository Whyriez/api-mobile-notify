import express from "express";
import {
  getHeader,
  getHeaderById,
  getHeaderByName,
  createHeader,
  updateHeader,
  deleteHeader,
} from "../controller/Header.js";

const router = express.Router();

router.get("/user_header", getHeader);
router.get("/user_header/:id", getHeaderById);
router.get("/header-name/:id", getHeaderByName);
router.post("/user_header", createHeader);
router.patch("/user_header/:id", updateHeader);
router.delete("/user_header/:id", deleteHeader);

export default router;
