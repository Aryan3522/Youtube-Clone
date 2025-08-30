"use client";
import React, { useEffect, useRef } from 'react'

interface VideoPlayerProps {
  video: {
    _id: string;
    videotitle: string;
    filepath: string;
  };
}

const Videoplayer = ({video}:VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
  const videos = "/video/vdo.mp4";

  return (
    <div className="min-w-xs aspect-video bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
      >
        <source
          // src={videos}
          src={`${process.env.BACKEND_URL}/${video?.filepath}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videoplayer