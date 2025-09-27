import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Pritesh Ranoliya
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, download }) => (
              <li key={name} className="group">
                {download ? (
                  <a
                    href={link}
                    download
                    className="relative px-4 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"
                  >
                    {name}
                    {/* glowing effect behind */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-400 blur-md opacity-70 animate-ping -z-10"></span>
                  </a>
                ) : (
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
