import React, { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Cappuccino", description: "Rich espresso topped with velvety milk foam.", price: "₹180", imgSrc: "/1.png" },
  { id: 2, name: "Blueberry Muffin", description: "Freshly baked with juicy blueberries.", price: "₹120", imgSrc: "/2.png" },
  { id: 3, name: "Latte", description: "Smooth espresso with creamy steamed milk.", price: "₹160", imgSrc: "/3.png" },
  { id: 4, name: "Mocha", description: "Chocolate flavored espresso with steamed milk.", price: "₹170", imgSrc: "/1.png" },
  { id: 5, name: "Espresso", description: "Strong and bold classic espresso shot.", price: "₹140", imgSrc: "/2.png" },
];

// Responsive positions
const getPositions = (width) => {
  if (width < 640) {
    return [
      { x: -110, y: 20, rotate: -15, scaleX: 1.2, scaleY: 0.9, blur: 1, opacity: 0.7 },
      { x: 0, y: -10, rotate: 0, scaleX: 1.5, scaleY: 1.2, blur: 0, opacity: 1 },
      { x: 110, y: 20, rotate: 15, scaleX: 1.2, scaleY: 0.9, blur: 1, opacity: 0.7 },
    ];
  } else if (width < 1024) {
    return [
      { x: -200, y: 90, rotate: -25, scaleX: 0.9, scaleY: 0.75, blur: 2, opacity: 0.4 },
      { x: -130, y: 60, rotate: -15, scaleX: 1, scaleY: 0.85, blur: 1, opacity: 0.6 },
      { x: 0, y: 0, rotate: 0, scaleX: 1.2, scaleY: 1.1, blur: 0, opacity: 1 },
      { x: 130, y: 60, rotate: 15, scaleX: 1, scaleY: 0.85, blur: 1, opacity: 0.6 },
      { x: 200, y: 90, rotate: 30, scaleX: 0.9, scaleY: 0.75, blur: 2, opacity: 0.4 },
    ];
  } else {
    return [
      { x: -330, y: 90, rotate: -25, scaleX: 0.9, scaleY: 0.7, blur: 3, opacity: 0.4 },
      { x: -220, y: 60, rotate: -15, scaleX: 1, scaleY: 0.85, blur: 2, opacity: 0.6 },
      { x: 0, y: 0, rotate: 0, scaleX: 1.2, scaleY: 1.1, blur: 0, opacity: 1 },
      { x: 220, y: 60, rotate: 15, scaleX: 1, scaleY: 0.85, blur: 2, opacity: 0.6 },
      { x: 330, y: 90, rotate: 30, scaleX: 0.9, scaleY: 0.7, blur: 3, opacity: 0.4 },
    ];
  }
};

export default function CoffeeCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [positions, setPositions] = useState(getPositions(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setPositions(getPositions(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleIndexes = (center) => {
    const count = positions.length;
    return Array(count)
      .fill(0)
      .map((_, i) => (center + i - Math.floor(count / 2) + products.length) % products.length);
  };

  const visibleIndexes = getVisibleIndexes(centerIndex);
  const prev = () => setCenterIndex((prev) => (prev - 1 + products.length) % products.length);
  const next = () => setCenterIndex((prev) => (prev + 1) % products.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="min-h-[100vh] bg-[#381a14] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-16 relative overflow-visible">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#ffcc80] z-30 relative text-center">
        ☕ Our Coffee Menu
      </h2>

      <div className="relative w-full max-w-6xl h-[350px] flex justify-center items-center select-none z-10 mt-10">
        {visibleIndexes.map((idx, i) => {
          const product = products[idx];
          const pos = positions[i];
          // Responsive base size
  const isSmall = window.innerWidth < 640;
  const baseWidth = isSmall ? 160 : 350;
  const baseHeight = isSmall ? 250 : 450;

  const width = pos.scaleX * baseWidth;
  const height = pos.scaleY * baseHeight;

          return (
            <div
              key={product.id}
              className="absolute top-1/2 left-1/2 shadow-2xl overflow-hidden bg-[#552921] cursor-pointer transition-all duration-500"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                borderRadius: "50%",
                filter: `blur(${pos.blur}px)`,
                opacity: pos.opacity,
                transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%)) rotate(${pos.rotate}deg)`,
                zIndex: pos.opacity === 1 ? 20 : 10,
              }}
              onClick={() => i !== Math.floor(positions.length / 2) && setCenterIndex(idx)}
              aria-label={`View ${product.name}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => i !== Math.floor(positions.length / 2) && e.key === "Enter" && setCenterIndex(idx)}
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-full object-cover object-center rounded-full"
                loading="lazy"
              />
             <div
  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 bg-[#68414180] rounded-md px-2 py-1 text-center text-[#ffcc80] font-bold flex flex-col items-center justify-center"
  style={{
    fontSize: window.innerWidth < 640 ? "0.7rem" : "0.9rem",
  }}
>
  <span className="truncate sm:truncate-none">{product.name}</span>
  <span className="text-sm sm:text-base">{product.price}</span>
</div>

            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
{/* Navigation Buttons */}
<button
  onClick={prev}
  aria-label="Previous coffee"
  className={`absolute z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#551f0c] text-[#d7c9c6] shadow-lg hover:bg-[#bb826b] transition-transform`}
  style={{
    bottom: window.innerWidth < 640 ? "160px" : "180px",
    left: "calc(50% - 160px)",
    transform: "rotate(-20deg)",
  }}
>
  ←
</button>
<button
  onClick={next}
  aria-label="Next coffee"
  className={`absolute z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#551f0c] text-[#d7c9c6] shadow-lg hover:bg-[#bb826b] transition-transform`}
  style={{
    bottom: window.innerWidth < 640 ? "160px" : "180px",
    right: "calc(50% - 160px)",
    transform: "rotate(10deg)",
  }}
>
  →
</button>

    </section>
  );
}
