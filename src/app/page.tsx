"use client";
import Navbar from "./components/navbar";
import calabarzon_background from "../../public/bg-assets/calabarzon.jpg";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

const bcc_images = Array.from(
  { length: 10 },
  (_, i) =>
    `../../bcc2024-images/bcc-2024-${String(i + 1).padStart(2, "0")}.jpg`
);

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 500);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bcc_images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 500);
    setCurrentIndex((prevIndex) =>
      prevIndex === bcc_images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <img
          className="w-[100%] object-cover"
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
      <div className="my-12 mx-72 py-4 px-4 place-self-center">
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

      {/* Image Carousel */}
      <div className="relative my-12 mx-auto max-w-3xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bcc_images.map((image, index) => (
            <img
              key={index}
              className="w-full h-96 object-cover object-center aspect-[3/4] rounded-lg flex-shrink-0"
              src={image}
              alt={`BCC 2024 ${index + 1}`}
              draggable="false"
            />
          ))}
        </div>
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/75 p-2 rounded-full text-white hover:bg-gray-600"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/75 p-2 rounded-full text-white hover:bg-gray-600"
        >
          <ChevronRight size={32} />
        </button>
      </div>
      <div className="flex justify-center space-x-16 mb-12">
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
      <div className="my-12 mx-72 py-4 px-4 place-self-center">
        <iframe
          className="rounded-lg"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/ZHGzJjPRQog?si=uK496HWK77DXX6bw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
