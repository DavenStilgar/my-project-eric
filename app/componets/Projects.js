import React from 'react';
import Image from 'next/image'; // Importing Image from next/image for optimization

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, showcasing my projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://your-portfolio-link.com",
    image: "/portfolio.png"
  },
  {
    title: "Secure Login System",
    description: "A user authentication system with JWT and bcrypt for secure password hashing.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/yourgithub/secure-login",
    image: "/project-security.png",
  },
  {
    title: "Android Notes App",
    description: "A simple Android app for creating and managing notes, built with Kotlin.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    link: "https://github.com/yourgithub/notes-app",
    image: "/project-noteapp.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-blue-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">Projects</h2>
        <p className="text-lg mt-2 text-white-200">Here are some of the projects I&apos;ve worked on.</p> {/* Escaped entity */}
      </div>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image src={project.image} alt={project.title} className="rounded-lg mb-4" width={500} height={300} /> {/* Using next/image */}
            <h3 className="text-2xl font-semibold text-yellow-300">{project.title}</h3>
            <p className="text-white-200 mt-2">{project.description}</p>
            <div className="mt-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-yellow-400 text-white px-2 py-1 rounded text-sm mr-2">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              className="mt-4 inline-block text-yellow-300 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}