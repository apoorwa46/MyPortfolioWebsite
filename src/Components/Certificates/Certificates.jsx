import React, { useState } from "react";
import { certificates } from "../../constants";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);


  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES & ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Certificates and achievements that highlight my skills and learning
          journey.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            onClick={() => handleOpenModal(certificate)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {certificate.description}
              </p>
              <div className="mb-4">
                {certificate.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
 
      
    </section>
  );
};

export default Certificates;
