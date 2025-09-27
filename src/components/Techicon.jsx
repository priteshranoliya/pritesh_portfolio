import React from "react";

const Techicon = ({ component }) => {
  return (
    <div>
      <img
        src={component}
        className="w-8 h-8 size-10 text-emerald-300 fill-[url(#tech-icon-gradient)]"
      />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)"/>
          <stop offset="100%" stopColor="rgb(56 189 248)"/>
        </linearGradient>
      </svg>
    </div>
  );
};

export default Techicon;
