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
      <div className="pt-20">
        <img
          className="w-[100%] h-[800px] object-cover"
          src={calabarzon_background.src}
          alt="Taal Lake"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center place-self-center text-center text-8xl max-h-[74vh] font-trap">
          <p className="font-bold">BLOCKCHAIN</p>
          <p className="font-bold">CAMPUS 2025</p>
          <p className="font-bold">CONFERENCE</p>
          <p className="font-bold bg-white pt-4 px-2 rounded-lg text-[#101218]">
            CALABARZON
          </p>
          <button
            className="font-trap font-bold text-xl text-center border-2 border-white rounded-lg m-4 px-4 pt-4 pb-2
          transform transition-all duration-300 hover:scale-105 hover:px-6"
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      <div className="py-12 px-72 place-self-center w-full" data-aos="fade-up">
        <p className="font-trap text-4xl text-center">
          <span className="font-bold">The Blockchain Campus Conference</span> is
          a free 2-day nationwide campus conference series designed to tackle
          real-world challenges faced by industries such as finance, health,
          retail, government, logistics, utilities, gaming & entertainment and
          more through the power of blockchain solutions. Blockchain Campus
          Conference offers a unique opportunity to learn, connect, and share
          your skills and creativity while making a tangible impact on the
          future of business and industry.
        </p>
      </div>

      {/* TODO: Add a when and where section and embed the location of the venue on Google Maps*/}

      {/* Quotes from last BCC */}
      <div
        className="flex justify-center gap-4 bg-white w-full py-12 px-4"
        data-aos="fade-up"
      >
        <div className="bg-[#101218] w-[500px] font-trap p-4 rounded-lg">
          <p className="text-xl">"Lorem Ipsum Vite"</p>
          <p className="font-bold pt-12">Sean Cosep</p>
          <p>Country Lead</p>
          <p>Credible</p>
        </div>

        <div className="bg-[#101218] w-[500px] font-trap p-4 rounded-lg">
          <p className="text-xl">"Lorem Ipsum Vite"</p>
          <p className="font-bold pt-12">Sean Cosep</p>
          <p>Country Lead</p>
          <p>Credible</p>
        </div>

        <div className="bg-[#101218] w-[500px] font-trap p-4 rounded-lg">
          <p className="text-xl">"Lorem Ipsum Vite"</p>
          <p className="font-bold pt-12">Sean Cosep</p>
          <p>Country Lead</p>
          <p>Credible</p>
        </div>
      </div>

      {/* Video Recap */}
      <div className="py-12 px-4 w-full place-self-center" data-aos="fade-up">
        <h1 className="font-trap font-bold text-3xl text-center">
          Blockchain Campus Conference 2024 Recap
        </h1>
        <iframe
          className="rounded-lg mx-auto pt-6"
          width="854"
          height="480"
          src="https://www.youtube.com/embed/ZHGzJjPRQog?si=uK496HWK77DXX6bw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="flex justify-center space-x-16 mt-6">
          <a
            href="https://drive.google.com/drive/folders/1QIc8MWpwmBHxtYUixldjByeUswsHnJZw"
            target="_blank"
            rel="noopener"
          >
            <button className="p-4 bg-[#E9E9E9] text-[#0F1728] font-mono font-bold  text-3xl rounded-lg">
              Day 1
            </button>
          </a>
          <a
            href="https://drive.google.com/drive/folders/1pzB4nGSJq8OmLLxSJbSCP0kbeO8p4ZwA"
            target="_blank"
            rel="noopener"
          >
            <button className="p-4 bg-[#E9E9E9] text-[#0F1728] font-mono font-bold  text-3xl rounded-lg">
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

      {/* partners & sponsors */}
      <div
        className="flex flex-col items-center justify-center my-12 text-center"
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
