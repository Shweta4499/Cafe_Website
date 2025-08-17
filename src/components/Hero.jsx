import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-[#3e2723] text-white px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Coffee image behind the heading */}
      <img
        src="/coffee.png"
        alt="Coffee cup"
        className="absolute top-1/3 sm:top-1/4 left-1/2 -translate-x-1/2 
                   w-40 xs:w-52 sm:w-64 md:w-80 lg:w-[28rem] xl:w-[32rem] 
                   opacity-90 pointer-events-none select-none"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
                   font-bold drop-shadow-lg text-[#f4f1f0] text-center 
                   font-['Playfair_Display'] leading-tight px-2"
      >
        Brew & Bliss Café
      </motion.h1>

      {/* Subtitle */}
      <p
        className="mt-4 sm:mt-6 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                   text-[#efebe8] drop-shadow-md text-center max-w-2xl sm:max-w-3xl 
                   font-['Nunito'] px-3"
      >
        Where every sip feels like home
      </p>
    </section>
  );
}
