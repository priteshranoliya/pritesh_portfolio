import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div className="mt-0">
      <TitleHeader
        title="Featured Projects"
        eyebrow="REAL-WORLD RESULTS"
        description="See how I transformed concepts into engaging digital experiences."
      />
      <div id="projects" ref={sectionRef} className="app-showcase mt-1">
        <div className="w-full">
          <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
              <div className="image-wrapper">
                <img
                  src="/images/iot3.png"
                  alt="IoT App Interface"
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
              <div className="text-content">
                <h2>
                  IoT-Enabled Smart Battery Management System for Electric
                  Vehicles
                </h2>
                <p className="text-white-50 md:text-xl">
                  A real-time battery monitoring solution using IoT, sensors,
                  and GPS to optimize EV battery performance, efficiency, and
                  charging convenience.
                </p>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={libraryRef}>
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/task-project.jpeg"
                    alt="Task Management Platform"
                    className="w-full h-full object-contain md:object-cover"
                  />
                </div>
                <h2>The Task Management Platform</h2>
              </div>

              <div className="project" ref={ycDirectoryRef}>
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="/images/tindog.png" alt="YC Directory App" />
                </div>
                <h2>TinDog UI Showcase – Meet Dogs Nearby</h2>
              </div>

              {/* ✅ New Project: SceneSeeker */}
              {/* <div className="project">
                <div className="image-wrapper bg-[#EAF4FF]">
                  <img
                    src="/images/sceneseeker.png"
                    alt="SceneSeeker Movie Search Engine"
                    className="w-full h-full object-contain md:object-cover"
                  />
                </div>
                <h2>SceneSeeker – Movie Scene Search Engine</h2>
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
