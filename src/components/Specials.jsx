// Specials.jsx
import React from "react";

const specials = [
  { id: 1, title: "Chocolate Cake", description: "Rich and moist chocolate cake.", price: "₹250", imgSrc: "/1.png" },
  { id: 2, title: "Vanilla Cupcake", description: "Soft and fluffy vanilla cupcake.", price: "₹80", imgSrc: "/2.png" },
  { id: 3, title: "Strawberry Tart", description: "Fresh strawberries on buttery tart.", price: "₹150", imgSrc: "/3.png" },
];

export default function Specials() {
  return (
    <section className="min-h-[80vh] bg-[#4e342e] flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#ffcc80]">
        🍰 Our Specials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {specials.map((item) => (
          <div
            key={item.id}
            className="bg-[#805d57] rounded-2xl shadow-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4 text-center text-[#ffcc80]">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
              <p className="mt-2 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
