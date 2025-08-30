import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { formatDistanceToNow } from "date-fns";
import { MoreVertical, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface RelatedVideosProps {
  videos: Array<{
    _id: string;
    videotitle: string;
    videochanel: string;
    views: number;
    createdAt: string;
  }>;
}

const vid = "/video/vdo.mp4";
export default function RelatedVideos({ videos }: RelatedVideosProps) {
  return (
    <div className="space-y-2">
      {videos.map((video: any) => (
        <Link
          key={video._id}
          href={`/watch/${video._id}`}
          className="flex gap-2 group"
        >
          <div className="realtive w-40 h-23 aspect-video bg-gray-100 rounded overflow-hidden flex-shrink-0">
            <video
              src={vid}
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="flex-1 min-w-10 h-23 overflow-hidden">
            <h3 className="font-medium text-sm line-clamp-1 group-hover:text-blue-600">
              {video.videotitle}
            </h3>
            <p className="text--xs text-gray-600 mt-1 line-clamp-1">
              {video.videochannel}
            </p>
            <p className="text--xs text-gray-600 line-clamp-1">
              {video.views.toLocaleString()} views{" "}
              {formatDistanceToNow(new Date(video.createdAt))} ago
            </p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100"
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <X className="w-4 h-4 mr-2" />
                  Remove from like history
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Link>
      ))}
    </div>
  );
}
