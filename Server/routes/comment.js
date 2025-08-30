import express from "express";
import { deleteComment, editComment, getAllComment, postComment } from "../controllers/comment.js";

const routes = express.Router();

routes.get("/:videoId", getAllComment);
routes.post("/postcomment", postComment);
routes.post("/deletecomment/:id", deleteComment);
routes.post("/editcomment/:id", editComment);

export default routes;
