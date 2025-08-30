import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const SideBarSubscriptionsCard = () => {
  const channels = [
    { id: "1", channelName: "Amazing Nature Videos" },
    { id: "2", channelName: "Master Chef" },
    { id: "3", channelName: "Intellipath" },
    { id: "4", channelName: "EzSnippet" },
    { id: "5", channelName: "Thunder_Meow" },
    { id: "6", channelName: "Coding Here" },
  ];

  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://github.com/shadcn.png?height=32&width=32",
  };

  return (
    <div className="flex flex-col gap-3">
      {channels.map((channel) => (
        <div key={channel.id} className="flex items-center gap-2">
          <Avatar className="w-6 h-6 rounded-full overflow-hidden">
            <AvatarImage src={user.image} alt={channel.channelName} />
          </Avatar>
          <Button variant="secondary" className="buttons w-40 justify-start text-left text-sm text-gray-800 bg-transparent hover:bg-gray-200 overflow-hidden whitespace-nowrap truncate">{channel.channelName}</Button>
        </div>
      ))}
    </div>
  );
};

export default SideBarSubscriptionsCard;
