import express from "express";
import { getAllWatchLaterVideos, handleWatchLater } from "../controllers/watchLater.js";

const routes = express.Router();

routes.post("/:videoId", handleWatchLater);
routes.get("/:userId", getAllWatchLaterVideos);

export default routes;
