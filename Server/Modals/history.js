import mongoose from "mongoose";

const historySchema = mongoose.Schema(
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

export default mongoose.model("History", historySchema);
