import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Generate more beans dynamically
const initialBeans = Array.from({ length: 30 }, (_, i) => ({
  src: "/bean.png",
  size: 1 + Math.random() * 2, // random size between 1rem and 3rem
  delay: i * 0.2, // staggered animation delay
}));

export default function Hero() {
  const [beans, setBeans] = useState([]);

  // Randomly position beans across the screen
  useEffect(() => {
    const updateBeanPositions = () => {
      const newBeans = initialBeans.map(bean => ({
        ...bean,
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
        rotate: Math.random() * 360,
      }));
      setBeans(newBeans);
    };

    updateBeanPositions();
    window.addEventListener("resize", updateBeanPositions);
    return () => window.removeEventListener("resize", updateBeanPositions);
  }, []);

  // Helper: create floating + rotation + scale animation
  const animateBean = (x, y, rotate) => ({
    x: [x, x + Math.random() * 30 - 15, x, x + Math.random() * 30 - 15],
    y: [y, y + Math.random() * 30 - 15, y, y + Math.random() * 30 - 15],
    rotate: [rotate, rotate + Math.random() * 20 - 10, rotate, rotate + Math.random() * 20 - 10],
    scale: [1, 1 + Math.random() * 0.2, 1, 1 + Math.random() * 0.2],
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-[#4a1d1d] text-white px-4 sm:px-6 lg:px-12 py-15 sm:py-32 overflow-visible"
    >
      {/* Floating coffee beans */}
      {beans.map((bean, index) => (
        <motion.img
          key={index}
          src={bean.src}
          alt="Coffee bean"
          initial={{ x: bean.x, y: bean.y, opacity: 0.7 }}
          animate={animateBean(bean.x, bean.y, bean.rotate)}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5 + Math.random() * 3,
            delay: bean.delay,
          }}
          style={{ width: `${bean.size}rem`, height: `${bean.size}rem` }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     opacity-70 pointer-events-none select-none z-38"
        />
      ))}

      {/* Main coffee image */}
      <motion.img
  src="/coffee.png"
  alt="Coffee cup"
  initial={{ y: -2 }}
  animate={{ y: 5 }}
  transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
  className="
    absolute top-1/2 xs:top-1/3 left-1/2 -translate-x-1/2 
    w-64 xs:w-80 sm:w-82 md:w-80 lg:w-[28rem] xl:w-[32rem] 
    opacity-100 pointer-events-none select-none z-40
  "
/>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-50 text-center font-['Playfair_Display'] font-bold leading-tight px-2
                   text-[clamp(2.5rem,7vw,5.5rem)] sm:text-[clamp(3rem,6vw,6rem)] text-[#f4f1f0]"
      >
        Brew & Bliss Café
      </motion.h1>

      {/* Subtitle */}
      <p
        className="relative z-50 mt-3 sm:mt-5 text-center font-['Nunito'] 
                   text-[clamp(1.2rem,4.5vw,2.2rem)] sm:text-[clamp(1.2rem,2.5vw,2.5rem)] 
                   text-[#efebe8] max-w-xs sm:max-w-lg px-2 sm:px-4"
      >
        Where every sip feels like home
      </p>
    </section>
  );
}
