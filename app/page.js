import React from "react";
import About from "./componets/About";
import Experience from "./componets/Experience";
import Project from "./componets/Projects";
import Contact from "./componets/Contact";
import Hero from "./componets/Hero";

const page = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      
      <Hero/>
      <Experience/>
      <Project/>
      <About/>
      <Contact/>
      
    </div>
   
  );
}

export default page;