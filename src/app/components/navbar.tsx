"use client";
import { useState } from "react";
import website_logo from "../../../public/bg-assets/bcc-new-logo.png";
import twitter_logo from "../../../public/navbar-logo/white-twitter.png";
import facebook_logo from "../../../public/navbar-logo/white-fb.png";
import instagram_logo from "../../../public/navbar-logo/white-ig.png";
import linkedin_logo from "../../../public/navbar-logo/white-linkedin.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#101218] p-5 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center relative">
        {/* Hamburger Menu Button for Mobile */}
        <button
          className="lg:hidden text-white z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
        <div className="hidden lg:flex items-center space-x-8 text-lg">
          <a
            href="#about"
            className="font-trap font-medium text-gray-400 hover:text-white transition colors duration 300"
          >
            About
          </a>
          <a
            href="#recap"
            className="font-trap font-medium text-gray-400 hover:text-white transition colors duration 300"
          >
            Recap
          </a>
          <a
            href="#sponsors"
            className="font-trap font-medium text-gray-400 hover:text-white transition colors duration 300"
          >
            Sponsors
          </a>
        </div>

        {/* Website Logo */}
        <div className="w-1/3 flex justify-center">
          <img
            className="h-9"
            src={website_logo.src}
            alt="Blockchain Campus Conference Logo"
            draggable="false"
          />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8 text-lg">
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

        {/* Social Media Icons - Desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="https://x.com/Bcampusconf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-8 w-8" src={twitter_logo.src} alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/bcampusconf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-8 w-8" src={facebook_logo.src} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/bcampusconf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-8 w-8" src={instagram_logo.src} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/bcampusconf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-8 w-8" src={linkedin_logo.src} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
        <div className="flex flex-col space-y-4">
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
          {/* Social Media Icons - Mobile */}
          <div className="flex space-x-4 pt-4">
            <a
              href="https://x.com/Bcampusconf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-6 w-6" src={twitter_logo.src} alt="Twitter" />
            </a>
            <a
              href="https://www.facebook.com/bcampusconf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-6 w-6" src={facebook_logo.src} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/bcampusconf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-6 w-6"
                src={instagram_logo.src}
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/bcampusconf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-6 w-6" src={linkedin_logo.src} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
