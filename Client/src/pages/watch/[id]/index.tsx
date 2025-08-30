import Comments from "@/components/Comments";
import RelatedVideos from "@/components/RelatedVideos";
import VideoInfo from "@/components/VideoInfo";
import Videoplayer from "@/components/VideoPlayer";
import { useUser } from "@/lib/AuthContext";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

const index = () => {
  const { user } = useUser();
  const router = useRouter();
  const { id } = router.query;
  const [videos, setVideos] = useState<any>(null);
  const [allVideos, setAllVideos] = useState<any>(null);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchVideos = async () => {
      if (!id || typeof id !== "string") return;
      try {
        const res = await axiosInstance.get("/video/getall");
        const video = res.data?.filter((vid: any) => vid._id === id);
        setVideos(video[0]);
        setAllVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos: ", error);
        console.log(error + " Error in catch block");
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!videos) {
    return <div>Video not found</div>;
  }

  return (
    <div className="min-h-screen w-screen xl:pl-12 xxl:pl-20 bg-white">
      <div className="w-full mx-auto p-2 sm:p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-4 space-y-4">
            <Videoplayer video={videos} />
            <VideoInfo video={videos} />
            <Comments videoId={Array.isArray(id) ? id[0] : id ?? ""} />
          </div>
          <div className="space-y-4">
            <RelatedVideos videos={allVideos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
