import React from "react";
import MagicButton from "./magicButton";
import { MdOutlineMessage } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa";

const keyFeatures = [
  {
    id: 1,
    title: "Real-time Messaging",
    description: "Enjoy instant messaging with Coders",
    className: "md:col-span-2",
    icon: <MdOutlineMessage />,
  },
  {
    id: 2,
    title: "Group Chats",
    description: "Create and join group chats with your loved ones",
    className: "md:col-span-2",
    icon: <FaUserGroup />,
  },
  {
    id: 3,
    title: "File Sharing",
    description: "Easily share photos,videos & documents",
    className: "md:col-span-2",
    icon: <FaFileExport />,
  },
];

const KeyFeatures = () => {
  return (
    <section
      id="features"
      className="py-12 md:py-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 md:mb-12 lg:mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-300">Key Features</span>
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {keyFeatures.map((card) => (
          <MagicButton
            key={card.title}
            icon={React.cloneElement(card.icon, { className: "w-8 h-8 mb-4" })}
            title={card.title}
            position="right"
            description={card.description}
            className="w-full h-full p-6 sm:p-8 min-h-[200px] sm:min-h-[220px] bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
            titleClassName="text-base sm:text-lg lg:text-xl font-semibold"
            descriptionClassName="text-sm sm:text-base text-gray-300"
          />
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
