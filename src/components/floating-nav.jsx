"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";






export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Forums",
      link: "/forums",
      icon: <MdOutlineForum className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Chat",
      link: "/chat",
      icon: (
        <IoMdChatboxes className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    (<div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    
    </div>)
  );
}

