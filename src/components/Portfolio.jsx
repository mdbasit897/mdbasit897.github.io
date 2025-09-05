import React, { useState, useEffect } from 'react';

// CV Data Structure
const cvData = {
  personal: {
    name: "Md Basit Azam",
    title: "AI/ML Research Fellow",
    location: "Tezpur University, Assam, India",
    email: "mdbasit@tezu.ernet.in",
    github: "github.com/mdbasit897",
    phone: "+91-8908035600",
    orcid: "0009-0006-6538-5644"
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

// Skill Matrix Component
const SkillMatrix = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cvData.skills.map((skill, index) => (
        <div
          key={skill.name}
          className="nvidia-card"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h4 className="font-medium text-white mb-2">{skill.name}</h4>
          <div className="text-xs text-gray-400 mb-2">{skill.category}</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <div className="text-right text-xs text-gray-400 mt-1">{skill.level}%</div>
        </div>
      ))}
    </div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = ['hero', 'about', 'research', 'skills', 'publications', 'contact'];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">
              <span className="text-white">Md Basit</span>
              <span className="text-green-500 ml-2">Azam</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-green-500' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Md Basit</span>
              <span className="text-green-500 block">Azam</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI/ML Research Fellow specializing in Health Informatics & Clinical AI
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Developing cutting-edge solutions for non-invasive glucose monitoring through
              ECG signal processing and deep learning architectures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveSection('research')}
                className="nvidia-btn-primary"
              >
                Explore Research
              </button>
              <button
                onClick={() => setActiveSection('publications')}
                className="nvidia-btn-secondary"
              >
                View Publications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Research <span className="text-green-500">Focus</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cvData.research.focus.map((focus, index) => (
              <div
                key={index}
                className="nvidia-card hover:transform hover:scale-105"
              >
                <div className="text-green-500 text-sm font-semibold mb-3">
                  {focus.split(':')[0]}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {focus.split(':')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical <span className="text-green-500">Expertise</span>
          </h2>
          <SkillMatrix />
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Recent <span className="text-green-500">Publications</span>
          </h2>
          <div className="space-y-8">
            {cvData.publications.map((pub, index) => (
              <div
                key={index}
                className="nvidia-card"
              >
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {pub.status}
                  </span>
                  <span className="text-gray-400 text-sm">{pub.venue}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 leading-relaxed">
                  {pub.title}
                </h3>
                <p className="text-gray-400 mb-4">{pub.authors}</p>
                {pub.arxiv && (
                  <a
                    href={pub.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
                  >
                    View on arXiv →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            Let's <span className="text-green-500">Connect</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="nvidia-card">
              <h3 className="font-semibold text-green-500 mb-2">Email</h3>
              <p className="text-gray-300">{cvData.personal.email}</p>
            </div>
            <div className="nvidia-card">
              <h3 className="font-semibold text-green-500 mb-2">GitHub</h3>
              <p className="text-gray-300">{cvData.personal.github}</p>
            </div>
            <div className="nvidia-card">
              <h3 className="font-semibold text-green-500 mb-2">Location</h3>
              <p className="text-gray-300">Tezpur, Assam, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Md Basit Azam. Built with React & NVIDIA Design System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;