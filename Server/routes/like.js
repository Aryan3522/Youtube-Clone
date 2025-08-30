import express from "express";
import { getAllLikedVideos, handleLike } from "../controllers/like.js";

const routes = express.Router();

routes.post("/:videoId", handleLike);
routes.get("/:userId", getAllLikedVideos);

export default routes;
