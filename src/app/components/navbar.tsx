import website_logo from "../../../public/bg-assets/bcc-new-logo.png";
import twitter_logo from "../../../public/navbar-logo/white-twitter.png";
import facebook_logo from "../../../public/navbar-logo/white-fb.png";
import instagram_logo from "../../../public/navbar-logo/white-ig.png";
import linkedin_logo from "../../../public/navbar-logo/white-linkedin.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#101218] p-5 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        {/* Navigation Links */}
        <div className="flex items-center space-x-8 text-lg">
          <a
            href="#about"
            className="font-trap font-medium text-gray-400 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#recap"
            className="font-trap font-medium text-gray-400 hover:text-white transition-colors duration-300"
          >
            Recap
          </a>
          <a
            href="#sponsors"
            className="font-trap font-medium text-gray-400 hover:text-white transition-colors duration-300"
          >
            Sponsors
          </a>
        </div>

        {/* Website Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            className="h-9"
            src={website_logo.src}
            alt="Blockchain Campus Conference Logo"
            draggable="false"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3">
          <a href="https://x.com/Bcampusconf" target="_blank" rel="noopner">
            <img className="h-8 w-8" src={twitter_logo.src} alt="" />
          </a>
          <a
            href="https://www.facebook.com/bcampusconf/"
            target="_blank"
            rel="noopner"
          >
            <img className="h-8 w-8" src={facebook_logo.src} alt="" />
          </a>
          <a
            href="https://www.instagram.com/bcampusconf/"
            target="_blank"
            rel="noopner"
          >
            <img className="h-8 w-8" src={instagram_logo.src} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/bcampusconf/"
            target="_blank"
            rel="noopner"
          >
            <img className="h-8 w-8" src={linkedin_logo.src} alt="" />
          </a>
        </div>
      </nav>
    </>
  );
}
