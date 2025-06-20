import React from "react";
import Marquee from "react-fast-marquee";
import Footer from "../Footer/Footer";

// Array of image paths
const certificateImages = [
  "/cert1.png",
  "/cert2.png",
  "/cert3.png",
  "/cert4.png",
  "/cert5.png",
  "/cert6.png",
];

const Certificate = () => {
  return (
    <>
    <section className="py-8 px-4">
      <h2 className="text-6xl font-bold text-center mb-4 text-blue-700"> Certifications</h2>
      
      <Marquee speed={140}>
        {certificateImages.map((src, index) => (
          <div
            key={`cert-${index}`}
            className="flex-shrink-0 mx-6 w-[750px] h-[500px] flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Certificate ${index + 1}`}
              className="w-full h-full object-contain rounded border border-blue-700"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </section>
    <Footer/>
    </>
  );
};

export default Certificate;