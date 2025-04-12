import express from "express";
import {
  getUsers,
  //getUser,
  updateUser,
  deleteUser,
  savePost,
  profilePosts,
  getNotificationNumber,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
// userRouter.get("/:id", verifyToken, getUser);
userRouter.put("/:id", verifyToken, updateUser);
userRouter.delete("/:id", verifyToken, deleteUser);
userRouter.post("/save", verifyToken, savePost);
userRouter.get("/profilePosts", verifyToken, profilePosts);
userRouter.get("/notification", verifyToken, getNotificationNumber);
export default userRouter;
