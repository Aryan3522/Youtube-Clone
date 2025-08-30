import video from "../Modals/video.js";
import History from "../Modals/history.js";

export const handleHistory = async (req, res) => {
  const { userId } = req.body;
  const { videoId } = req.params;
  try {
    await History.create({
      viewer: userId,
      videoId: videoId,
    });
    await video.findByIdAndUpdate(videoId, { $inc: { views: 1 } });
    return res.status(200).json({ History: true });
  } catch (error) {
    console.log(error);
    console.log("error in History controller: " + error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const handleView = async (req, res) => {
  const { videoId } = req.params;
  try {
    await video.findByIdAndUpdate(videoId, { $inc: { views: 1 } });
    return res.status(200).json({ message: "View count incremented" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getAllHistoryVideos = async (req, res) => {
  const { userId } = req.params;
  try {
    const historyVideos = await History
      .find({ viewer: userId })
      .populate({ path: "videoId", model: "VideoFiles" })
      .exec();
    return res.status(200).json(historyVideos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
