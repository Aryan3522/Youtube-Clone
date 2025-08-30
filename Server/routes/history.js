import express from "express";
import { getAllHistoryVideos, handleHistory, handleView } from "../controllers/history.js";

const routes = express.Router();

routes.post("/:videoId", handleHistory);
routes.get("/:userId", getAllHistoryVideos);
routes.post("/views/:videoId", handleView);

export default routes;
