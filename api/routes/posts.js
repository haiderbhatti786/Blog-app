import express from "express";
import {
  deletePost,
  getPost,
  getPosts,
  addPost,
  updatePost,
} from "../controllers/post.js"; // Added .js extension

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost); // Changed 'update' to 'put'

export default router;
