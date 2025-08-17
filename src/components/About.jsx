import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NextAbout() {
  const [leftX, setLeftX] = useState(-110);
  const [rightX, setRightX] = useState(130);

  useEffect(() => {
    const updatePositions = () => {
      if (window.innerWidth < 640) {
        // small screens
        setLeftX(-120);
        setRightX(120);
      } else if (window.innerWidth >= 1024) {
        // large screens
        setLeftX(-170);
        setRightX(190);
      } else {
        // medium screens
        setLeftX(-110);
        setRightX(130);
      }
    };

    updatePositions(); // set initial values
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#34120c] px-6 md:px-16 py-12"
    >
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#eeeeee] font-['Playfair_Display']">
          About 
        </h2>
        <h2 className="text-6xl md:text-5xl font-bold text-[#eeeeee] font-['Playfair_Display']">
          OUR CAFE
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[#eae6e5] font-['Nunito'] leading-relaxed">
          Brew & Bliss Café, established with a passion for great taste and warm
          hospitality, is a haven for coffee lovers and food enthusiasts alike.
          Every cup is brewed with carefully selected beans, blending rich
          flavors with a cozy ambiance that feels like home.
        </p>
      </div>

      {/* Right Side - Coffee Animation */}
      <div className="flex-1 relative flex justify-center items-center mt-12 md:mt-0 min-h-[500px]">
        {/* Middle Cup */}
        <motion.img
          src="/1.png"
          alt="Middle Coffee"
          initial={{ opacity: 0, scale: 0.5, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-64 md:w-96 relative z-30"
        />

        {/* Left Cup */}
        <motion.img
          src="/2.png"
          alt="Left Coffee"
          initial={{ opacity: 0, scale: 0.3, y: 60 }}
          animate={{ opacity: 1, scale: 0.8, rotate: -12, x: leftX, y: 40 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
          className="w-56 md:w-80 absolute top-1/2 -translate-y-1/2 z-20"
        />

        {/* Right Cup */}
        <motion.img
          src="/3.png"
          alt="Right Coffee"
          initial={{ opacity: 0, scale: 0.3, y: 60 }}
          animate={{ opacity: 1, scale: 0.8, rotate: 12, x: rightX, y: 20 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
          className="w-56 md:w-80 absolute top-1/2 -translate-y-1/2 z-10"
        />
      </div>
    </section>
  );
}
