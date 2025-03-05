import React from "react";
import About from "./componets/About";
import Experience from "./componets/Experience";
import Project from "./componets/Projects";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";

const page = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Header/>
      <Hero/>
      <Experience/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
   
  );
}

export default page;