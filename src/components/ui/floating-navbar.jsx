"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      setVisible(scrollYProgress.get() > 0.05 && direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <ClerkProvider>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto",
            "border border-white/[0.2] rounded-full bg-black",
            "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(255,255,255,0.02)]",
            "px-8 py-2 items-center justify-center space-x-4 z-[5000]",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-50 hover:text-neutral-300",
                "transition-colors duration-300",
                "flex items-center space-x-1 text-sm"
              )}
            >
              <span className="sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}

          <SignedOut>
            <SignInButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-sm font-medium px-4 py-1.5 rounded-full 
                        bg-gray-900/30 hover:bg-gray-900/50 transition-colors duration-300
                        border border-white/20 text-neutral-50"
              >
                <span className="relative z-10">Login</span>
                <span
                  className="absolute inset-0 w-full h-full rounded-full 
                             opacity-0 hover:opacity-100 transition-opacity duration-300
                             bg-gradient-to-r from-purple-500/30 via-purple-500/20 to-purple-500/30"
                />
                <span
                  className="absolute inset-x-0 w-0 h-px mx-auto -bottom-px 
                             bg-gradient-to-r from-transparent via-purple-400 to-transparent 
                             transition-all duration-300 hover:w-full"
                />
              </motion.button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="border-l border-white/20 pl-4 ml-2">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                    userButtonPopoverCard: "bg-black border border-white/20",
                  },
                }}
              />
            </div>
          </SignedIn>
        </motion.div>
      </ClerkProvider>
    </AnimatePresence>
  );
};
