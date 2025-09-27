import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ className, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={twMerge(
        "card card-border rounded-xl break-inside-avoid-column relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-xl after:outline-white/20 after:pointer-events-none",
        className
      )}
    >
      {/* Glow Layer */}
      <div className="glow"></div>

      {/* Grain background */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: "url('/images/grain.jpg')" }}
      ></div>

      {children}
    </div>
  );
};

export default Card;
