import React from "react";
import { Github, Linkedin } from "lucide-react";


  const sections = [
    {
      id: "about",
      title: "About Me",
      bg: "bg-gradient-to-r from-purple-100 to-indigo-200",
      content: `Java Backend Developer skilled in Spring Boot, Hibernate, and SQL.
        Passionate about writing clean, scalable code and building RESTful backend systems.`,
    },
    {
      id: "skills",
      title: "Skills",
      bg: "bg-gradient-to-r from-teal-100 to-cyan-200",
      content: (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-left list-disc list-inside">
          {[
            "Java", "Spring Boot", "Hibernate", "JEE",
            "MySQL", "SQL", "HTML", "CSS",
            "REST APIs", "Git", "Maven", "Data Structures"
          ].map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "projects",
      title: "Projects",
      bg: "bg-gradient-to-r from-pink-100 to-rose-200",
      content: (
        <div className="space-y-4">
          {[
            {
              title: "Food Delivery App",
              desc: "Java (JSP, Servlets), HTML/CSS, MySQL. Includes login, order management, and cart. MVC pattern."
            },
            {
              title: "Car Rental System",
              desc: "JEE-based system for renting cars. Features login, booking, and vehicle management."
            },
            {
              title: "Quiz Application",
              desc: "Spring Boot quiz system with REST APIs, Spring Data JPA, and MySQL. Supports scoring, questions, results."
            }
          ].map((project) => (
            <div key={project.title} className="bg-white p-4 rounded shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-700">{project.title}</h3>
              <p className="text-gray-700">{project.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "contact",
      title: "Contact",
      bg: "bg-gradient-to-r from-amber-100 to-yellow-200",
      content: (
        <div className="text-left space-y-2 text-lg">
          <p>Email: <a href="mailto:dandevamsi333@gmail.com" className="text-blue-600">dandevamsi333@gmail.com</a></p>
          <p>Phone: +91 93815 20725</p>
        </div>
      )
    }
  ];
  

export default function App() {
  const navLinks = ["about", "skills", "projects", "contact"];

  return (
    <div className="scroll-smooth font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow py-3 px-6 flex justify-between items-center">
        <span className="font-bold text-blue-700 text-lg">Vamsi Dande</span>
        <div className="space-x-4 text-sm">
          {navLinks.map((id) => (
            <a key={id} href={`#${id}`} className="text-gray-700 hover:text-blue-600 transition capitalize">
              {id}
            </a>
          ))}
          <a
            href="/myResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100 pt-20 px-4">
        <img
          src="/profile.jpg"
          alt="Vamsi Dande"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-blue-600 shadow-md"
        />
        <h1 className="text-4xl font-bold mt-4">Vamsi Dande</h1>
        <p className="text-lg text-gray-600 mt-2">
          Java Backend Developer | Spring Boot Enthusiast | Problem Solver
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/vamsi-dande" target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-black transition" />
          </a>
          <a href="https://linkedin.com/in/vamsi-dande-a48508280" target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-600 transition" />
          </a>
        </div>
        <a
          href="/myResume.pdf"
          download
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`${section.bg} min-h-screen flex justify-center items-center px-6 py-16`}
        >
          <div
            className={`max-w-5xl w-full rounded-xl shadow-lg p-10 bg-white transform hover:scale-[1.02] transition duration-300 flex flex-col md:flex-row ${
              i % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <div className="text-gray-700 text-lg">{section.content}</div>
            </div>
            <div className="md:w-1/2 hidden md:block" />
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-white">
        © {new Date().getFullYear()} Vamsi Dande. All rights reserved.
      </footer>
    </div>
  );
}
