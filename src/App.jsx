import React from "react";

export default function App() {
  return (
    <div className="font-sans text-gray-100 bg-gradient-to-br from-slate-900 via-gray-800 to-black min-h-screen">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white tracking-wide">MyPortfolio</h1>
          <nav className="space-x-6 text-sm font-medium hidden md:flex">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
          </nav>
        </div>
      </header>

      {/* ===== HERO / LANDING ===== */}
      <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="avatar"
          className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-lg mb-6"
        />
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Hi, I’m <span className="text-cyan-400">Krishna</span></h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          A passionate <span className="text-cyan-300">Full Stack Developer</span> building modern, animated, and
          responsive web experiences. 🚀
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold shadow-lg hover:bg-cyan-400 transition"
        >
          View My Work
        </a>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">Featured Projects</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Portfolio Website",
              desc: "A stunning React + Tailwind portfolio to showcase my work.",
              img: "https://source.unsplash.com/600x400/?website,design",
              link: "#"
            },
            {
              title: "E-Commerce Store",
              desc: "A modern shopping platform with cart, payments, and admin panel.",
              img: "https://source.unsplash.com/600x400/?ecommerce,shop",
              link: "#"
            },
            {
              title: "Fitness App",
              desc: "A sleek app to track workouts, nutrition, and progress.",
              img: "https://source.unsplash.com/600x400/?fitness,app",
              link: "#"
            }
          ].map((project, i) => (
            <div key={i} className="bg-gray-800/60 rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition">
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h4 className="text-xl font-bold text-cyan-400">{project.title}</h4>
                <p className="mt-2 text-gray-300">{project.desc}</p>
                <a href={project.link} className="mt-4 inline-block text-cyan-300 hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">Contact Me</h3>
        <form className="bg-gray-800/60 rounded-2xl shadow-lg p-8 space-y-6 border border-white/10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 text-center text-gray-400 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Krishna Sahu — All Rights Reserved.
      </footer>
    </div>
  );
}
