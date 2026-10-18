import React, { useState, useEffect } from "react";

// Custom CSS animation keyframes and global visual theme utility styles
const AnimationStyles = () => (
  <style>{`
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(1.5deg); }
    }
    @keyframes floatReverse {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(12px) rotate(-1.5deg); }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.25; transform: scale(1); }
      50% { opacity: 0.65; transform: scale(1.1); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes modalFadeIn {
      from { opacity: 0; transform: scale(0.95) translateY(12px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes cursorBlink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-cursor-blink {
      animation: cursorBlink 0.8s step-end infinite;
    }
    .animate-float { animation: floatSlow 6.5s ease-in-out infinite; }
    .animate-float-reverse { animation: floatReverse 7.5s ease-in-out infinite; }
    .animate-pulse-glow { animation: pulseGlow 5s ease-in-out infinite; }
    .animate-modal { animation: modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .bg-shimmer {
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%);
      background-size: 200% 100%;
      animation: shimmer 2.5s infinite;
    }
  `}</style>
);

const Icons = {
  Sun: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
  ),
  Moon: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  ),
  Menu: ({ className = "w-6 h-6" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  X: ({ className = "w-6 h-6" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  ChevronRight: ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
  ArrowUp: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  ),
  Github: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  Linkedin: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Mail: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  User: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  ExternalLink: ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  ),
  Code: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  Copy: ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  ),
  Check: ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  GraduationCap: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    </svg>
  ),
  Cpu: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  ),
  Database: ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3M21 5v14c0 1.66-4.03 3-9 3s-9-1.34-9-3V5"
      />
    </svg>
  ),
  Send: ({ className = "w-4 h-4" }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  ),
};

const PROFILE_DATA = {
  personal: {
    monogram: "P",
    name: "Polu",
    status: "Open for Collaborations & Research",
    roles: [
      "B.Sc Physics Student (4-Year)",
      "BS Data Science Learner (IIT Madras)",
      "Computational Science Enthusiast",
      "Frontend Developer",
    ],
    bio: "Currently pursuing a 4-Year B.Sc degree in Physics while simultaneously mastering Data Science & Applications at IIT Madras. Focused on computational mechanics, data-driven mathematical models, and interactive educational applications.",
    location: "India",
    email: "contact@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatarUrl:
      // "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      "src/assets/avter2.png",
  },

  about: {
    paragraphs: [
      "My academic background lies at the convergence of fundamental physics and computational data science. While delving deep into classical, quantum, and mathematical physics through my 4-year B.Sc Physics degree, I am actively building my analytical toolkit with statistical learning, algorithms, and data modeling from IIT Madras.",
      "In my developer workspace, I craft responsive modern web applications with React & Tailwind CSS, write automated Python scripts, and experiment with numerical simulations in physical dynamics.",
    ],
    highlights: [
      { label: "Degree Track I", value: "B.Sc Physics (4-Year Honours)" },
      {
        label: "Degree Track II",
        value: "BS Data Science & Applications (IIT Madras)",
      },
      {
        label: "Core Focus",
        value: "Scientific Computing, Data Modeling & Web Tools",
      },
    ],
  },

  skills: [
    {
      category: "Data Science & Programming",
      icon: Icons.Database,
      items: [
        { name: "Python", status: "Proficient" },
        { name: "Data Analysis & Pandas", status: "Practicing" },
        { name: "SQL & Databases", status: "Learning" },
        { name: "C / C++ Principles", status: "Proficient" },
      ],
    },
    {
      category: "Frontend Web Development",
      icon: Icons.Code,
      items: [
        { name: "HTML5 & CSS3", status: "Proficient" },
        { name: "JavaScript (ES6+)", status: "Proficient" },
        { name: "React", status: "Practicing" },
        { name: "Tailwind CSS", status: "Practicing" },
        { name: "Vite Build Tool", status: "Practicing" },
      ],
    },
    {
      category: "Scientific Computing & Tools",
      icon: Icons.Cpu,
      items: [
        { name: "Scilab / Numerical Solvers", status: "Practicing" },
        { name: "Physics Simulations", status: "Learning" },
        { name: "Microsoft Excel & Dashboards", status: "Proficient" },
        { name: "Git & GitHub", status: "Practicing" },
        { name: "Linux / Terminal", status: "Practicing" },
      ],
    },
  ],

  projects: [
    {
      id: "comp-training",
      title: "Computer Training Centre System",
      category: "Web Development",
      description:
        "A streamlined admin dashboard built for managing student enrollment, course paths, fee records, and attendance.",
      fullDescription:
        "Built with modular React components and responsive Tailwind styling. Includes stateful interactive tables, student filter views, and modal-driven record editing.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      status: "In Progress",
      github: "https://github.com",
      demo: null,
      problem:
        "Local training centers struggle with chaotic physical spreadsheets and manual attendance tracking.",
      solution:
        "Engineered a centralized web interface that organizes student timelines and fee statuses clearly.",
    },
    {
      id: "excel-platform",
      title: "Interactive Excel Learning Portal",
      category: "Data Science",
      description:
        "A web-based practice platform for spreadsheet formulas, lookup functions (VLOOKUP/XLOOKUP), and dynamic pivot logic.",
      fullDescription:
        "Interactive browser exercises allowing learners to test formulas against mock data tables with live output verification and hints.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      status: "Planned",
      github: "https://github.com",
      demo: null,
      problem:
        "Beginners often lack a real-time sandbox to practice Excel logic with immediate validation.",
      solution:
        "Created an interactive browser simulation with dynamic formula checks.",
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio & Showcase",
      category: "Web Development",
      description:
        "An Astro-Neon themed responsive developer portfolio featuring light/dark switching, typing effects, and project filters.",
      fullDescription:
        "Engineered with React + Tailwind CSS. Optimized for responsive glassmorphism, zero layout shift, smooth scroll routing, and fast load times.",
      tech: ["React", "Tailwind CSS", "Vite"],
      status: "Completed",
      github: "https://github.com",
      demo: "https://example.com",
      problem:
        "Needed a clean digital space to unify physics coursework, data science projects, and software skills.",
      solution:
        "Built a customized web platform with dark-mode default and vivid gradient highlights.",
    },
    {
      id: "physics-simulations",
      title: "Numerical Physics Laboratory",
      category: "Scientific Computing",
      description:
        "Computational experiments calculating harmonic oscillator trajectories, matrix solutions, and orbital dynamics.",
      fullDescription:
        "A collection of numerical methods and differential equation solvers written in Python and Scilab with automated graph output.",
      tech: ["Python", "Scilab", "Numerical Analysis"],
      status: "Practicing",
      github: "https://github.com",
      demo: null,
      problem:
        "Analytical differential equations in higher mechanics can be difficult to visualize continuously.",
      solution:
        "Used Python and Scilab step-solvers to generate numerical plots and motion models.",
    },
  ],

  learningJourney: [
    {
      period: "Current Track",
      title: "BS in Data Science & Applications",
      institution: "IIT Madras",
      category: "Data Science",
      status: "In Progress",
      description:
        "Foundation and diploma coursework covering Python programming, statistics, algorithms, and computational thinking.",
    },
    {
      period: "Current Track",
      title: "B.Sc Physics (4 Years)",
      institution: "State University",
      category: "Physics",
      status: "In Progress",
      description:
        "Focusing on Mathematical Methods, Classical Mechanics, Quantum Theory, Electromagnetism, and Numerical Methods.",
    },
    {
      period: "Ongoing Practice",
      title: "Modern Web Engineering",
      institution: "Self-Directed Projects",
      category: "Web Engineering",
      status: "Practicing",
      description:
        "Crafting UI tools, reactive web applications, and modular frontend architectures with React.",
    },
  ],

  education: [
    {
      degree: "BS in Data Science & Applications",
      institution: "Indian Institute of Technology Madras (IIT Madras)",
      duration: "2023 - Present (Parallel Degree)",
      details:
        "Pursuing foundational & diploma modules in Python, Data Structures, Mathematics, and Data Analysis.",
    },
    {
      degree: "B.Sc. in Physics (4-Year Degree)",
      institution: "State University",
      duration: "2023 - Present",
      details:
        "Studying Core Theoretical Physics, Classical & Quantum Mechanics, Vector Analysis, and Lab Physics.",
    },
  ],
};

const Navbar = ({ activeSection, darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-violet-500/10 border-b border-slate-200 dark:border-violet-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Monogram */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform duration-300">
              {PROFILE_DATA.personal.monogram}
            </div>
            <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-lg group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
              {PROFILE_DATA.personal.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-300 hover:bg-slate-100 dark:hover:bg-violet-950/40 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="relative p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 transition-all duration-300 group flex items-center gap-2 overflow-hidden"
              aria-label="Toggle Dark / Light Theme"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                {darkMode ? (
                  <Icons.Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
                ) : (
                  <Icons.Moon className="w-5 h-5 text-violet-600 transition-transform duration-300 group-hover:-rotate-12" />
                )}
              </div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                {darkMode ? "Light" : "Dark"}
              </span>
            </button>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-sm transition-all duration-300 shadow-md shadow-violet-600/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200"
              aria-label="Toggle Dark / Light Theme"
            >
              {darkMode ? (
                <Icons.Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Icons.Moon className="w-5 h-5 text-violet-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm"
          >
            Let's Connect
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const roles = PROFILE_DATA.personal.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative pt-12 pb-20 md:pt-28 md:pb-36 overflow-hidden"
    >
      {/* Dynamic Astro Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 dark:bg-violet-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-fuchsia-600/15 dark:bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none animate-float-reverse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-[90px] pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping"></span>
              {PROFILE_DATA.personal.status}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building, Learning & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-300 bg-clip-text text-transparent">
                Exploring Cybernetics
              </span>
            </h1>

            <div className="h-8 flex items-center justify-center lg:justify-start">
              <span className="text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 mr-2">
                I am a
              </span>
              <span className="text-base sm:text-lg font-bold text-violet-600 dark:text-violet-300 inline-flex items-center">
                {displayText}
                <span className="w-0.5 h-5 bg-fuchsia-500 dark:bg-fuchsia-400 ml-1 inline-block animate-cursor-blink" />
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {PROFILE_DATA.personal.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-violet-600/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                Explore Projects
                <Icons.ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href={PROFILE_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Icons.Github className="w-5 h-5" />
              </a>

              <a
                href={PROFILE_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Icons.Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PROFILE_DATA.personal.email}`}
                aria-label="Email Address"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Icons.Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Card Container */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group w-full max-w-sm animate-float">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 opacity-40 group-hover:opacity-80 blur-xl transition duration-700 group-hover:scale-105"></div>

              <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-2xl transition-all duration-500">
                <div className="aspect-square rounded-2xl bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group/img shadow-inner">
                  {PROFILE_DATA.personal.avatarUrl ? (
                    <img
                      src={PROFILE_DATA.personal.avatarUrl}
                      alt={PROFILE_DATA.personal.name}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 text-violet-400 flex items-center justify-center mb-4">
                        <Icons.User className="w-10 h-10" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {PROFILE_DATA.personal.name}
                      </h3>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center">
                    <span className="text-[10px] font-bold text-slate-200 tracking-wider uppercase">
                      {PROFILE_DATA.personal.name}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Focus
                    </span>
                    <span className="font-extrabold text-slate-800 dark:text-violet-300 text-xs">
                      Physics & Data
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Location
                    </span>
                    <span className="font-extrabold text-slate-800 dark:text-violet-300 text-xs">
                      {PROFILE_DATA.personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-slate-50/80 dark:bg-slate-900/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-violet-600 dark:text-violet-400 tracking-widest mb-2">
            Academic & Tech Journey
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            About Me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            {PROFILE_DATA.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-4">
            {PROFILE_DATA.about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-violet-500/40 transition-all duration-300"
              >
                <span className="text-[11px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-violet-600 dark:text-violet-400 tracking-widest mb-2">
            Technical Stack
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILE_DATA.skills.map((group, idx) => {
            const IconComponent = group.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/70 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md hover:border-violet-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80"
                    >
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full ${
                          skill.status === "Proficient"
                            ? "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/20"
                            : skill.status === "Practicing"
                              ? "bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {skill.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    "All",
    "Web Development",
    "Data Science",
    "Scientific Computing",
  ];

  const filteredProjects =
    filter === "All"
      ? PROFILE_DATA.projects
      : PROFILE_DATA.projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50/80 dark:bg-slate-900/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase font-extrabold text-violet-600 dark:text-violet-400 tracking-widest mb-2">
            Portfolio Showcase
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Featured Projects
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  filter === cat
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-600/30"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900/80 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md hover:-translate-y-1.5 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
                    {project.category}
                  </span>
                  <span
                    className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-md ${
                      project.status === "Completed"
                        ? "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
                >
                  View Details & Outcomes
                  <Icons.ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400"
                    aria-label="Repository"
                  >
                    <Icons.Github className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400"
                      aria-label="Live Demo"
                    >
                      <Icons.ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-modal">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Icons.X className="w-5 h-5" />
            </button>

            <span className="text-xs font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-400 block mb-2">
              {activeModalProject.category}
            </span>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {activeModalProject.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {activeModalProject.fullDescription}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Problem Context
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {activeModalProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Solution Approach
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {activeModalProject.solution}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center gap-2"
              >
                <Icons.Github className="w-4 h-4" /> View Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const JourneyAndEducation = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <h2 className="text-xs uppercase font-extrabold text-violet-600 dark:text-violet-400 tracking-widest mb-2">
                Progress Timeline
              </h2>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Learning Journey
              </p>
            </div>

            <div className="space-y-6 relative border-l-2 border-violet-500/20 ml-3 pl-6">
              {PROFILE_DATA.learningJourney.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-violet-600 ring-4 ring-white dark:ring-slate-950" />
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
                        {item.period}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="education">
            <div className="mb-8">
              <h2 className="text-xs uppercase font-extrabold text-violet-600 dark:text-violet-400 tracking-widest mb-2">
                Credentials
              </h2>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Education
              </p>
            </div>

            <div className="space-y-6">
              {PROFILE_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                      <Icons.GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-bold text-violet-600 dark:text-violet-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                        {edu.duration}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        type: "error",
        text: "Please complete all required fields.",
      });
      return;
    }
    setFormStatus({
      type: "success",
      text: "Thank you! Message payload prepared.",
    });
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50/80 dark:bg-slate-900/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-violet-600 dark:text-violet-400 tracking-widest mb-2">
            Communication
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Let's Connect
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-md">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Open for computational projects, web interfaces, or data science
                discussions.
              </p>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate mr-2">
                  {PROFILE_DATA.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  {copied ? (
                    <Icons.Check className="w-3.5 h-3.5" />
                  ) : (
                    <Icons.Copy className="w-3.5 h-3.5" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4"
            >
              {formStatus && (
                <div
                  className={`p-4 rounded-2xl text-xs font-bold ${
                    formStatus.type === "error"
                      ? "bg-red-500/10 text-red-600 dark:text-red-400"
                      : "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400"
                  }`}
                >
                  {formStatus.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Inquiry / Opportunity"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                  Message *
                </label>
                <textarea
                  rows="4"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2"
              >
                Send Message
                <Icons.Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white font-bold flex items-center justify-center text-sm">
            {PROFILE_DATA.personal.monogram}
          </div>
          <span className="font-bold text-slate-900 dark:text-white">
            {PROFILE_DATA.personal.name}
          </span>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {PROFILE_DATA.personal.name}. Designed &
          Built with React & Tailwind CSS.
        </p>
      </div>

      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-xl shadow-violet-600/40 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 z-40 hover:-translate-y-1"
          aria-label="Scroll to Top"
        >
          <Icons.ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme !== null) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-violet-500 selection:text-white scroll-smooth transition-colors duration-300">
      <AnimationStyles />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <JourneyAndEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
