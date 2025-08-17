// Specials.jsx
import React from "react";

const specials = [
,
  { id: 4, title: "Cappuccino", description: "Rich espresso topped with velvety milk foam.", price: "₹180", imgSrc: "/1.png" },
  { id: 5, title: "Latte", description: "Smooth espresso with steamed milk.", price: "₹160", imgSrc: "/2.png" },
  { id: 6, title: "Espresso", description: "Strong and bold single shot.", price: "₹120", imgSrc: "/3.png" },
];

export default function Specials() {
  return (
    <section className="min-h-[80vh] bg-[#381710] flex flex-col items-center justify-center px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#ffcc80] text-center">
        🍰 & ☕ Our Specials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {specials.map((item) => (
          <div
            key={item.id}
            className="bg-[#805d57] rounded-2xl shadow-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-90 object-cover mt-5"
              loading="lazy"
            />
            <div className="p-4 text-center text-[#ffcc80]">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm md:text-base">{item.description}</p>
              <p className="mt-2 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
