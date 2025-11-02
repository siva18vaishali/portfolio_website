import React, { useState, useEffect} from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import { GraduationCap, School, BookOpen} from "lucide-react";
import { Download, Target, Heart, Code } from "lucide-react";
import DarkModeToggle from "./components/DarkModeToggle";
import Scrollspy from "react-scrollspy";  



function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'about', 'education', 'contact'];
      const scrollY = window.pageYOffset + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section) => activeSection === section;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow z-50 border-b border-white/20 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain rounded-full shadow-md"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Siva Vaishali B
          </span>
        </div>

        {/* Navigation with colored translucent capsules */}
        <nav className="hidden md:flex items-center space-x-1 p-1.5 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md rounded-full border border-white/20 dark:border-gray-700/20 shadow-lg">
          <a 
            href="#home" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('home') 
                ? 'bg-blue-500/80 dark:bg-purple-500/80 text-white font-semibold shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 dark:hover:bg-purple-500/30 hover:text-blue-700 dark:hover:text-purple-300'
            }`}
          >
            Home
          </a>
          <a 
            href="#projects" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('projects') 
                ? 'bg-blue-500/80 dark:bg-purple-500/80 text-white font-semibold shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 dark:hover:bg-purple-500/30 hover:text-blue-700 dark:hover:text-purple-300'
            }`}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('skills') 
                ? 'bg-blue-500/80 dark:bg-purple-500/80 text-white font-semibold shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 dark:hover:bg-purple-500/30 hover:text-blue-700 dark:hover:text-purple-300'
            }`}
          >
            Skills
          </a>
          <a 
            href="#about" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('about') 
                ? 'bg-blue-500/80 dark:bg-purple-500/80 text-white font-semibold shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 dark:hover:bg-purple-500/30 hover:text-blue-700 dark:hover:text-purple-300'
            }`}
          >
            About Me
          </a>
          <a 
            href="#education" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('education') 
                ? 'bg-blue-500/80 dark:bg-purple-500/80 text-white font-semibold shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 dark:hover:bg-purple-500/30 hover:text-blue-700 dark:hover:text-purple-300'
            }`}
          >
            Education
          </a>
          <a 
            href="#contact" 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isActive('contact') 
                ? 'bg-blue-500/80 dark:bg-purple-500/80 text-white font-semibold shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-blue-500/30 dark:hover:bg-purple-500/30 hover:text-blue-700 dark:hover:text-purple-300'
            }`}
          >
            Contact
          </a>
          <div className="pl-2">
            <DarkModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}



function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left p-6 gap-10">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Siva Vaishali B"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover object-center border-4 border-white dark:border-gray-700"
          />
        </div>

        {/* Intro Text + Button */}
        <div className="flex flex-col items-center md:items-start max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Siva Vaishali B</span> 👋
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I am an Information Science Engineering student with a 
            strong foundation in Java, Python, Full Stack Development, 
            and Generative AI. As an AI/ML enthusiast, I have hands-on
            experience in training and deploying machine learning 
            models to solve real-world problems.
          </p>
          {/* Buttons Row */}
          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
              text-white font-semibold rounded-full shadow-lg 
              hover:from-blue-600 hover:to-indigo-700 
              dark:hover:from-blue-400 dark:hover:to-indigo-500 
              transition duration-300 ease-in-out"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
              text-white font-semibold rounded-full shadow-lg 
              hover:from-blue-600 hover:to-indigo-700 
              dark:hover:from-blue-400 dark:hover:to-indigo-500 
              transition duration-300 ease-in-out flex items-center"
            >
              <Download className="inline w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "SignMate - AI Driven Multimodal ISL Sign Language Recognition",
      description:
        "An AI-powered application that recognizes Indian sign language gestures in real-time using MediaPipe and Support Vector Machine (SVM), with text, voice output, and multi-language translation features.",
      tech: ["Python", "MediaPipe", "SVM", "React", "Tailwind"],
      link: "#",
    },
    {
      title: "News Headline Real vs. Satire Classifier",
      description:
        "Machine learning model that classifies whether a news headline is real or satire using NLP techniques and logistic regression.",
      tech: ["Python", "Scikit-learn", "React", "Flask"],
      link: "https://github.com/siva18vaishali/news_classifier.git",
    },
    {
      title: "AI Resume Screening Tool",
      description:
        "An AI-powered tool that parses resumes, analyzes candidate qualifications against job requirements, and generates visual comparisons with a final selection verdict.",
      tech: ["Python", "Flask", "HTML", "CSS", "NLP", "Data Visualization"],
      link: "https://github.com/sinch-billava935/Resume-Screening-Tool.git",
    },
    {
      title: "RAG-based Chatbot",
      description:
        "A Retrieval-Augmented Generation (RAG) chatbot that answers domain-specific queries by combining LLMs with a vector database for context-aware responses.",
      tech: [
        "LangChain",
        "FastAPI",
        "FAISS",
        "Python",
        "TypeScript",
        "React",
        "Tailwind CSS",
      ],
      link: "https://github.com/Sasken-Chat-With-Your-Code/GenAI-Chat_With_Your_Code.git",
    },
    {
      title: "Online Examination System",
      description:
        "A web-based platform that enables students to take exams online with secure login and automated evaluation features.",
      tech: ["MySQL", "Streamlit", "HTML", "CSS"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-blue-50 to-purple-50 
      dark:from-gray-900 dark:to-gray-800 
      transition-colors duration-300 py-20"
    >
      <div className="max-w-6xl mx-auto text-center p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 
        text-gray-900 dark:text-white transition-colors duration-300">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 
              flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 
              transition transform duration-300 text-left"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-700 dark:text-gray-300 flex-1 transition-colors duration-300">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm 
                    bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 
                    dark:from-gray-700 dark:to-gray-600 dark:text-gray-200 
                    rounded-full transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 self-start px-5 py-2 
                bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                rounded-lg shadow hover:opacity-90 transition"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Skills() {
  const skills = [
    // Programming Languages
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "C", icon: "📘" },
    { name: "JavaScript", icon: "⚡" },

    // Frameworks & Libraries
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Flask", icon: "🔥" },
    { name: "Streamlit", icon: "📺" },

    // Databases & Cloud
    { name: "SQL", icon: "🗄️" },
    //{ name: "AWS", icon: "☁️" },
    { name: "Power BI", icon: "📊" },

    // AI/ML & Tools
    { name: "AI/ML", icon: "🤖" },
    { name: "Generative AI", icon: "✨" },
    { name: "MediaPipe", icon: "🖐️" },

    // Core Concepts
    { name: "Problem Solving (DSA)", icon: "🧠" },
    //{ name: "Git/GitHub", icon: "🌐" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-blue-50 py-20 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-20"
    >
      <div className="max-w-5xl mx-auto text-center p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white transition-colors duration-300">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 shadow-lg rounded-xl hover:scale-105 transition-transform text-gray-900 dark:text-gray-200 transition-colors duration-300"
            >
              <span className="text-4xl">{skill.icon}</span>
              <p className="mt-2 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6 transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white transition-colors duration-300">About Me</h2>

      <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/profile2.jpg"
            alt="About Me"
            className="rounded-2xl shadow-lg w-80 h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <p className="text-lg leading-relaxed">
            I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Siva Vaishali B</span>, 
            an enthusiastic Information Science Engineering student passionate about 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> AI, Machine Learning, and Full Stack Development</span>. 
            My goal is to leverage technology to solve meaningful real-world problems.
          </p>

          {/* Highlights with Icons */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Target className="text-blue-500 dark:text-blue-400 w-6 h-6 mt-1" />
              <span>
                <strong>Core Values:</strong> Continuous learning, innovation, collaboration, and impact-driven work.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Code className="text-purple-500 dark:text-purple-400 w-6 h-6 mt-1" />
              <span>
                <strong>Strengths:</strong> Problem-solving, teamwork, leadership, and adaptability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="text-pink-500 dark:text-pink-400 w-6 h-6 mt-1" />
              <span>
                <strong>Beyond Tech:</strong> I enjoy reading, traveling, and exploring creative design ideas.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}


function Education() {
  const timeline = [
    {
      degree: "B.E. in Information Science Engineering",
      institution: "R N S Institute of Technology",
      year: "2022 - 2026",
      details: "CGPA: 9.44",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
    },
    {
      degree: "Pre-University (PUC)",
      institution: "Deeksha C F L PU College",
      year: "2020 - 2022",
      details: "Percentage: 96.33%",
      icon: <BookOpen className="w-5 h-5 text-white" />,
    },
    {
      degree: "Grade 10",
      institution: "Rashtrotthana Vidya Kendra",
      year: "2019 - 2020",
      details: "Percentage: 94.4%",
      icon: <School className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white transition-colors duration-300">Education</h2>

      {/* Timeline wrapper */}
      <div className="relative flex gap-12 px-12 justify-center w-full max-w-6xl mx-auto">
        <div className="relative flex gap-12 px-6 min-w-[900px] mx-auto justify-center items-start">
          
          {/* Timeline line (only under cards) */}
          <div className="absolute top-[24px] left-[calc(3rem+24px)] right-[calc(3rem+24px)] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-0"></div>

          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center min-w-[250px]"
            >
              {/* Icon on timeline */}
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md flex items-center justify-center z-10"
              >
                {item.icon}
              </div>

              {/* Expanded Card */}
              <div className="mt-8 w-64 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-blue-100 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                  {item.degree}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{item.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.year}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Error occurred.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-r from-blue-50 to-purple-50 
      dark:from-gray-900 dark:to-gray-800 
      px-6 py-12 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-xl">
        Feel free to reach out for collaborations, opportunities, or just to say hi!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white dark:bg-gray-800 
        shadow-lg rounded-2xl p-8 space-y-4 
        transition-colors duration-300"
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
            rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
            rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 
            rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
          text-white font-semibold py-2 px-6 rounded-lg 
          hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          {status}
        </p>
      )}
    </section>
  );
}


function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow z-50 transition-colors duration-300 from-blue-500 to-purple-500 text-black/white py-6 mt-10 border-t border-white/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-sm">&copy; 2025 Siva Vaishali B. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* Email with tooltip */}
          <div className="relative group">
            <a href="mailto:siva04vaishali@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-2xl hover:text-gray-200 cursor-pointer" />
            </a>
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              siva04vaishali@gmail.com
            </span>
          </div>

          <a href="https://linkedin.com/in/siva-vaishali-b-39620225a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-200" />
          </a>
          <a href="https://github.com/siva18vaishali" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-200" />
          </a>
          <a href="https://instagram.com/siva18vaishali" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-gray-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}


function App() {
  return (
    <div className="pt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:text-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="pt-20">
        <Home />
        <Projects />
        <Skills />
        <AboutMe />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
