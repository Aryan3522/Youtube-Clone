"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { formatDistanceToNow } from "date-fns";
import { Clock, MoreVertical, Play, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { useUser } from "@/lib/AuthContext";
import axiosInstance from "@/lib/axiosInstance";


const WatchLaterContent = () => {
  const videos = "/video/vdo.mp4";
  const { user } = useUser();
  const [watchLater, setWatchLater] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadWatchLaterVideos();
    }
  }, [user]);

  const loadWatchLaterVideos = async () => {
    if (!user) return;
    try {
      const watchLaterData = await axiosInstance.get(`/watch/${user?._id}`);
      setWatchLater(watchLaterData.data);
    } catch (err) {
      console.error("Failed to load liked videos", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUnLikeVideo = async (likeId: string) => {
    try {
      console.log("Removing liked item with ID:", likeId);
      setWatchLater((prevLike) =>
        prevLike.filter((item) => item._id !== likeId)
      );
    } catch (error) {
      console.error("Failed to remove liked item", error);
    }
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <Clock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Keep Track of what you watch</h2>
        <p className="text-gray-600">Like History is not available</p>
      </div>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (watchLater.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Keep Track of what you watch</h2>
        <p className="text-gray-600">Your Watch Later is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">{watchLater.length} videos</p>
        <Button><Play/>Play All</Button>
      </div>
      <div className="space-y-4">
        {watchLater.map((item) => (
          <div key={item._id} className="flex gap-4 group">
            <Link href={`/watch/${item.videoId._id}`} className="flex-shrink-0">
              <div className="relative w-40 aspect-video bg-gray-100 rounded overflow-hidden">
                <video
                  src={videos}
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </Link>
            <div className="flex-1 min-w-0">
              <Link href={`/watch/${item.videoId._id}`}>
                <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 mb-1">{item.videoId.videotitle}</h3>
              </Link>
              <p className="text-sm text-gray-600">
                {item.videoId.videochannel}
              </p>
                <p className="text-sm text-gray-600">
                  {item.videoId.views.toLocaleString()} views •{" "}
                  {formatDistanceToNow(new Date(item.videoId.createdAt))} ago
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Added {formatDistanceToNow(new Date(item.createdAt))} ago
                </p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100">
                    <MoreVertical className="w-4 h-4"/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleUnLikeVideo(item._id)}>
                        <X className="w-4 h-4 mr-2"/>
                        Remove from like history
                    </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLaterContent;
