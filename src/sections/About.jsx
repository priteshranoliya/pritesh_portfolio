import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import Card from "../components/Card";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImag from "@/assets/images/suratMap.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "../components/CardHeader";
import ToolBoxItems from "../components/ToolBoxItems";
import { motion } from "framer-motion";

const toolBoxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    top: "5%",
    left: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    top: "5%",
    left: "50%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: "35%",
    left: "10%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    top: "40%",
    left: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    top: "45%",
    left: "70%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    top: "65%",
    left: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    top: "70%",
    left: "45%",
  },
];

const About = () => {
  const constraintRef = useRef(null);

  return (
    <section
      id="about"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="container">
        <TitleHeader
          title="A Glimpse Into My World!"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <img src={bookImage} alt="book" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the Technologies and Tools I use to create digital
                experiences."
                className=""
              />

              <ToolBoxItems
                items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                description="Explore the books shaping my perspectives."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <img
                src={mapImag}
                alt="map"
                className="w-full h-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2 after:- 
                outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1.5s]"></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>

                <img src={smileMemoji} alt="smileMemoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
