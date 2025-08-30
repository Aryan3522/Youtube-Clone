import ChannelHeader from "@/components/ChannelHeader";
import ChannelTabs from "@/components/ChannelTabs";
import ChannelVideo from "@/components/ChannelVideo";
import VideoUploader from "@/components/VideoUploader";
import { useUser } from "@/lib/AuthContext";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useUser();

  // const user = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   image: "https://github.com/shadcn.png?height=32&width=32",
  // };
  try {
    let channel = user;
      // if (!channel) {
      //   notFound();
      // }
    const videos = [
      {
        _id: "1",
        videotitle: "Understanding React Hooks",
        filename: "nature-doc.mp4",
        filetype: "video/mp4",
        filepath: "/videos/nature-doc.mp4",
        filesize: "35MB",
        videochannel: "Tech Insights",
        like: 120,
        views: 1500,
        uploader: "Aryan Hooda",
        createdAt: new Date().toISOString(),
      },
      {
        _id: "2",
        videotitle: "Cooking tutorial: Pasta",
        filename: "pasta-tutorial.mp4",
        filetype: "video/mp4",
        filepath: "/videos/pasta-tutorial.mp4",
        filesize: "40MB",
        videochannel: "Chef's Kitchen",
        like: 200,
        views: 3000,
        uploader: "Chef_Master",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
    ];
    return (
      <div className="flex justify-center min-h-screen w-screen md:pl-56">
        <div className="w-full mx-auto">
          <ChannelHeader channel={channel} user={user} />
          <ChannelTabs />
          <div className="px-4 pb-8">
            <VideoUploader channelId={id} channelName={channel?.channelName} />
          </div>
          <div className="px-4 pb-8">
            <ChannelVideo videos={videos} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log("Error fetching channel data:", error);
    // notFound();
  }
};

export default index;
