import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-indigo-900 text-white px-6">
      {/* Profile Image */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border- shadow-lg">
        <Image src="/profile.png" alt="Eric Arthur Junior" width={128} height={128} className="object-cover" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hello, This is <span className="text-yellow-400">Eric Arthur Junior</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl mt-4 max-w-2xl text-white-200 leading-relaxed">
        A dedicated computer scientist and statistician passionate about 
        <span className="text-yellow-300 font-semibold"> Web Development</span>, 
        <span className="text-yellow-300 font-semibold"> Data Science and AI</span>, and 
        <span className="text-yellow-300 font-semibold"> Android Development</span>.  
        I thrive on tackling complex problems and developing secure, user-friendly applications. My dual expertise allows me to approach challenges with a unique perspective, combining rigorous statistical analysis with innovative software solutions.
      </p>

      {/* CTA Button */}
      <a 
        href="#projects"
        className="mt-6 px-6 py-3 bg-yellow-400 text-white rounded-md text-lg font-medium 
        hover:bg-yellow-500 transition duration-300 shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;