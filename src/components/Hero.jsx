import { motion } from "framer-motion";

const beans = [
  { src: "/bean.png", size: 0.8, x: -20, y: -10, delay: 0 },
  { src: "/bean.png", size: 0.8, x: 25, y: -5, delay: 1 },
  { src: "/bean.png", size: 0.8, x: -10, y: 30, delay: 2 },
  { src: "/bean.png", size: 2, x: 15, y: 15, delay: 3 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-[#4a1d1d] text-white px-4 sm:px-6 lg:px-12 py-15 sm:py-32 overflow-visible ink-bg"
    >
      {/* Main coffee image */}
      <motion.img
  src="/coffee.png"
  alt="Coffee cup"
  initial={{ y: -2 }}
  animate={{ y: 5 }}
  transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
  className="absolute top-1/2 xs:top-1/3 left-1/2 -translate-x-1/2 
             w-40 xs:w-52 sm:w-74 md:w-80 lg:w-[28rem] xl:w-[32rem] 
             opacity-100 pointer-events-none select-none z-40"
/>

      {/* Floating coffee beans */}
      {beans.map((bean, index) => (
        <motion.img
          key={index}
          src={bean.src}
          alt="Coffee bean"
          initial={{ y: bean.y, x: bean.x, opacity: 0.7 }}
          animate={{ y: bean.y + 10, x: bean.x + 5 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4 + Math.random() * 2,
            delay: bean.delay,
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-${bean.size} h-${bean.size} opacity-70 pointer-events-none select-none z-38`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center font-['Playfair_Display'] font-bold leading-tight px-2
                   text-[clamp(2rem,6vw,5rem)] sm:text-[clamp(3rem,6vw,6rem)] text-[#f4f1f0] ink-text"
      >
        Brew & Bliss Café
      </motion.h1>

      {/* Subtitle */}
      <p
        className="relative mt-3 sm:mt-5 text-center font-['Nunito'] 
                   text-[clamp(1rem,4vw,2rem)] sm:text-[clamp(1.2rem,2.5vw,2.5rem)] 
                   text-[#efebe8] max-w-xs sm:max-w-lg px-2 sm:px-4 ink-sub"
      >
        Where every sip feels like home
      </p>

    
    </section>
  );
}
