"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import HeroSection from "./components/HeroSection";
import OurExpertiseSection from "./components/OurExpertiseSection";
import ProjectsSection from "./components/ProjectSection";
import TechSection from "./components/TechSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ContactSection from "./components/ContactSection";

export default function DevVersePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scrolling and section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  DevVerse
                </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {[
                "home",
                "about",
                "expertise",
                "projects",
                "tech",
                "why-us",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                      activeSection === item ? "text-blue-400" : "text-gray-300"
                    }`}
                  >
                    {item === "home"
                      ? "Home"
                      : item === "about"
                      ? "About Us"
                      : item === "expertise"
                      ? "Expertise"
                      : item === "projects"
                      ? "Projects"
                      : item === "tech"
                      ? "Tech Stack"
                      : item === "why-us"
                      ? "Why Us"
                      : "Contact"}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-200 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10">
            <ul className="px-4 py-4 space-y-4">
              {[
                "home",
                "about",
                "expertise",
                "projects",
                "tech",
                "why-us",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium transition-colors block w-full text-left py-2 hover:text-blue-400 ${
                      activeSection === item ? "text-blue-400" : "text-gray-300"
                    }`}
                  >
                    {item === "home"
                      ? "Home"
                      : item === "about"
                      ? "About Us"
                      : item === "expertise"
                      ? "Expertise"
                      : item === "projects"
                      ? "Projects"
                      : item === "tech"
                      ? "Tech Stack"
                      : item === "why-us"
                      ? "Why Us"
                      : "Contact"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <HeroSection scrollToSpecificSecion={scrollToSection} />
      {/* <section
        id="home"
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3/4 bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 blur-md"></div>
        <div className="absolute top-0 left-1/3 transform -translate-x-1/2 w-0.5 h-1/2 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 blur-sm"></div>
        <div className="absolute top-1/4 right-1/3 transform translate-x-1/2 w-0.5 h-1/2 bg-gradient-to-b from-orange-500/0 via-orange-500/20 to-orange-500/0 blur-sm"></div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your idea, our code —<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300 bg-clip-text text-transparent">
                welcome to the DevVerse.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We build scalable mobile, web, and SaaS apps — with speed,
              precision, and power.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Let's Build Together
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-transparent border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all duration-300"
              >
                Explore Work
              </button>
            </div>
          </div>

        </div>
      </section> */}
      {/* Animated dashboard mockup */}
      {/* <div className="max-w-5xl mx-auto mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-md"></div>
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-2xl">
              <div className="p-1 bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3 space-y-4">
                  <div className="h-8 w-3/4 bg-gray-800 rounded-md"></div>
                  <div className="space-y-2">
                    <div className="h-6 w-full bg-gray-800 rounded-md"></div>
                    <div className="h-6 w-full bg-gray-800 rounded-md"></div>
                    <div className="h-6 w-full bg-gray-800 rounded-md"></div>
                    <div className="h-6 w-full bg-gray-800 rounded-md"></div>
                  </div>
                  <div className="h-40 w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md border border-white/10"></div>
                </div>
                <div className="col-span-12 md:col-span-9 space-y-4">
                  <div className="h-8 w-1/4 bg-gray-800 rounded-md"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-md border border-white/10 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-blue-500/30 animate-pulse"></div>
                    </div>
                    <div className="h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-md border border-white/10 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-purple-500/30 animate-pulse delay-300"></div>
                    </div>
                    <div className="h-24 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-md border border-white/10 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-orange-500/30 animate-pulse delay-700"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-40 bg-gray-800 rounded-md border border-white/10"></div>
                    <div className="h-40 bg-gray-800 rounded-md border border-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

      {/* About Us Section */}
      <section
        id="about"
        className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              DevVerse
            </span>
          </h2>
          <h3 className="text-3xl font-bold mb-6 text-center text-white/90">
            Developer Powerhouse
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-md group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-6">
                <div className="bg-gray-900/70 rounded-lg p-4 border border-white/5 mb-4">
                  <h3 className="text-white font-medium mb-2">
                    DevVerse Collaboration Hub
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-sm text-gray-300">
                      expert developers
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 relative bg-gray-700 rounded-lg h-48 overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl">{"</>"}</div>
                    </div>
                    <div className="absolute bottom-3 right-3 flex space-x-1">
                      {["mobile", "web", "full-stack"].map((item, i) => (
                        <div
                          key={i}
                          className="bg-blue-500/20 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {["e-commerce", "healthcare"].map((domain, i) => (
                    <div
                      key={i}
                      className="bg-gray-700 rounded-lg h-24 overflow-hidden relative flex items-center justify-center"
                    >
                      <div className="text-sm font-medium text-white">
                        {domain}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  {["pharma", "IoT"].map((domain, i) => (
                    <div
                      key={i}
                      className="bg-gray-700 rounded-lg h-24 overflow-hidden relative flex items-center justify-center"
                    >
                      <div className="text-sm font-medium text-white">
                        {domain}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            <div>
              <img src="./aboutus.png"/>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Who We Are</h4>
              <p className="text-lg text-gray-300 mb-6">
                DevVerse is a developer powerhouse based in India. We specialize
                in building{" "}
                <span className="font-semibold text-blue-400">
                  mobile, web, and full-stack applications
                </span>{" "}
                — turning ideas into clean, scalable, and high-performance
                products.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our team has deep experience across{" "}
                <span className="font-semibold text-purple-400">
                  e-commerce, healthcare, pharma, and IoT
                </span>{" "}
                domains, and we're not afraid to dive into something new. We
                move fast, think deeply, and build with purpose.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🚀",
                    title: "Move Fast",
                    desc: "We believe in rapid development and iteration to deliver value quickly.",
                  },
                  {
                    icon: "🧠",
                    title: "Think Deeply",
                    desc: "We analyze problems thoroughly to build solutions that last.",
                  },
                  {
                    icon: "🎯",
                    title: "Build with Purpose",
                    desc: "Every line of code we write serves a clear objective and business goal.",
                  },
                ].map((value, i) => (
                  <div
                    key={i}
                    className="bg-gray-800/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition duration-300"
                  >
                    <div className="text-3xl mb-3">{value.icon}</div>
                    <h5 className="text-white font-medium mb-2">
                      {value.title}
                    </h5>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <OurExpertiseSection />
      

      {/* Projects Section */}
      <ProjectsSection />

      {/* Tech Stack Section */}
      <TechSection />

      {/* Why Choose Us Section */}
     <WhyChooseUsSection />

      {/* Call to Action Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="relative">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    DevVerse
                  </h1>
              </div>
              <p className="text-gray-400 mt-2">
                Your idea, our code — welcome to the DevVerse.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} DevVerse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
