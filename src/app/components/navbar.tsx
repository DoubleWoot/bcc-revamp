import website_logo from "../../../public/bcc-logo.png";
import twitter_logo from "../../../public/white-twitter.png";
import facebook_logo from "../../../public/white-fb.png";
import instagram_logo from "../../../public/white-ig.png";
import linkedin_logo from "../../../public/white-linkedin.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#101218] p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="flex items-center space-x-4 px-4 py-2">
          <img src={website_logo.src} alt="Blockchain Conference Logo" />
          <h1 className="font-bold font-trap">BCC2025</h1>
        </div>
        <div className="flex items-center space-x-3">
          <a href="https://x.com/Bcampusconf" target="_blank" rel="noopner">
            <img className="h-12 w-12" src={twitter_logo.src} alt="" />
          </a>
          <a
            href="https://www.facebook.com/bcampusconf/"
            target="_blank"
            rel="noopner"
          >
            <img className="h-12 w-12" src={facebook_logo.src} alt="" />
          </a>
          <a
            href="https://www.instagram.com/bcampusconf/"
            target="_blank"
            rel="noopner"
          >
            <img className="h-12 w-12" src={instagram_logo.src} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/bcampusconf/"
            target="_blank"
            rel="noopner"
          >
            <img className="h-12 w-12" src={linkedin_logo.src} alt="" />
          </a>
        </div>
      </nav>
    </>
  );
}
