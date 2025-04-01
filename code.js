{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from "react";\
\
const App = () => \{\
  return (\
    <div className="font-sans bg-gray-100 min-h-screen">\
      \{/* Navbar */\}\
      <nav className="p-4 bg-white shadow-md flex justify-between items-center">\
        <h1 className="text-xl font-bold">Shivam Upadhyaya</h1>\
        <div>\
          <a href="#about" className="mx-4 text-gray-700">About</a>\
          <a href="#projects" className="mx-4 text-gray-700">Projects</a>\
          <a href="#contact" className="mx-4 text-gray-700">Contact</a>\
        </div>\
      </nav>\
\
      \{/* Hero Section */\}\
      <header className="text-center py-20 bg-blue-600 text-white">\
        <h2 className="text-4xl font-bold">Product Manager & Strategist</h2>\
        <p className="mt-2 text-lg">Building impactful products with data-driven insights.</p>\
      </header>\
\
      \{/* About Section */\}\
      <section id="about" className="p-10 max-w-4xl mx-auto">\
        <h3 className="text-2xl font-bold mb-4">About Me</h3>\
        <p>\
          I am a product management enthusiast with a background in business and technology.\
          Passionate about building scalable solutions that drive user engagement and business growth.\
        </p>\
      </section>\
\
      \{/* Projects Section */\}\
      <section id="projects" className="p-10 bg-gray-200">\
        <h3 className="text-2xl font-bold mb-4">Projects</h3>\
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\
          <div className="p-4 bg-white shadow-md rounded-lg">\
            <h4 className="font-bold">Project Name</h4>\
            <p>Description of the project and impact.</p>\
          </div>\
        </div>\
      </section>\
\
      \{/* Contact Section */\}\
      <section id="contact" className="p-10 max-w-4xl mx-auto">\
        <h3 className="text-2xl font-bold mb-4">Contact</h3>\
        <p>Email: <a href="mailto:shivam@example.com" className="text-blue-600">shivam@example.com</a></p>\
        <p>LinkedIn: <a href="https://linkedin.com/in/shivamupadhyaya" className="text-blue-600">Profile</a></p>\
      </section>\
\
      \{/* Footer */\}\
      <footer className="text-center p-4 bg-white shadow-md mt-10">\
        <p>\'a9 2025 Shivam Upadhyaya</p>\
      </footer>\
    </div>\
  );\
\};\
\
export default App;\
}