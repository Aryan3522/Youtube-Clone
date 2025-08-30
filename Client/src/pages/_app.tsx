import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/sonner";
import { useRouter } from "next/router";
import { UserProvider } from "@/lib/AuthContext.js";

export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const isWatchPage =
    router.pathname.startsWith("/watch") || router.asPath.startsWith("/watch");
  // Set initial sidebar state based on page type
  useEffect(() => {
    if (isWatchPage) {
      setIsSidebarOpen(false); // Hidden by default on watch pages
    } else {
      setIsSidebarOpen(true); // Visible by default on regular pages
    }
  }, [isWatchPage]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <UserProvider>
      <div className="min-h-screen bg-white text-black">
        <title>You-tube Clone</title>
        <Header onMenuClick={toggleSidebar} />
        <Toaster />
        <div className="flex">
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </div>
    </UserProvider>
  );
}
