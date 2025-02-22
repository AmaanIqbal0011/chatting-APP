import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  description,
}) => {
  return (
    <button
      className="relative inline-flex h-auto w-full md:w-60 overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform duration-200 hover:scale-105"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex flex-col h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white backdrop-blur-3xl gap-y-2 ${otherClasses}`}
      >
        {/* Main button content */}
        <div className="flex items-center gap-2">
          {position === "left" &&
            React.cloneElement(icon, {
              className: "w-4 h-4 md:w-5 md:h-5",
            })}
          <span className="whitespace-nowrap text-sm md:text-base">
            {title}
          </span>
          {position === "right" &&
            React.cloneElement(icon, {
              className: "w-4 h-4 md:w-5 md:h-5",
            })}
        </div>

        {/* Description element */}
        {description && (
          <span className="block text-xs font-normal text-slate-300/80 md:text-sm leading-tight max-w-[85%] mx-auto">
            {description}
          </span>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
