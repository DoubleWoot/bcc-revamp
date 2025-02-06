"use client";
import Navbar from "./components/navbar";
import calabarzon_background from "../../public/calabarzon.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <img
          className="w-[100%] object-cover"
          src={calabarzon_background.src}
          alt="Taal Lake"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center place-self-center text-center text-8xl max-h-[74vh] font-trap">
          <p className="font-bold">BLOCKCHAIN</p>
          <p className="font-bold">
            CAMPUS
            <span className="bg-white-50 px-1 pt-1 rounded-lg">2025</span>
          </p>
          <p className="font-bold">CONFERENCE</p>
        </div>
      </div>
      <div className="my-4 mx-12 py-4 px-7 place-self-center">
        <p className="font-neue text-3xl text-center">
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
    </>
  );
}
