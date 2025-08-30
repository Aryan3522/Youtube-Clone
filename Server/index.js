import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/auth.js";
import videoroutes from "./routes/video.js";
import likeroutes from "./routes/like.js";
import path from "path";
import WatchLaterRoutes from "./routes/watchLater.js";
import HistoryRoutes from "./routes/history.js";
import commentRoutes from "./routes/comment.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "100gb", extended: true }));
app.use(express.urlencoded({ limit: "100gb", extended: true }));
app.use("/uploads", express.static(path.join("uploads")));
app.get("/", (req, res) => {
  res.send("Hello to Youtube Clone API");
});

app.use(bodyParser.json());
app.use("/user", route);
app.use("/video", videoroutes);
app.use("/liked", likeroutes);
app.use("/watch", WatchLaterRoutes);
app.use("/history", HistoryRoutes);
app.use("/comment", commentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});

const DBURL = process.env.DB_URL;
mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
    console.log(error);
  });
