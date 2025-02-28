"use client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import website_logo from "../../public/bg-assets/bcc-logo.png";
import calabarzon_background from "../../public/bg-assets/calabarzon.jpg";

// Placeholder logos
const sponsorLogos = Array.from(
  { length: 12 },
  (_, i) =>
    `../../sponsor-logos/sponsor_logo_${String(i + 1).padStart(2, "0")}.png`
);

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Cover Div */}
      <div className="mt-16 relative">
        <img
          className="w-full h-[600px] md:h-[800px] object-cover"
          src={calabarzon_background.src}
          alt="Taal Lake"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center place-self-center text-center max-h-[74vh] font-trap ">
          <p className="font-bold text-4xl sm:text-6xl md:text-8xl">
            BLOCKCHAIN
          </p>
          <p className="font-bold text-4xl sm:text-6xl md:text-8xl">
            CAMPUS 2025
          </p>
          <p className="font-bold text-4xl sm:text-6xl md:text-8xl">
            CONFERENCE
          </p>
          <p className="font-bold bg-white py-2 sm:pt-4 px-4 rounded-lg text-[#101218] text-2xl sm:text-4xl md:text-8xl">
            CALABARZON
          </p>
          <button className="font-trap font-bold text-base sm:text-xl flex items-center justify-center border-2 border-white rounded-lg m-4 px-6 sm:px-8 py-2 sm:py-3 h-12 sm:h-14 transform transition-all duration-300 hover:scale-105 hover:px-10">
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* About Div */}
      <div
        id="about"
        className="section-offset py-12 px-4 sm:px-12 md:px-24 lg:px-72 place-self-center w-full"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="font-trap text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">
            The Blockchain Campus Conference
          </h1>
          <p className="font-trap text-lg sm:text-xl text-center sm:text-left">
            A free 2-day nationwide campus conference series designed to tackle
            real-world challenges faced by industries such as finance, health,
            retail, government, logistics, utilities, gaming & entertainment and
            more through the power of blockchain solutions. Blockchain Campus
            Conference offers a unique opportunity to learn, connect, and share
            your skills and creativity while making a tangible impact on the
            future of business and industry.
          </p>
        </div>
      </div>

      {/* TODO: Add a when and where section and embed the location of the venue on Google Maps*/}

      {/* Quotes from last BCC */}
      <div
        className="flex flex-col lg:flex-row justify-center gap-4 bg-white w-full py-12 px-4 sm:px-8 md:px-12"
        data-aos="fade-up"
      >
        <div className="bg-[#101218] w-full lg:w-[500px] font-trap p-4 sm:p-6 rounded-lg mb-4 lg:mb-0">
          <p className="text-xl sm:text-xl">&quot;Lorem Ipsum Vite&quot;</p>
          <div className="pt-8 sm:pt-12">
            <p className="font-bold text-base sm:text-lg">Sean Cosep</p>
            <p className="text-sm sm:text-base text-gray-400">Country Lead</p>
            <p className="text-sm sm:text-base text-gray-400">Credible</p>
          </div>
        </div>

        <div className="bg-[#101218] w-full lg:w-[500px] font-trap p-4 sm:p-6 rounded-lg mb-4 lg:mb-0">
          <p className="text-xl sm:text-xl">&quot;Lorem Ipsum Vite&quot;</p>
          <div className="pt-8 sm:pt-12">
            <p className="font-bold text-base sm:text-lg">Sean Cosep</p>
            <p className="text-sm sm:text-base text-gray-400">Country Lead</p>
            <p className="text-sm sm:text-base text-gray-400">Credible</p>
          </div>
        </div>

        <div className="bg-[#101218] w-full lg:w-[500px] font-trap p-4 sm:p-6 rounded-lg mb-4 lg:mb-0">
          <p className="text-xl sm:text-xl">&quot;Lorem Ipsum Vite&quot;</p>
          <div className="pt-8 sm:pt-12">
            <p className="font-bold text-base sm:text-lg">Sean Cosep</p>
            <p className="text-sm sm:text-base text-gray-400">Country Lead</p>
            <p className="text-sm sm:text-base text-gray-400">Credible</p>
          </div>
        </div>
      </div>

      {/* Video Recap */}
      <div
        id="recap"
        className="section-offset py-12 px-4 sm:px-8 md:px-16 w-full place-self-center"
        data-aos="fade-up"
      >
        <h1 className="font-trap font-bold text-2xl sm:text-3xl text-center mb-8">
          Blockchain Campus Conference 2024 Recap
        </h1>
        <div className="relative w-full max-w-4xl mx-auto aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full aspect-video"
            src="https://www.youtube.com/embed/ZHGzJjPRQog?si=uK496HWK77DXX6bw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Links to the Photo Dump of BCC 2024 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full max-w-md mx-auto">
          <a
            href="https://drive.google.com/drive/folders/1QIc8MWpwmBHxtYUixldjByeUswsHnJZw"
            target="_blank"
            rel="noopener"
          >
            <button className="w-full sm:w-[200px] py-3 bg-[#101218] text-white font-trap font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-[#101218] hover:shadow-lg border-2 border-[#101218] active:scale-95 shadow-md">
              Day 1
            </button>
          </a>
          <a
            href="https://drive.google.com/drive/folders/1pzB4nGSJq8OmLLxSJbSCP0kbeO8p4ZwA"
            target="_blank"
            rel="noopener"
          >
            <button className="w-full sm:w-[200px] py-3 bg-[#101218] text-white font-trap font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-[#101218] hover:shadow-lg border-2 border-[#101218] active:scale-95 shadow-md">
              Day 2
            </button>
          </a>
        </div>
      </div>

      {/* Image Collection */}
      <div className="flex justify-center bg-white" data-aos="fade-up">
        <div className="flex justify-center w-full py-12 gap-4 flex-wrap max-w-[1500px] mx-auto">
          <img
            className="w-[315px] h-[315px] object-cover rounded-lg"
            src="../../bcc2024-images/bcc-2024-01.jpg"
            alt="BCC 2024"
          />
          <img
            className="w-[615px] h-[315px] object-cover rounded-lg"
            src="../../bcc2024-images/bcc-2024-02.jpg"
            alt="BCC 2024"
          />
          <div className="flex flex-col gap-4">
            <img
              className="w-[315px] h-[150px] object-cover rounded-lg"
              src="../../bcc2024-images/bcc-2024-03.jpg"
              alt="BCC 2024"
            />
            <img
              className="w-[315px] h-[150px] object-cover rounded-lg"
              src="../../bcc2024-images/bcc-2024-04.jpg"
              alt="BCC 2024"
            />
          </div>
          <img
            className="w-[615px] h-[315px] object-cover rounded-lg"
            src="../../bcc2024-images/bcc-2024-05.jpg"
            alt="BCC 2024"
          />
          <img
            className="w-[315px] h-[315px] object-cover rounded-lg"
            src="../../bcc2024-images/bcc-2024-06.jpg"
            alt="BCC 2024"
          />
          <img
            className="w-[315px] h-[315px] object-cover rounded-lg"
            src="../../bcc2024-images/bcc-2024-07.jpg"
            alt="BCC 2024"
          />
          <div className="flex flex-col gap-4">
            <img
              className="w-[315px] h-[150px] object-cover rounded-lg"
              src="../../bcc2024-images/bcc-2024-08.jpg"
              alt="BCC 2024"
            />
            <img
              className="w-[315px] h-[150px] object-cover rounded-lg"
              src="../../bcc2024-images/bcc-2024-09.jpg"
              alt="BCC 2024"
            />
          </div>
          <img
            className="w-[945px] h-[315px] object-cover rounded-lg"
            src="../../bcc2024-images/bcc-2024-10.jpg"
            alt="BCC 2024"
          />
        </div>
      </div>

      {/* Partners & Sponsors */}
      <div
        id="sponsors"
        className="section-offset flex flex-col items-center justify-center my-12 text-center"
        data-aos="fade-up"
      >
        <div className="flex items-center space-x-4">
          <img
            src={website_logo.src}
            alt="Blockchain Campus Conference Logo"
            draggable="false"
          />
          <h1 className="font-trap font-bold text-3xl">
            Our Partners & Sponsors
          </h1>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdRbCzlbmlWxpr8KXvmgUl5IC_ciaNwQMvrCMpepUw5wK-eqA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-gray-200 text-[#0F1728] font-trap font-bold rounded-full hover:bg-gray-300 transition"
        >
          Become A Sponsor/Partner
        </a>
        <div className="grid grid-cols-6 mt-6 px-4 space-x-6">
          {sponsorLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="x-[200px] h-[200px] object-contain mx-auto"
              alt="Our sponsors"
              draggable="false"
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
