import express from "express";
import { getUsers, getUser, deleteUser } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Get all users
router.get("/", verifyToken, getUsers);

// Get single user
router.get("/:id", verifyToken, getUser);

// Delete user and their posts
router.delete("/:id", verifyToken, deleteUser);

export default router;
