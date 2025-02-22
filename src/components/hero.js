import { Section } from "lucide-react";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FaRocketchat } from "react-icons/fa6";
import MagicButton from "@/components/magicButton";
import { SparklesPreview } from "@/components/SparklesPreview";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="pink"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* adding sparkles */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <SparklesPreview />
          <div>
            <a href="/forums">
              <MagicButton
                icon={<FaRocketchat />}
                title="Start Chatting"
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
