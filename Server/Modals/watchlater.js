import mongoose from "mongoose";

const watchLaterSchema = mongoose.Schema(
  {
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VideoFiles",
      required: true,
    },
    viewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    likedon: { type: String, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("WatchLater", watchLaterSchema);
