import React, { useState, useEffect } from 'react';

// CV Data Structure
const cvData = {
  personal: {
    name: "Md Basit Azam",
    title: "AI/ML Research Fellow",
    department: "Department of Computer Science & Engineering",
    university: "Tezpur University",
    universityUrl: "https://www.tezu.ernet.in/",
    supervisor: "Dr. Sarangthem Ibotombi Singh",
    supervisorUrl: "https://agnigarh.tezu.ernet.in/~sis/index.html",
    location: "Tezpur University, Assam, India",
    email: "mdbasit@tezu.ernet.in",
    github: "github.com/mdbasit897",
    bio: "I am an AI-driven healthcare researcher working at the intersection of machine learning, physiological signal processing, and clinical innovation. My doctoral research focuses on developing non-invasive glucose monitoring systems using ECG signal analysis and deep learning—aiming to transform diabetes management through wearable, precision diagnostics."
  },
  research: {
    focus: [
      "Health Informatics: Non-invasive glucose monitoring, ECG signal processing, AI-driven diabetes detection",
      "Machine Learning: Deep learning architectures, time-series analysis, physiological signal processing",
      "Clinical AI: Medical device development, regulatory compliance (ISO 15197:2013), wearable technologies"
    ]
  },
  skills: [
    { name: 'TensorFlow', level: 95, category: 'AI/ML' },
    { name: 'PyTorch', level: 92, category: 'AI/ML' },
    { name: 'Python', level: 98, category: 'Programming' },
    { name: 'ECG Analysis', level: 90, category: 'Signal Processing' },
    { name: 'Deep Learning', level: 88, category: 'AI/ML' },
    { name: 'Computer Vision', level: 85, category: 'AI/ML' },
    { name: 'SQL', level: 87, category: 'Data' },
    { name: 'Docker', level: 80, category: 'DevOps' }
  ],
  publications: [
    {
      title: "Clinical-Grade Blood Pressure Prediction in ICU Settings: An Ensemble Framework with Uncertainty Quantification and Cross-Institutional Validation",
      authors: "Azam, M. B., & Singh, S. I.",
      venue: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM) 2025",
      status: "Submitted",
      arxiv: "http://arxiv.org/abs/2507.19530"
    },
    {
      title: "Age-Normalized HRV Features for Non-Invasive Glucose Prediction: A Pilot Sleep-Aware Machine Learning Study",
      authors: "Azam, M. B., & Singh, S. I.",
      venue: "BMC BioMedical Engineering 2025",
      status: "Submitted",
      arxiv: "https://doi.org/10.48550/arXiv.2508.11682"
    }
  ]
};

// Background images with credits
const backgroundImages = [
  {
    url: "/backgrounds/1p.jpg",
    credit: 'Image by <a href="https://pixabay.com/users/tesaphotography-947707/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=777002" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Tesa Robbins</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=777002" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Pixabay</a>'
  },
  {
    url: "/backgrounds/2p.jpg",
    credit: 'Image by <a href="https://pixabay.com/users/stevepb-282134/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=528678" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Steve Buissinne</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=528678" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Pixabay</a>'
  },
  {
    url: "/backgrounds/3p.jpg",
    credit: 'Photo by <a href="https://unsplash.com/@joa70?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Joachim Schnürle</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-medical-paper-with-a-graph-on-it-eqTmD-baDkU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Unsplash</a>'
  },
  {
    url: "/backgrounds/4p.jpg",
    credit: 'Photo by <a href="https://www.pexels.com/photo/an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr-17483874/" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Google DeepMind</a> from <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Pexels</a>'
  },
  {
    url: "/backgrounds/5p.jpg",
    credit: 'Photo by <a href="https://www.pexels.com/photo/robot-pointing-on-a-wall-8386440/" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Tara Winstead</a> from <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300">Pexels</a>'
  }
];

// Dynamic Background Component with Credits
const DynamicBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {backgroundImages.map((imageData, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentImageIndex ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${imageData.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Image Credit - positioned at bottom right */}
      <div className="absolute bottom-4 right-4 z-10">
        <div
          className="text-xs text-gray-300 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg max-w-sm border border-gray-700/50"
          dangerouslySetInnerHTML={{
            __html: backgroundImages[currentImageIndex]?.credit || ''
          }}
        />
      </div>
    </div>
  );
};

// Profile Picture Component
const ProfilePicture = () => {
  return (
    <div className="mb-8 relative">
      <div className="w-40 h-40 mx-auto relative">
        {/* Animated ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 animate-spin-slow opacity-75"></div>

        {/* Profile image container */}
        <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
          <img
            src="/images/profile/profile_pic.jpg"
            alt="Md Basit Azam"
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              // Fallback if image doesn't load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback with initials */}
          <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-4xl font-bold text-white" style={{display: 'none'}}>
            BA
          </div>
        </div>
      </div>
    </div>
  );
};

// Skill Matrix Component with enhanced animations
const SkillMatrix = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('.skill-card');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cvData.skills.map((skill, index) => (
        <div
          key={skill.name}
          data-index={index}
          className={`skill-card bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 ${
            visibleSkills.has(index.toString()) ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h4 className="font-semibold text-white mb-2 text-lg">{skill.name}</h4>
          <div className="text-sm text-green-400 mb-3 font-medium">{skill.category}</div>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
            <div
              className={`bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1500 ease-out ${
                visibleSkills.has(index.toString()) ? '' : 'w-0'
              }`}
              style={{
                width: visibleSkills.has(index.toString()) ? `${skill.level}%` : '0%',
                boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
              }}
            />
          </div>
          <div className="text-right text-sm text-gray-300 font-medium">{skill.level}%</div>
        </div>
      ))}
    </div>
  );
};

// Floating particles for background effect
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-green-500 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, setIsOpen, sections, activeSection, scrollToSection }) => {
  return (
    <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu */}
      <div className={`absolute top-16 left-4 right-4 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="space-y-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsOpen(false);
              }}
              className={`w-full text-left capitalize transition-all duration-300 px-4 py-3 rounded-lg ${
                activeSection === section 
                  ? 'text-green-500 bg-green-500/10 border border-green-500/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer for section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.1, 0.5],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe all sections
    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sections = ['hero', 'about', 'research', 'skills', 'publications', 'contact'];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">
      {/* Dynamic Background */}
      <DynamicBackground />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl flex items-center">
              <div className="w-8 h-8 rounded-full mr-3 relative overflow-hidden border-2 border-green-500">
                <img
                  src="/images/profile/profile_pic.jpg"
                  alt="Md Basit Azam"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-black text-xs font-bold" style={{display: 'none'}}>
                  BA
                </div>
              </div>
              <span className="text-white">Md Basit</span>
              <span className="text-green-500 ml-2">Azam</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-4 py-2 rounded-lg ${
                    activeSection === section 
                      ? 'text-green-500 bg-green-500/10 border border-green-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
          sections={sections}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 z-10">
        <div className="text-center max-w-5xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Picture */}
            <ProfilePicture />

            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white block">Md Basit</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 block">Azam</span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-300 mb-6 leading-relaxed font-light">
              {cvData.personal.title} | {cvData.personal.department}
            </p>

            <div className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              <a
                href={cvData.personal.universityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors duration-300 underline decoration-green-500/50 hover:decoration-green-400 font-semibold"
              >
                {cvData.personal.university}
              </a>
              {" • "}Supervised by{" "}
              <a
                href={cvData.personal.supervisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors duration-300 underline decoration-blue-500/50 hover:decoration-blue-400 font-semibold"
              >
                {cvData.personal.supervisor}
              </a>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              {cvData.personal.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('research')}
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-black font-semibold rounded-xl hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  Explore Research
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('publications')}
                className="group px-8 py-4 border-2 border-green-500 text-green-500 font-semibold rounded-xl hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  View Publications
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Me</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Position and Affiliation */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Current Position</h3>
                <p className="text-xl text-green-400 font-semibold mb-2">{cvData.personal.title}</p>
                <p className="text-lg text-gray-300 mb-3">
                  {cvData.personal.department},{" "}
                  <a
                    href={cvData.personal.universityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline decoration-blue-400/50 hover:decoration-blue-300"
                  >
                    {cvData.personal.university}
                  </a>
                </p>
                <p className="text-gray-400">
                  Supervised by{" "}
                  <a
                    href={cvData.personal.supervisorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 underline decoration-green-400/50 hover:decoration-green-300 font-medium"
                  >
                    {cvData.personal.supervisor}
                  </a>
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {cvData.personal.bio}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">2+</div>
                  <div className="text-gray-400">Years Research</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">5+</div>
                  <div className="text-gray-400">Publications</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Research Focus</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-300">Non-invasive glucose monitoring systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-300">ECG signal processing & deep learning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-300">Wearable precision diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-300">Clinical AI validation studies</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-600">
                  <h4 className="text-lg font-bold text-white mb-4">Impact Goal</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Transform diabetes management through innovative, accessible, and precise diagnostic technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section id="research" className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Focus</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cvData.research.focus.map((focus, index) => (
              <div
                key={index}
                className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-green-500 text-lg font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {focus.split(':')[0]}
                </div>
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  {focus.split(':')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Expertise</span>
          </h2>
          <SkillMatrix />
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Publications</span>
          </h2>
          <div className="space-y-8">
            {cvData.publications.map((pub, index) => (
              <div
                key={index}
                className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    {pub.status}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">{pub.venue}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-relaxed group-hover:text-green-400 transition-colors duration-300">
                  {pub.title}
                </h3>
                <p className="text-gray-400 mb-6 text-lg">{pub.authors}</p>
                {pub.arxiv && (
                  <a
                    href={pub.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-500 hover:text-blue-400 transition-all duration-300 font-semibold text-lg group"
                  >
                    View on arXiv
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-20">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Connect</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-green-500 mb-3 text-xl">Email</h3>
              <a
                href={`mailto:${cvData.personal.email}`}
                className="text-gray-300 text-lg hover:text-green-400 transition-colors duration-300"
              >
                {cvData.personal.email}
              </a>
            </div>
            <div className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-green-500 mb-3 text-xl">GitHub</h3>
              <a
                href={`https://${cvData.personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-lg hover:text-green-400 transition-colors duration-300"
              >
                {cvData.personal.github}
              </a>
            </div>
            <div className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-500 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-green-500 mb-3 text-xl">Location</h3>
              <p className="text-gray-300 text-lg">
                Department of Computer Science & Engineering.<br/>
                Tezpur University,<br/>
                Napaam - 784 028, Tezpur,<br/>
                Assam, INDIA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800/50 py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-lg">
            © 2025 Md Basit Azam.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;