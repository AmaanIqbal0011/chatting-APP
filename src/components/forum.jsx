import React from "react";
import { Button } from "../components/ui/moving-border";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiCss3,
} from "react-icons/si";
import MagicButton from "./magicButton";
import Link from "next/link";

const forumCategories = [
  {
    title: "Python",
    description: "Let's Discuss everything related to Python",
    icon: SiPython,
    color: "text-blue-500",
    slug: "python-discussion",
  },
  {
    title: "JavaScript",
    description: "Let's Discuss everything related to JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    slug: "javascript-discussion",
  },
  {
    title: "TypeScript",
    description: "Let's Discuss everything related to TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    slug: "ts-discussion",
  },
  {
    title: "React",
    description: "Let's Discuss everything related to React",
    icon: SiReact,
    color: "text-cyan-400",
    slug: "react-discussion",
  },
  {
    title: "CSS",
    description: "Let's Discuss everything related to CSS",
    icon: SiCss3,
    color: "text-blue-500",
    slug: "css-discussion",
  },
];
const Forums = () => {
  return (
    <section className="py-12 md:py-16 w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-300">
            Discussion Forums
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {forumCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                href={`/forum/${category.slug}`}
                className="group block w-full h-full"
              >
                <Button
                  borderRadius="1.5rem"
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  className="hover:shadow-lg transition-all duration-300 w-full h-full"
                  containerClassName="h-full w-full"
                >
                  <div className="flex flex-col items-center justify-center gap-4 p-6 w-full h-full min-h-[250px]">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 mb-2">
                      <Icon
                        className={`w-12 h-12 ${category.color} transition-all duration-300 group-hover:scale-105`}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-3 text-center w-full">
                      <h3 className="text-xl font-semibold text-slate-100 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-100/80 leading-snug text-pretty">
                        {category.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300">
                          Discuss {category.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Forums;
