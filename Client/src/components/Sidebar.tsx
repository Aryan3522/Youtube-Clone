import {
  ChevronRight,
  CirclePlay,
  CircleQuestionMark,
  Clapperboard,
  Clock,
  Compass,
  Diamond,
  Download,
  FileQuestionIcon,
  Flag,
  Gamepad2,
  GraduationCap,
  Handbag,
  History,
  Home,
  ListVideo,
  MessageSquareWarning,
  Music4,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Settings,
  ShoppingBag,
  ThumbsUp,
  Trophy,
  TvMinimalPlay,
  User,
  Youtube,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Channeldialogue from "./ChannelDialog";
import { useRouter } from "next/router";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import SideBarSubscriptionsCard from "./SideBarSubscriptionsCard";
import { useUser } from "@/lib/AuthContext";

const Sidebar = () => {
  const { user  } = useUser();
  const [isDialogeOpen, setIsDialogeOpen] = useState(false);
  const router = useRouter();

  // Check if current route is a watch page
  const isWatchPage =
    router.pathname.startsWith("/watch") || router.asPath.startsWith("/watch");

  // Don't render sidebar on watch pages
  if (isWatchPage) {
    return null;
  }

  // const user = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   image: "https://github.com/shadcn.png?height=32&width=32",
  // };

  return (
    <aside className="fixed top-14 left-0 h-[calc(100vh-4rem)] w-56 bg-white border-r p-2 pt-0 overflow-y-auto hidden md:block z-10">
      <nav className="space-y-1 w-full">
        <div className="pt-0 pb-2 mt-0">
          <Link href="/">
            <Button variant="ghost" className="buttons w-full justify-start">
              <Home className="w-5 h-5 mr-3" />
              Home
            </Button>
          </Link>
          <Link href="/shorts">
            <Button variant="ghost" className="buttons w-full justify-start">
              <TvMinimalPlay className="w-5 h-5 mr-3" />
              Shorts
            </Button>
          </Link>
          <Link href="/subscriptions">
            <Button variant="ghost" className="buttons w-full justify-start">
              <Podcast className="w-5 h-5 mr-3" />
              Subscriptions
            </Button>
          </Link>
        </div>
        {user && (
          <>
            <hr />
            <div className="pt-0 pb-2 mt-0">
              <Link href="/feed/you">
                <Button variant="ghost" className="buttons w-full justify-start">
                  You
                  <ChevronRight className="w-5 h-5 mr-3" />
                </Button>
              </Link>
              <Link href="/history">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <History className="w-5 h-5 mr-3" />
                  History
                </Button>
              </Link>
              <Link href="/playlist">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <ListVideo className="w-5 h-5 mr-3" />
                  Playlists
                </Button>
              </Link>
              <Link href="/your-videos">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <PlaySquare className="w-5 h-5 mr-3" />
                  Your Videos
                </Button>
              </Link>
              <Link href="/your-courses">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <GraduationCap className="w-5 h-5 mr-3" />
                  Your Courses
                </Button>
              </Link>
              <Link href={`/later-watch`}>
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Clock className="w-5 h-5 mr-3" />
                  Watch Later
                </Button>
              </Link>
              <Link href="/liked">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <ThumbsUp className="w-5 h-5 mr-3" />
                  Liked Videos
                </Button>
              </Link>
              <Link href="/downloads">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Download className="w-5 h-5 mr-3" />
                  Downloads
                </Button>
              </Link>

              {user?.channelName ? (
                <Link href={`/channel/${user._id}`}>
                  <Button variant="ghost" className="buttons w-full justify-start">
                    <User className="w-5 h-5 mr-3" />
                    Your Channel
                  </Button>
                </Link>
              ) : (
                <div className="px-2 py-1.5">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="buttons w-full bg-gray-100 hover:bg-gray-200"
                    onClick={() => setIsDialogeOpen(true)}
                  >
                    Create Channel
                  </Button>
                </div>
              )}
            </div>
            <hr />
            <div className="pt-0 pb-2 mt-0">
              <Link href="/subcsriptions">
                <Button variant="ghost" className="buttons w-full justify-start">
                  Subscriptions
                  <ChevronRight className="w-5 h-5 mr-3" />
                </Button>
              </Link>
              <div>
                <SideBarSubscriptionsCard />
              </div>
            </div>
           
          </>
        )}
         <hr />
            <div>
              <div>Explore</div>
              <Link href="/shopping">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  Shopping
                </Button>
              </Link>
              <Link href="/music">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Music4 className="w-5 h-5 mr-3" />
                  Music
                </Button>
              </Link>
              <Link href="/films">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Clapperboard className="w-5 h-5 mr-3" />
                  Films
                </Button>
              </Link>
              <Link href="/live">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Radio className="w-5 h-5 mr-3" />
                  Live
                </Button>
              </Link>
              <Link href="/gaming">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Gamepad2 className="w-5 h-5 mr-3" />
                  Gaming
                </Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Newspaper className="w-5 h-5 mr-3" />
                  News
                </Button>
              </Link>
              <Link href="/sport">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Trophy className="w-5 h-5 mr-3" />
                  Sport
                </Button>
              </Link>
              <Link href="/all-courses">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <GraduationCap className="w-5 h-5 mr-3" />
                  Courses
                </Button>
              </Link>
              <Link href="/fashion-and-beauty">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Handbag className="w-5 h-5 mr-3" />
                  Fashion & Beauty
                </Button>
              </Link>
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Podcast className="w-5 h-5 mr-3" />
                  Podcasts
                </Button>
              </Link>
            </div>
            <hr />
            <div className="pb-2 mt-0">
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Youtube className="w-6 h-6 mr-3 fill-red-500 stroke-white" />
                  Youtube Premium
                </Button>
              </Link>
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Diamond className="w-6 h-6 mr-3 stroke-red-500" />
                  Youtube Studio
                </Button>
              </Link>
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <CirclePlay className="w-6 h-6 mr-3 stroke-red-500" />
                  Youtube Music
                </Button>
              </Link>
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Youtube className="w-6 h-6 mr-3 fill-red-500 stroke-white -skew-6" />
                  Youtube Kids
                </Button>
              </Link>
            </div>
            <hr />
            <div>
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Settings className="w-6 h-6 mr-3" />
                  Settings
                </Button>
              </Link>
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <Flag className="w-6 h-6 mr-3" />
                  Report History
                </Button>
              </Link>
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <CircleQuestionMark className="w-6 h-6 mr-3" />
                  Help
                </Button>
              </Link>
              <Link href="/podcast">
                <Button variant="ghost" className="buttons w-full justify-start">
                  <MessageSquareWarning className="w-6 h-6 mr-3" />
                  Send Feedback
                </Button>
              </Link>
            </div>
            <hr />
            <div className="grid grid-cols-3 text-xs text-gray-500 mt-2">
              <a href="">About</a>
              <a href="">Press</a>
              <a href="">Copyright</a>
              <a href="">Contact Us</a>
              <a href="">Creator</a>
              <a href="">Advertise</a>
              <a href="">Developers</a>
              <div></div>
              <div></div>
              <div className="grid grid-cols-3 col-span-2 text-xs text-gray-500 mt-2">
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Policy&Safety</a>

                <div className="grid grid-cols-1 col-span-3">
                  <a href="">How Youtube Works</a>

                  <a href="">Test new features</a>
                  <div>© 2025 Google LLC</div>
                </div>
              </div>
            </div>
      </nav>
      <Channeldialogue
        isopen={isDialogeOpen}
        onclose={() => setIsDialogeOpen(false)}
        mode="create"
      />
    </aside>
  );
};

export default Sidebar;
