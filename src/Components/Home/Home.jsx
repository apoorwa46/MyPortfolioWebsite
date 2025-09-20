


import React from "react";
import avatarImg from "../../assets/logo3-removebg-preview.png";
import TextChange from "../TextChange";
import resumePDF from "../../assets/Apoorwa Kumar Resume Updated.pdf";

const Home = () => {
  return (
    <section
      id="about"
      className="w-full text-white px-12 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          <TextChange />
        </h1>
        
        {/* ✅ Centered summary on desktop */}
        <p className="text-sm px-10 md:text-lg mt-8 text-gray-400 font-medium leading-relaxed md:text-center">
          I am a passionate software developer with a keen interest in building
          innovative solutions. My expertise lies in creating dynamic web
          applications and exploring new technologies to enhance user
          experiences.
        </p>

        {/* ✅ Centered resume button on desktop */}
        <div className="mt-6 md:text-center">
          <a
            href={resumePDF}
            download="Apoorwa Kumar Resume.pdf"
            className="inline-block text-white bg-[#465697] px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:scale-105 hover:opacity-90 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Avatar Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
