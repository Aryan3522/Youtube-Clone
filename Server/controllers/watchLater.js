import watchLater from "../Modals/watchlater.js";

export const handleWatchLater = async (req, res) => {
  const { userId } = req.body;
  const { videoId } = req.params;
  try {
    const existingWatchLater = await watchLater.findOne({
      viewer: userId,
      videoId: videoId,
    });
    if (existingWatchLater) {
      await watchLater.findByIdAndDelete(existingWatchLater._id);
      return res.status(200).json({ watchLater: false });
    } else {
      await watchLater.create({
        viewer: userId,
        videoId: videoId,
      });
      return res.status(200).json({ watchLater: true });
    }
  } catch (error) {
    console.log(error);
    console.log("error in watchLater controller: " + error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getAllWatchLaterVideos = async (req, res) => {
  const { userId } = req.params;
  try {
    const WatchLaterVideos = await watchLater
      .find({ viewer: userId })
      .populate({ path: "videoId", model: "videoFiles" })
      .exec();
    return res.status(200).json(WatchLaterVideos);
  } catch (error) {}
};
