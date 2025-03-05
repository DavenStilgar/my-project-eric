import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-yellow-400">Eric</h1>
        <h2 className="text-2xl text-white-300 mt-4">
          Web & Android Developer | Data Scientist & AI Developer Enthusiast
        </h2>
        <p className="text-white-200 mt-8 leading-relaxed">
          I am a passionate Computer Scientist and statistician with a strong interest in website development, data science, AI development 
          and Android development. I specialize in building modern and responsive web applications using Next.js 
          and enjoy exploring secure coding practices. I love solving technical challenges and continuously improving my skills.
        </p>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-yellow-300">Skills</h3>
          <p className="text-whit-200 mt-3">
            Next.js, React, JavaScript, Web Development, R, Data analysis, Office suites, Python, Tailwind CSS
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-yellow-300">Contact</h3>
          <p className="text-indigo-200 mt-3">arthurericjunior01@gmail.com</p>
          <p className="text-indigo-200">054-749-1306</p>
        </div>
      </div>
    </section>
  );
};

export default About;