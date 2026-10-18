import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUp,
  Mail,
  ExternalLink,
  Code,
  Cpu,
  Database,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  Terminal,
  GraduationCap,
  Send,
  Atom,
  CheckCircle2,
  Maximize2,
} from "lucide-react";

// Custom, robust SVG icon components for social media to avoid lucide version mismatches
const Github = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const PORTFOLIO_DATA = {
  personal: {
    name: "Satyajeet",
    initials: "S",
    tagline: "Building, Learning & Creating with Technology.",
    roles: [
      "Physics Student (4-Year B.Sc)",
      "Data Science Student @ IIT Madras",
      "Python Programmer & Data Analyst",
      "Frontend Web Developer",
      "Scientific Computing Enthusiast",
    ],
    bioShort:
      "Aspiring software developer and dual-degree student passionate about programming, data analysis, quantum mechanics, web technologies, and practical digital learning resources.",
    location: "India",
    email: "roysatyajeet11@hmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatarUrl:
      "https://github.com/Satyajeet-web-27/Portfolio/blob/main/src/assets/Avter.png?raw=true",
    // avatarUrl: "src/assets/Avter.png",
    status: "Open for Collaborations & Research",
  },

  aboutHighlights: [
    { label: "Current Focus", val: "Quantum Mechanics & ML Models" },
    { label: "Dual Education", val: "IIT Madras + 4-Year Physics B.Sc" },
    { label: "Tech Stack", val: "React, Python, Tailwind, SQL" },
    { label: "Scientific Tools", val: "Scilab, Numerical Solvers, Office365" },
  ],

  education: [
    {
      institution: "Indian Institute of Technology Madras (IITM)",
      degree: "BS in Data Science and Applications",
      period: "Ongoing",
      status: "Active Student",
      highlights: [
        "Data Structures & Algorithms in Python",
        "Database Management Systems & SQL",
        "Application Development & Machine Learning Foundations",
        "Statistical Thinking & Mathematical Modeling",
      ],
    },
    {
      institution: "Bejoy Narayan Mahavidyalaya",
      degree: "B.Sc in Physics (4 Years)",
      period: "Ongoing",
      status: "Active Student",
      highlights: [
        "Quantum Mechanics & Electrodynamics",
        "Classical Mechanics & Modern Physics",
        "Numerical Methods & Scientific Computing with Scilab",
        "Mathematical Physics & Data Analysis",
      ],
    },
  ],

  skills: {
    frontend: [
      {
        name: "React",
        level: "Practicing",
        desc: "Component architecture & modern hooks",
      },
      {
        name: "Tailwind CSS",
        level: "Proficient",
        desc: "Responsive utility styling & design systems",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Proficient",
        desc: "DOM manipulation, async logic, array methods",
      },
      {
        name: "HTML5 / CSS3",
        level: "Proficient",
        desc: "Semantic markup, flexbox/grid layouts",
      },
      {
        name: "Vite",
        level: "Proficient",
        desc: "Fast frontend build tooling",
      },
    ],
    programming: [
      {
        name: "Python",
        level: "Proficient",
        desc: "Data processing, scripting, automation",
      },
      {
        name: "SQL",
        level: "Practicing",
        desc: "Relational querying & database design",
      },
      {
        name: "C / C++ Fundamentals",
        level: "Learning",
        desc: "Memory management & basic data structures",
      },
    ],
    dataAndSci: [
      {
        name: "Microsoft Excel",
        level: "Proficient",
        desc: "Advanced formulas, lookup functions, dashboards",
      },
      {
        name: "Scilab",
        level: "Practicing",
        desc: "Numerical simulations & matrix computations",
      },
      {
        name: "MongoDB Fundamentals",
        level: "Learning",
        desc: "NoSQL document store concepts",
      },
      {
        name: "Data Visualization",
        level: "Practicing",
        desc: "Plotting & chart reporting",
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        level: "Proficient",
        desc: "Version control & repository management",
      },
      {
        name: "VS Code",
        level: "Proficient",
        desc: "Code editing & development extensions",
      },
      {
        name: "Linux Basics",
        level: "Practicing",
        desc: "Terminal commands & bash scripting",
      },
    ],
  },

  projects: [
    {
      id: "comp-center",
      title: "Computer Training Centre Management System",
      category: "Web Development",
      status: "In Progress",
      description:
        "A digital administrative system for managing student records, course enrollment, fee receipts, and attendance tracking.",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      problem:
        "Manual paper registers at training centers cause loss of student records and delay fee tracking.",
      features: [
        "Student registration dashboard",
        "Batch time management",
        "Fee receipt generator",
        "Attendance tracker",
      ],
      learningOutcome:
        "Designing database schemas and structured state management for CRUD applications.",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "excel-platform",
      title: "Excel Practice Learning Platform",
      category: "Data",
      status: "Planned",
      description:
        "Interactive web exercises for mastering VLOOKUP, XLOOKUP, Pivot Tables, and formula syntax directly in the browser.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      problem:
        "Beginners need hands-on formula validation feedback while learning spreadsheet techniques.",
      features: [
        "Step-by-step formula prompts",
        "Instant solution verifier",
        "Interactive sample data tables",
      ],
      learningOutcome:
        "Building customized interactive UI inputs and string parser evaluation algorithms.",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "personal-portfolio",
      title: "Personal Developer Portfolio",
      category: "Web Development",
      status: "Completed",
      description:
        "A modern responsive portfolio with dynamic light/dark themes, 3D interactive physics background, photo gallery, and clean navigation.",
      tech: ["React", "Vite", "Tailwind CSS", "Lucide React"],
      problem:
        "Need a personal branding platform to showcase dual academic degrees, projects, and photo highlights.",
      features: [
        "Global 3D canvas animation",
        "3D card tilt physics",
        "Persistent theme switcher",
        "Photo gallery lightbox",
      ],
      learningOutcome:
        "Deep dive into CSS 3D transforms, viewport physics, and light/dark dynamic styling.",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "python-practice",
      title: "Python Programming Practice Collection",
      category: "Python",
      status: "Practicing",
      description:
        "An organized repository of algorithm solutions, data parsing scripts, and mathematical computations.",
      tech: ["Python", "Algorithm Logic", "Git"],
      problem:
        "Building consistency in core logic and problem-solving through clean modular scripts.",
      features: [
        "Data structure exercises",
        "File I/O automation",
        "Mathematical utility scripts",
      ],
      learningOutcome:
        "Clean code design, PEP8 standards, and algorithmic thinking.",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "scientific-computing",
      title: "Physics & Scientific Computing Experiments",
      category: "Scientific Computing",
      status: "In Progress",
      description:
        "Numerical physics solvers and Scilab scripts modeling differential equations, wave equations, and matrix mechanics.",
      tech: ["Scilab", "Python", "Numerical Methods"],
      problem:
        "Analytical equations are often hard to visualize without numeric computational models.",
      features: [
        "Differential equation plotters",
        "Matrix solver utilities",
        "Wave mechanics simulations",
      ],
      learningOutcome:
        "Connecting theoretical physics equations with practical numerical solver algorithms.",
      demoUrl: "#",
      githubUrl: "#",
    },
  ],

  photos: [
    {
      id: "photo-1",
      title: "IIT Madras Academic Journey",
      category: "Academia",
      image: "image_34165f.jpg",
      caption: "Pursuing Data Science & Computational Systems.",
      date: "2024",
    },
    {
      id: "photo-2",
      title: "Physics & Computational Research",
      category: "Physics",
      image: "image_34165f.jpg",
      caption: "Exploring quantum mechanics & 3D numerical models.",
      date: "2024",
    },
    {
      id: "photo-3",
      title: "Developer & Creator Studio",
      category: "Projects",
      image: "image_34165f.jpg",
      caption: "Building Web3D graphics and full-stack software.",
      date: "2025",
    },
  ],

  learningJourney: [
    {
      topic: "Python & Data Science Fundamentals",
      category: "Data Science",
      status: "Practicing",
      date: "Ongoing",
      desc: "Mastering statistics, array computations, and database management through IIT Madras coursework.",
    },
    {
      topic: "Frontend Development with React",
      category: "Web Development",
      status: "In Progress",
      date: "Ongoing",
      desc: "Building clean UI layouts, custom React hooks, state flow, and Tailwind CSS design systems.",
    },
    {
      topic: "Quantum Mechanics & Electrodynamics",
      category: "Physics",
      status: "Learning",
      date: "Ongoing",
      desc: "Studying wave-particle duality, operator algebra, and numerical physics methods.",
    },
    {
      topic: "Advanced Excel & Data Analytics",
      category: "Data Analysis",
      status: "Practicing",
      date: "Completed Phase 1",
      desc: "Creating analytical dashboards, lookup functions, pivot reports, and data visualization exercises.",
    },
  ],
};

const Global3DCanvas = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // --- QUANTUM & DATA SCIENCE MATHEMATICAL FORMULAS ---
    const quantumFormulas = [
      "iℏ ∂Ψ/∂t = ĤΨ", // Time-dependent Schrödinger Equation
      "Ĥ = - (ℏ²/2m)∇² + V(r)", // Hamiltonian Operator
      "P(r) = |Ψ(r,t)|²", // Born Rule / Probability Density
      "∇²Ψ + (2m/ℏ²)(E - V)Ψ = 0", // Time-independent Schrödinger
      "P_hat = -iℏ∇", // Momentum Operator
      "E_n = (n² π² ℏ²) / (2mL²)", // Particle in a box energy levels
      "y = σ(W^T X + b)", // Data Science Neural Activation
      "L(θ) = -Σ y log(y_hat)", // Loss function
      "Cov(X,Y) = E[(X-μ_X)(Y-μ_Y)]", // Covariance Matrix
      "SVD: A = U Σ V^T", // Matrix Factorization
      "|Ψ⟩ = α|0⟩ + β|1⟩", // Qubit State Vector
      "F = m(d²r/dt²)", // Classical Equation
    ];

    // Create 3D Formula Nodes
    const formulaNodes = quantumFormulas.map((text, i) => ({
      text,
      x: (Math.random() - 0.5) * width * 1.4,
      y: (Math.random() - 0.5) * height * 1.4,
      z: Math.random() * 600 + 50,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: (Math.random() - 0.5) * 0.3,
      isSchrodinger:
        text.includes("Schrödinger") ||
        text.includes("iℏ") ||
        text.includes("Ĥ"),
      fontSize: text.includes("iℏ") ? 18 : 14,
    }));

    // Data Science Tensor Graph Nodes
    const dataNodeCount = Math.min(Math.floor(width / 40), 30);
    const dataNodes = Array.from({ length: dataNodeCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      z: Math.random() * 600 + 50,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1.5,
      type: Math.random() > 0.5 ? "quantum" : "data",
    }));

    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX - width / 2) * 0.2;
      mouse.targetY = (e.clientY - height / 2) * 0.2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const fov = 420;
      const centerX = width / 2;
      const centerY = height / 2;

      // 1. RENDER SCHRÖDINGER QUANTUM WAVE ENVELOPE |Ψ(x,t)|²
      ctx.beginPath();
      const waveCenterY = centerY + Math.sin(time * 0.4) * 60 + mouse.y * 0.08;
      for (let x = 0; x < width; x += 10) {
        // Gaussian Wave Packet * Quantum Oscillation
        const normX = (x - centerX) / (width * 0.25);
        const gaussian = Math.exp(-normX * normX);
        const quantumOsc =
          Math.cos(x * 0.02 - time * 2) * Math.sin(x * 0.008 + time);
        const py = waveCenterY + gaussian * quantumOsc * 75;

        if (x === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      }
      ctx.strokeStyle = darkMode
        ? "rgba(56, 189, 248, 0.25)"
        : "rgba(79, 70, 229, 0.18)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // 2. RENDER 3D FLOATING QUANTUM EQUATIONS
      for (let i = 0; i < formulaNodes.length; i++) {
        const fn = formulaNodes[i];

        fn.x += fn.vx;
        fn.y += fn.vy;
        fn.z += fn.vz;

        if (fn.z <= 20) fn.z = 650;
        if (fn.z > 650) fn.z = 20;

        const rx = fn.x - mouse.x * 0.9;
        const ry = fn.y - mouse.y * 0.9;

        const scale = fov / (fov + fn.z);
        const projX = rx * scale + centerX;
        const projY = ry * scale + centerY;

        if (
          projX >= -100 &&
          projX <= width + 100 &&
          projY >= -50 &&
          projY <= height + 50
        ) {
          const alpha = (1 - fn.z / 650) * (darkMode ? 0.75 : 0.5);
          const scaledFont = Math.max(
            10,
            Math.floor(fn.fontSize * scale * 1.3),
          );

          ctx.font = `${fn.isSchrodinger ? "bold " : ""}${scaledFont}px "Fira Code", monospace`;

          if (fn.isSchrodinger) {
            ctx.fillStyle = darkMode
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(14, 165, 233, ${alpha})`;
            // Glowing effect for Schrödinger Equation
            ctx.shadowColor = darkMode ? "#38bdf8" : "#0ea5e9";
            ctx.shadowBlur = 8 * scale;
          } else {
            ctx.fillStyle = darkMode
              ? `rgba(192, 132, 252, ${alpha})`
              : `rgba(124, 58, 237, ${alpha})`;
            ctx.shadowBlur = 0;
          }

          ctx.fillText(fn.text, projX, projY);
          ctx.shadowBlur = 0; // Reset shadow blur
        }
      }

      // 3. RENDER DATA SCIENCE NODES & TENSOR GRAPH EDGES
      const projectedData = [];

      for (let i = 0; i < dataNodes.length; i++) {
        const p = dataNodes[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.z <= 10) p.z = 650;
        if (p.z > 650) p.z = 10;

        const rx = p.x - mouse.x;
        const ry = p.y - mouse.y;

        const scale = fov / (fov + p.z);
        const projX = rx * scale + centerX;
        const projY = ry * scale + centerY;

        projectedData.push({ x: projX, y: projY, scale, z: p.z, type: p.type });

        if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
          const alpha = (1 - p.z / 650) * (darkMode ? 0.4 : 0.25);
          ctx.beginPath();
          ctx.arc(projX, projY, p.size * scale * 1.5, 0, Math.PI * 2);
          ctx.fillStyle =
            p.type === "quantum"
              ? darkMode
                ? `rgba(56, 189, 248, ${alpha})`
                : `rgba(79, 70, 229, ${alpha})`
              : darkMode
                ? `rgba(168, 85, 247, ${alpha})`
                : `rgba(147, 51, 234, ${alpha})`;
          ctx.fill();
        }
      }

      // Connect Neural / Data Network Topology Edges
      for (let i = 0; i < projectedData.length; i++) {
        for (let j = i + 1; j < projectedData.length; j++) {
          const p1 = projectedData[i];
          const p2 = projectedData[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha =
              (1 - dist / 110) *
              (darkMode ? 0.12 : 0.06) *
              Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = darkMode
              ? `rgba(129, 140, 248, ${alpha})`
              : `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  );
  const [glare, setGlare] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
    );
    setGlare({
      opacity: 0.15,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
    setGlare({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};

export default function App() {
  // Theme State with LocalStorage Persistence
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("Satyajeet_portfolio_theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePhotoModal, setActivePhotoModal] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem(
      "Satyajeet_portfolio_theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  // Typewriter setup for Hero text
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PORTFOLIO_DATA.personal.roles;
    const currentFullText = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayedText(
            currentFullText.substring(0, displayedText.length + 1),
          );
          if (displayedText === currentFullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayedText(
            currentFullText.substring(0, displayedText.length - 1),
          );
          if (displayedText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 30 : 70,
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Escape key listener for modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setActivePhotoModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Section Observer for Nav highlight
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "education",
      "skills",
      "projects",
      "photos",
      "journey",
      "contact",
    ];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return PORTFOLIO_DATA.projects;
    return PORTFOLIO_DATA.projects.filter(
      (p) => p.category.toLowerCase() === activeTab.toLowerCase(),
    );
  }, [activeTab]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Photos", href: "#photos" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`scroll-smooth min-h-screen font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300 ${
        darkMode ? "bg-[#070814] text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* 3D Dynamic Background Canvas */}
      <Global3DCanvas darkMode={darkMode} />

      {/* STICKY TOP NAVBAR */}
      <header
        className={`sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-300 ${
          darkMode
            ? "bg-[#070814]/80 border-indigo-500/20"
            : "bg-white/80 border-slate-200 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div
                className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 ${
                  darkMode ? "bg-[#090b1e]" : "bg-white"
                }`}
              >
                {PORTFOLIO_DATA.personal.initials}
              </div>
            </div>
            <div>
              <span
                className={`font-bold tracking-tight transition-colors ${
                  darkMode
                    ? "text-white group-hover:text-cyan-400"
                    : "text-slate-900 group-hover:text-indigo-600"
                }`}
              >
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="block text-[10px] text-indigo-500 font-mono tracking-wider uppercase">
                Dual Degree Student
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md ${
              darkMode
                ? "bg-indigo-950/30 border-indigo-500/20"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            {navLinks.map((link) => {
              const secId = link.href.replace("#", "");
              const isActive = activeSection === secId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30 font-semibold"
                      : darkMode
                        ? "text-slate-300 hover:text-white hover:bg-white/5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-black/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* LIGHT / DARK MODE TOGGLE BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 ${
                darkMode
                  ? "bg-indigo-950/40 border-indigo-500/30 text-amber-300 hover:bg-indigo-900/60"
                  : "bg-white border-slate-200 text-indigo-600 shadow-sm hover:bg-slate-100"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl border ${
                darkMode
                  ? "bg-indigo-950/40 border-indigo-500/20 text-slate-300"
                  : "bg-white border-slate-200 text-slate-700"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden px-4 pt-2 pb-6 border-b backdrop-blur-2xl ${
              darkMode
                ? "bg-[#090b1e]/95 border-indigo-500/20"
                : "bg-white/95 border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    darkMode
                      ? "text-slate-200 hover:bg-indigo-600/20 hover:text-cyan-300"
                      : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* MAIN SINGLE-PAGE CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-28">
        {/* 1. HERO SECTION */}
        <section
          id="hero"
          className="pt-8 sm:pt-16 pb-6 min-h-[85vh] flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono backdrop-blur-md shadow-lg ${
                  darkMode
                    ? "bg-indigo-950/60 border-indigo-500/30 text-indigo-300 shadow-indigo-500/10"
                    : "bg-indigo-50 border-indigo-200 text-indigo-700"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>{PORTFOLIO_DATA.personal.status}</span>
              </div>

              <div className="space-y-3">
                <h1
                  className={`text-4xl sm:text-6xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Hello, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                    {PORTFOLIO_DATA.personal.name}
                  </span>
                </h1>

                {/* Animated Typewriter text without box */}
                <div
                  className={`text-lg sm:text-2xl font-mono flex items-center gap-1 min-h-[2rem] ${
                    darkMode ? "text-cyan-300" : "text-indigo-600 font-semibold"
                  }`}
                >
                  <span>{displayedText}</span>
                  <span
                    className={`w-2 h-6 inline-block animate-[pulse_0.8s_infinite] ${
                      darkMode ? "bg-cyan-400" : "bg-indigo-600"
                    }`}
                  />
                </div>
              </div>

              <p
                className={`text-base sm:text-lg max-w-2xl leading-relaxed font-light ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {PORTFOLIO_DATA.personal.bioShort}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
                >
                  Explore Projects <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className={`px-6 py-3 rounded-xl border text-sm font-medium backdrop-blur-md transition-all flex items-center gap-2 ${
                    darkMode
                      ? "bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-200 border-indigo-500/30"
                      : "bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-sm"
                  }`}
                >
                  Get in Touch <Mail className="w-4 h-4 text-indigo-500" />
                </a>
              </div>

              {/* Quick Metadata highlights */}
              <div
                className={`pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t ${
                  darkMode ? "border-indigo-500/20" : "border-slate-200"
                }`}
              >
                {PORTFOLIO_DATA.aboutHighlights.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-[11px] font-mono text-indigo-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p
                      className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      {item.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 3D Photo Frame Card */}
            <div className="lg:col-span-5 flex justify-center">
              <TiltCard
                className={`w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b border shadow-2xl backdrop-blur-2xl ${
                  darkMode
                    ? "from-indigo-500/30 via-purple-500/20 to-cyan-500/30 border-indigo-500/30"
                    : "from-indigo-200 via-purple-100 to-cyan-200 border-slate-200"
                }`}
              >
                <div
                  className={`relative rounded-[23px] p-6 text-center space-y-6 ${
                    darkMode ? "bg-[#090b1e]/90" : "bg-white/90"
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative mx-auto w-44 h-44 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 shadow-xl overflow-hidden">
                    <img
                      src={PORTFOLIO_DATA.personal.avatarUrl}
                      alt={PORTFOLIO_DATA.personal.name}
                      className="w-full h-full object-cover object-[center_top] rounded-xl transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
                      }}
                    />
                  </div>

                  <div className="space-y-1">
                    <h3
                      className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                      {PORTFOLIO_DATA.personal.name}
                    </h3>
                    <p className="text-xs text-indigo-500 font-mono font-medium">
                      B.Sc Physics + BS Data Science (IITM)
                    </p>
                  </div>

                  {/* Social links bar */}
                  <div className="pt-2 flex items-center justify-center gap-3">
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2.5 rounded-xl border transition-all ${
                        darkMode
                          ? "bg-indigo-950/60 border-indigo-500/30 text-indigo-300 hover:text-white"
                          : "bg-slate-100 border-slate-200 text-slate-700 hover:text-indigo-600"
                      }`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={PORTFOLIO_DATA.personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2.5 rounded-xl border transition-all ${
                        darkMode
                          ? "bg-indigo-950/60 border-indigo-500/30 text-indigo-300 hover:text-white"
                          : "bg-slate-100 border-slate-200 text-slate-700 hover:text-indigo-600"
                      }`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-mono ${
                        darkMode
                          ? "bg-indigo-950/60 border-indigo-500/30 text-indigo-300 hover:text-white"
                          : "bg-slate-100 border-slate-200 text-slate-700 hover:text-indigo-600"
                      }`}
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* 2. ABOUT ME SECTION */}
        <section id="about" className="scroll-mt-24 space-y-8">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4 ${
              darkMode ? "border-indigo-500/20" : "border-slate-200"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
                // Background & Motivation
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                About Me
              </h2>
            </div>
            <p
              className={`text-sm max-w-md ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Bridging mathematical physics with data algorithms and frontend UI
              platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TiltCard
              className={`p-6 rounded-2xl border backdrop-blur-md space-y-3 ${
                darkMode
                  ? "bg-indigo-950/30 border-indigo-500/20"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-500">
                <Atom className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Physics & Numerics
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                Pursuing a 4-year B.Sc degree centered on Quantum Mechanics,
                Mathematical Physics, and Scilab differential numerical models.
              </p>
            </TiltCard>

            <TiltCard
              className={`p-6 rounded-2xl border backdrop-blur-md space-y-3 ${
                darkMode
                  ? "bg-indigo-950/30 border-indigo-500/20"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
                <Database className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Data Science @ IITM
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                Studying Data Structures, SQL Database Management, Statistics,
                and Python scripting through the online BS program at IIT
                Madras.
              </p>
            </TiltCard>

            <TiltCard
              className={`p-6 rounded-2xl border backdrop-blur-md space-y-3 ${
                darkMode
                  ? "bg-indigo-950/30 border-indigo-500/20"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-500">
                <Code className="w-5 h-5" />
              </div>
              <h3
                className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Frontend & Web Apps
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                Developing responsive component-based React web platforms,
                management portals, and practice applications styled with
                Tailwind CSS.
              </p>
            </TiltCard>
          </div>
        </section>

        {/* 3. EDUCATION SECTION */}
        <section id="education" className="scroll-mt-24 space-y-8">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4 ${
              darkMode ? "border-indigo-500/20" : "border-slate-200"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
                // Academic Background
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Dual Academic Pursuits
              </h2>
            </div>
            <p
              className={`text-sm max-w-md ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Simultaneous study in computer science fundamentals and
              foundational physical sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <TiltCard
                key={idx}
                className={`p-6 rounded-2xl border backdrop-blur-md space-y-5 ${
                  darkMode
                    ? "bg-gradient-to-br from-indigo-950/50 via-[#0a0d24]/80 to-purple-950/30 border-indigo-500/25"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 font-semibold text-[11px] font-mono border border-indigo-500/20">
                      {edu.status}
                    </span>
                    <h3
                      className={`text-xl font-bold mt-2 ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-indigo-500 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <GraduationCap className="w-8 h-8 text-indigo-500 flex-shrink-0" />
                </div>

                <ul
                  className={`space-y-2 border-t pt-4 ${darkMode ? "border-indigo-500/20" : "border-slate-200"}`}
                >
                  {edu.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className={`flex items-center gap-2 text-xs sm:text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* 4. SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4 ${
              darkMode ? "border-indigo-500/20" : "border-slate-200"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
                // Technical Toolbox
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Skills & Technologies
              </h2>
            </div>
            <p
              className={`text-sm max-w-md ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Honest proficiency indicators across software development, data
              analysis, and physics toolsets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Skills */}
            <div
              className={`space-y-4 p-5 rounded-2xl border ${
                darkMode
                  ? "bg-indigo-950/30 border-indigo-500/20"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <h3 className="text-sm font-bold text-cyan-500 font-mono uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-500" /> Frontend
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_DATA.skills.frontend.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span
                        className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                      >
                        {s.name}
                      </span>
                      <span className="text-indigo-500 font-mono text-[10px]">
                        {s.level}
                      </span>
                    </div>
                    <p
                      className={`text-[11px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Skills */}
            <div
              className={`space-y-4 p-5 rounded-2xl border ${
                darkMode
                  ? "bg-indigo-950/30 border-indigo-500/20"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <h3 className="text-sm font-bold text-indigo-500 font-mono uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-500" /> Programming
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_DATA.skills.programming.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span
                        className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                      >
                        {s.name}
                      </span>
                      <span className="text-indigo-500 font-mono text-[10px]">
                        {s.level}
                      </span>
                    </div>
                    <p
                      className={`text-[11px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data & Physics */}
            <div
              className={`space-y-4 p-5 rounded-2xl border ${
                darkMode
                  ? "bg-indigo-950/30 border-indigo-500/20"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <h3 className="text-sm font-bold text-purple-500 font-mono uppercase tracking-wider flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-500" /> Data & Physics
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_DATA.skills.dataAndSci.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span
                        className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                      >
                        {s.name}
                      </span>
                      <span className="text-indigo-500 font-mono text-[10px]">
                        {s.level}
                      </span>
                    </div>
                    <p
                      className={`text-[11px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div
              className={`space-y-4 p-5 rounded-2xl border ${
                darkMode
                  ? "bg-indigo-950/30 border-indigo-500/20"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <h3 className="text-sm font-bold text-emerald-500 font-mono uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-500" /> Tools & Environment
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_DATA.skills.tools.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span
                        className={`font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                      >
                        {s.name}
                      </span>
                      <span className="text-indigo-500 font-mono text-[10px]">
                        {s.level}
                      </span>
                    </div>
                    <p
                      className={`text-[11px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. FEATURED PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4 ${
              darkMode ? "border-indigo-500/20" : "border-slate-200"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
                // Crafted Work
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Featured Projects
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                "all",
                "Web Development",
                "Python",
                "Data",
                "Scientific Computing",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab.toLowerCase() === cat.toLowerCase()
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30"
                      : darkMode
                        ? "bg-indigo-950/40 text-slate-400 hover:text-white border border-indigo-500/20"
                        : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cat === "all" ? "All Projects" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <TiltCard
                key={proj.id}
                className={`p-6 rounded-2xl border backdrop-blur-md flex flex-col justify-between space-y-4 group ${
                  darkMode
                    ? "bg-gradient-to-b from-indigo-950/50 via-[#080a1c]/80 to-purple-950/30 border-indigo-500/25"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-500 text-[10px] font-mono border border-cyan-500/20 font-semibold">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono text-indigo-500">
                      {proj.status}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold transition-colors ${
                      darkMode
                        ? "text-white group-hover:text-cyan-300"
                        : "text-slate-900 group-hover:text-indigo-600"
                    }`}
                  >
                    {proj.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {proj.description}
                  </p>
                </div>

                <div
                  className={`space-y-4 pt-4 border-t ${darkMode ? "border-indigo-500/20" : "border-slate-200"}`}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2 py-0.5 rounded text-[10px] border font-mono ${
                          darkMode
                            ? "bg-indigo-950/80 text-indigo-300 border-indigo-500/20"
                            : "bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className={`w-full py-2.5 rounded-xl border text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                      darkMode
                        ? "bg-indigo-950/60 hover:bg-indigo-900/60 border-indigo-500/30 text-indigo-200"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                    }`}
                  >
                    View Project Details{" "}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* 6. PHOTO GALLERY SECTION */}
        <section id="photos" className="scroll-mt-24 space-y-8">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4 ${
              darkMode ? "border-indigo-500/20" : "border-slate-200"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
                // Captured Moments
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Photo Highlights
              </h2>
            </div>
            <p
              className={`text-sm max-w-md ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Visual snapshots from academic research, computational modeling,
              and developer activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.photos.map((photo) => (
              <TiltCard
                key={photo.id}
                className={`group p-3 rounded-2xl border backdrop-blur-md space-y-3 cursor-pointer ${
                  darkMode
                    ? "bg-indigo-950/30 border-indigo-500/20"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div
                  onClick={() => setActivePhotoModal(photo)}
                  className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-indigo-500/20"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover object-[center_top] transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> Click to view full image
                    </span>
                  </div>
                </div>

                <div className="px-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-indigo-500 font-semibold">
                      {photo.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {photo.date}
                    </span>
                  </div>
                  <h3
                    className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    {photo.title}
                  </h3>
                  <p
                    className={`text-xs line-clamp-1 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {photo.caption}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* 7. LEARNING JOURNEY TIMELINE SECTION */}
        <section id="journey" className="scroll-mt-24 space-y-8">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4 ${
              darkMode ? "border-indigo-500/20" : "border-slate-200"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
                // Milestones & Evolution
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Learning Journey
              </h2>
            </div>
            <p
              className={`text-sm max-w-md ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              A continuous timeline documenting personal skill progression and
              focus topics.
            </p>
          </div>

          <div className="relative border-l border-indigo-500/30 ml-4 md:ml-8 space-y-8 pl-6 md:pl-8">
            {PORTFOLIO_DATA.learningJourney.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] md:-left-[39px] top-1 w-5 h-5 rounded-full border-2 border-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform ${
                    darkMode ? "bg-[#070814]" : "bg-white"
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                </div>

                <div
                  className={`p-5 rounded-2xl border backdrop-blur-md space-y-2 ${
                    darkMode
                      ? "bg-indigo-950/30 border-indigo-500/20"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-indigo-500 font-semibold">
                      {item.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        darkMode
                          ? "bg-indigo-950 border-indigo-500/20 text-indigo-300"
                          : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      {item.status} ({item.date})
                    </span>
                  </div>

                  <h3
                    className={`text-base font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    {item.topic}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4 ${
              darkMode ? "border-indigo-500/20" : "border-slate-200"
            }`}
          >
            <div>
              <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">
                // Reach Out
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold mt-1 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Contact Console
              </h2>
            </div>
            <p
              className={`text-sm max-w-md ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              Send a direct message or connect via professional network links.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Info Box */}
            <div className="lg:col-span-5 space-y-6">
              <TiltCard
                className={`p-6 rounded-2xl border backdrop-blur-md space-y-6 ${
                  darkMode
                    ? "bg-indigo-950/40 border-indigo-500/25"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Let's Connect
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  Whether you are interested in discussing scientific
                  computation, web development projects, or academic insights,
                  my inbox is open.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-indigo-500 font-mono">
                        DIRECT EMAIL
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-500">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-indigo-500 font-mono">
                        ACADEMIC INSTITUTION
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        IIT Madras + Physics Dept
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex gap-3 ${darkMode ? "border-indigo-500/20" : "border-slate-200"}`}
                >
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copiedEmail ? "Copied Email!" : "Copy Email"}
                  </button>
                </div>
              </TiltCard>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Message simulation recorded! Thank you for contacting Satyajeet.",
                  );
                }}
                className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md space-y-4 ${
                  darkMode
                    ? "bg-indigo-950/40 border-indigo-500/25"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      className={`text-xs font-mono ${darkMode ? "text-indigo-300" : "text-slate-600"}`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors ${
                        darkMode
                          ? "bg-[#090b1e] border-indigo-500/30 text-slate-100"
                          : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      className={`text-xs font-mono ${darkMode ? "text-indigo-300" : "text-slate-600"}`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors ${
                        darkMode
                          ? "bg-[#090b1e] border-indigo-500/30 text-slate-100"
                          : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    className={`text-xs font-mono ${darkMode ? "text-indigo-300" : "text-slate-600"}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Academic Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors ${
                      darkMode
                        ? "bg-[#090b1e] border-indigo-500/30 text-slate-100"
                        : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className={`text-xs font-mono ${darkMode ? "text-indigo-300" : "text-slate-600"}`}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Satyajeet..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-indigo-500 transition-colors resize-none ${
                      darkMode
                        ? "bg-[#090b1e] border-indigo-500/30 text-slate-100"
                        : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-medium text-xs hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className={`relative z-10 border-t py-8 mt-20 ${
          darkMode
            ? "border-indigo-500/20 bg-[#060712]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className={`text-xs font-mono ${darkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All
            rights reserved.
          </p>
          <p className="text-xs text-indigo-500 font-mono">
            Physics Student + BS Data Science @ IIT Madras
          </p>
        </div>
      </footer>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 cursor-pointer right-6 z-40 p-3 rounded-2xl border backdrop-blur-xl shadow-xl transition-all duration-300 flex items-center justify-center group ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        } ${
          darkMode
            ? "bg-indigo-950/80 border-indigo-500/40 text-cyan-300 hover:bg-indigo-900 shadow-indigo-500/20 hover:scale-110 active:scale-95"
            : "bg-white/90 border-indigo-300 text-indigo-600 hover:bg-indigo-50 shadow-slate-300/50 hover:scale-110 active:scale-95"
        }`}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className={`relative w-full max-w-xl border rounded-2xl p-6 space-y-5 shadow-2xl ${
              darkMode
                ? "bg-[#0a0d24] border-indigo-500/30"
                : "bg-white border-slate-200 text-slate-800"
            }`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-4 right-4 p-1.5 rounded-lg border ${
                darkMode
                  ? "text-slate-400 hover:text-white bg-indigo-950/80 border-indigo-500/30"
                  : "text-slate-500 hover:text-slate-900 bg-slate-100 border-slate-200"
              }`}
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-500 font-mono text-[10px] font-semibold">
                {selectedProject.category}
              </span>
              <h3
                className={`text-xl font-bold mt-2 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {selectedProject.title}
              </h3>
            </div>

            <div
              className={`space-y-3 text-xs ${darkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              <div>
                <p className="font-mono text-indigo-500 uppercase text-[10px]">
                  Problem Statement
                </p>
                <p className="mt-0.5">{selectedProject.problem}</p>
              </div>

              <div>
                <p className="font-mono text-indigo-500 uppercase text-[10px]">
                  Key Features
                </p>
                <ul className="mt-1 space-y-1 list-disc list-inside">
                  {selectedProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-indigo-500 uppercase text-[10px]">
                  Learning Outcome
                </p>
                <p className="mt-0.5">{selectedProject.learningOutcome}</p>
              </div>
            </div>

            <div
              className={`pt-4 border-t flex gap-3 ${darkMode ? "border-indigo-500/20" : "border-slate-200"}`}
            >
              <a
                href={selectedProject.demoUrl}
                className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs text-center transition-colors"
              >
                Live Demo Placeholder
              </a>
              <a
                href={selectedProject.githubUrl}
                className={`flex-1 py-2 rounded-xl border font-medium text-xs text-center transition-colors ${
                  darkMode
                    ? "bg-indigo-950 border-indigo-500/30 text-indigo-300 hover:text-white"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PHOTO LIGHTBOX MODAL */}
      {activePhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div
            className={`relative w-full max-w-3xl border rounded-2xl p-6 space-y-4 shadow-2xl overflow-hidden ${
              darkMode
                ? "bg-[#0a0d24] border-indigo-500/30"
                : "bg-white border-slate-200"
            }`}
          >
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 z-10 p-1.5 text-slate-400 hover:text-white bg-black/60 rounded-lg border border-indigo-500/30"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-indigo-500/20">
              <img
                src={activePhotoModal.image}
                alt={activePhotoModal.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-indigo-500 font-semibold">
                  {activePhotoModal.category} • {activePhotoModal.date}
                </span>
                <h3
                  className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {activePhotoModal.title}
                </h3>
                <p
                  className={`text-xs mt-1 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  {activePhotoModal.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
