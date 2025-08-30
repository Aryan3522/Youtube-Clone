import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { formatDistanceToNow } from "date-fns";

const SearchResult = ({ query }: any) => {
  if (!query.trim()) {
    return (
      <div>
        <p>Enter a search term to find Videos.</p>
      </div>
    );
  }
  const [video, setVideo] = useState<any>(null);
  const videos = async () => {
    const allVideos = [
      {
        _id: "1",
        videotitle: "Amazing Nature Documentary",
        filename: "nature-doc.mp4",
        filetype: "video/mp4",
        filepath: "/videos/nature-doc.mp4",
        filesize: "500MB",
        videochannel: "Nature Channel",
        Like: 1250,
        views: 45000,
        uploader: "nature_lover",
        createdAt: new Date().toISOString(),
      },
      {
        _id: "2",
        videotitle: "Cooking Tutorial: Perfect Pasta",
        filename: "pasta-tutorial.mp4",
        filetype: "video/mp4",
        filepath: "/videos/pasta-tutorial.mp4",
        filesize: "300MB",
        videochannel: "Chef's Kitchen",
        Like: 890,
        views: 23000,
        uploader: "chef_master",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
    ];
    let results = allVideos.filter(
      (vid) =>
        vid.videotitle.toLowerCase().includes(query.toLowerCase()) ||
        vid.videochannel.toLowerCase().includes(query.toLowerCase())
    );
    setVideo(results);
  };
  console.log("Videos length" + videos.length);
  useEffect(() => {
    videos();
  }, []);
  if (!video) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">No video Found</h2>
        <p className="text-gray-600">There are no videos to show!</p>
      </div>
    );
  }
  const hasResult = video ? video.length > 0 : true;
  if (!hasResult) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">No video Found</h2>
        <p className="text-gray-600">
          Try different Keywords or remove Search Filters!
        </p>
      </div>
    );
  }
  const vids = "/video/vdo.mp4";
  return (
    <div className="flex flex-col items-center space-y-6 mt-6 p-4 mx-auto w-full">
  {/* Video Results */}
  {video.length > 0 && (
    <div className="w-full max-w-7xl space-y-4">
      {video.map((video: any) => (
        <div key={video._id} className="flex flex-col sm:flex-row gap-4 group">
          <Link href={`/watch/${video._id}`} className="flex-shrink-0">
            <div className="relative w-full sm:w-80 lg:w-96 aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <video
                src={vids}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
                10:24
              </div>
            </div>
          </Link>

          <div className="flex-1 min-w-0 py-1">
            <Link href={`/watch/${video._id}`}>
              <h3 className="font-medium text-base sm:text-lg line-clamp-2 group-hover:text-blue-600 mb-2">
                {video.videotitle}
              </h3>
            </Link>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-2">
              <span>{video.views.toLocaleString()} views</span>
              <span>•</span>
              <span>
                {formatDistanceToNow(new Date(video.createdAt))} ago
              </span>
            </div>

            <Link
              href={`/channel/${video.uploader}`}
              className="flex items-center gap-2 mb-2 hover:text-blue-600"
            >
              <Avatar className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback className="text-xs">
                  {video.videochannel[0]}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs sm:text-sm text-gray-600">
                {video.videochannel}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-gray-700 line-clamp-2 hidden sm:block">
              Sample video description that would show search-relevant
              content and help users understand what the video is about
              before clicking.
            </p>
          </div>
        </div>
      ))}
    </div>
  )}

  {hasResult && (
    <div className="text-center py-2 w-full">
      <p className="text-sm sm:text-base text-gray-600">
        Showing {video.length} results for "{query}"
      </p>
    </div>
  )}
</div>
  );
};

export default SearchResult;
