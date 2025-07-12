import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-medium max-w-3xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center gap-6 mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex items-center justify-center bg-gray-300 border-4 border-purple-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card Content */}
            <div
              className={`relative z-0 bg-gray-900 border border-white rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md w-full max-w-md transition-transform transform hover:scale-[1.02] ${
                index % 2 === 0 ? "sm:ml-32" : "sm:mr-32"
              }`}
            >
              {/* School Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* School Logo */}
                <div className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree and School */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Description and Grade */}
              <p className="mt-4 text-gray-400 font-semibold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400 text-sm">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
