"use client";
import Navbar from "./components/navbar";
import calabarzon_background from "../../public/bg-assets/calabarzon.jpg";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bcc_images = Array.from(
  { length: 10 },
  (_, i) =>
    `../../bcc2024-images/bcc-2024-${String(i + 1).padStart(2, "0")}.jpg`
);

export default function Home() {
  const [currentndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bcc_images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bcc_images.length - 1 : prevIndex - 1
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

      {/* TODO: Add a carousel */}
    </>
  );
}
