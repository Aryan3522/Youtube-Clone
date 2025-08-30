import comment from "../Modals/comment.js";
import mongoose from "mongoose";

export const postComment = async (req, res) => {
  const commentData = req.body;
  const postComment = new comment(commentData);
  try {
    await postComment.save();
    return res.status(200).json({ comment: true });
  } catch (error) {
    console.error("error: " + error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const getAllComment = async (req, res) => {
  const { videoId } = req.params;
  try {
    const commentVideos = await comment.find({ videoId: videoId }).exec();
    return res.status(200).json(commentVideos);
  } catch (error) {
    console.error("error: " + error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const deleteComment = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No comment with that id");
  }
  try {
    await comment.findByIdAndDelete(_id);
    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("error: " + error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const editComment = async (req, res) => {
  const { id: _id } = req.params;
  const { commentBody } = req.body;
   if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No comment with that id");
  }
  try {
    await comment.findByIdAndUpdate(_id, {$set:{"commentbody": commentBody}});
    return res.status(200).json({ message: "Comment updated successfully" });
  } catch (error) {
    console.error("error: " + error);
    return res.status(500).json({ message: "something went wrong" });
  }
};
