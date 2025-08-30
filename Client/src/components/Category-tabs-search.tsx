"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const categories = [
  "All",
  "Videos",
  "Playlists",
  "Films",
  "Unwatched",
  "Watched",
  "Recently Uploaded",
  "Last Hour",
  "Today",
  "This month",
  "Live",
  "4K",
  "HD",
  "Subtitles",
  "3D",
  "HDR",
  "Location",
  "Purchased",
  "Upload date",
];


export const CategoryTabSearch = () => {
    const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="flex justify-start items-center fixed z-1 gap-2 mb-6 overflow-x-auto h-12 w-full bg-white md:pl-60 pl-4 pr-4">
      {categories.map((category) => (
        <Button key={category} variant={activeCategory === category ? "default" : "secondary"} className="buttons whitespace-nowrap overflow-auto m-0" onClick={() => setActiveCategory(category)}>
          {category}
        </Button>
      ))}
    </div>
  )
}

