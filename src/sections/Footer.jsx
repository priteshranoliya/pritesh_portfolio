import { socialImgs } from "../constants";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon p-2">
              <a
                href={socialImg.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              </a>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> */}
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Pritesh Ranoliya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
