"use client";
import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Prashant Kashyap",
    role: "Business",
    img: "/prashant.png", // replace with your actual image path
  },
  {
    name: "Javed Khan",
    role: "Design & UX",
    img: "/javed.png", // replace with your actual image path
  },
  {
    name: "Yathish Venkatesh",
    role: "Growth & Marketing",
    img: "/yathish.png", // replace with your actual image path
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white" id='team'>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Meet The Team
        </h2>
        <p className="mt-4 text-neutral-600 max-w-3xl mx-auto text-base sm:text-lg">
          A dynamic group of innovators, strategists, and creators driven by a passion
          for excellence. Together, we blend expertise and vision to deliver
          transformative solutions.
        </p>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative w-62 h-62 mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">{member.name}</h3>
              <p className="text-neutral-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
