import React, { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Cappuccino", description: "Rich espresso topped with velvety milk foam.", price: "₹180", imgSrc: "/1.png" },
  { id: 2, name: "Blueberry Muffin", description: "Freshly baked with juicy blueberries.", price: "₹120", imgSrc: "/2.png" },
  { id: 3, name: "Latte", description: "Smooth espresso with creamy steamed milk.", price: "₹160", imgSrc: "/3.png" },
  { id: 4, name: "Mocha", description: "Chocolate flavored espresso with steamed milk.", price: "₹170", imgSrc: "/1.png" },
  { id: 5, name: "Espresso", description: "Strong and bold classic espresso shot.", price: "₹140", imgSrc: "/2.png" },
  
];

// Positions for semicircular layout for each visible product card
const positions = [
  { x: -500, y: 180, rotate: -25, scale: 0.7, blur: 3, opacity: 0.4 },
  { x: -330, y: 90, rotate: -15, scale: 0.85, blur: 2, opacity: 0.6 },
  { x: 0, y: 0, rotate: 0, scale: 1.1, blur: 0, opacity: 1 },
  { x: 330, y: 90, rotate: 15, scale: 0.85, blur: 2, opacity: 0.6 },
  { x: 500, y: 180, rotate: 30, scale: 0.7, blur: 3, opacity: 0.4 },
];

export default function CoffeeCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);

  // Function to get visible indexes for 5 positions with wrap-around
  const getVisibleIndexes = (center) =>
    Array(5)
      .fill(0)
      .map((_, i) => (center + i - 2 + products.length) % products.length);

  const visibleIndexes = getVisibleIndexes(centerIndex);

  const prev = () => setCenterIndex((prev) => (prev - 1 + products.length) % products.length);
  const next = () => setCenterIndex((prev) => (prev + 1) % products.length);

  // Optional: Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="min-h-[100vh] bg-[#3e2723] flex flex-col items-center justify-center px-6 py-16 relative overflow-visible">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#ffcc80] z-30 relative">
        ☕ Our Coffee Menu
      </h2>

      {/* Product cards container */}
      <div className="relative w-full max-w-6xl h-[350px] flex justify-center items-center select-none z-10 mt-10">
        {visibleIndexes.map((idx, i) => {
          const product = products[idx];
          const pos = positions[i];

          return (
            <div
              key={product.id}
              className="absolute top-1/2 left-1/2 rounded-full shadow-2xl overflow-hidden bg-[#805d57] cursor-pointer transition-all duration-500"
              style={{
                width: pos.scale * 350,
                height: pos.scale * 350,
                borderRadius: "50%", // already rounded-full
                filter: `blur(${pos.blur}px)`,
                opacity: pos.opacity,
                transform: `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 50%)) rotate(${pos.rotate}deg) scale(${pos.scale})`,
                zIndex: pos.opacity === 1 ? 20 : 10,
                cursor: i === 2 ? "default" : "pointer",
              }}
              onClick={() => i !== 2 && setCenterIndex(idx)}
              aria-label={`View ${product.name}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => i !== 2 && e.key === "Enter" && setCenterIndex(idx)}
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-full object-cover object-center rounded-full"
                loading="lazy"
              />
              <div className="absolute bottom-0 w-full bg-[#68414180] text-center py-2 text-[#ffcc80] font-bold">
                {product.name} - {product.price}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        aria-label="Previous coffee"
        className="absolute bottom-44 left-[calc(50%-280px)] w-10 h-10 rounded-full bg-[#ffcc80] text-[#4e342e] flex items-center justify-center shadow-lg hover:bg-[#e6b25c] transition z-20"
        style={{ transform: "rotate(-15deg)" }}
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next coffee"
        className="absolute bottom-44 right-[calc(50%-280px)] w-10 h-10 rounded-full bg-[#ffcc80] text-[#4e342e] flex items-center justify-center shadow-lg hover:bg-[#e6b25c] transition z-20"
        style={{ transform: "rotate(15deg)" }}
      >
        →
      </button>
    </section>
  );
}
