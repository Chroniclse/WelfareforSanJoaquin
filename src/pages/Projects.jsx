import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import FadedGridPattern from '../components/FadedGridPattern';
import '../styles/Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Fundraising Initiatives',
      category: 'Community Support',
      description: 'Successfully raised $8,000+ over two months through innovative fundraising campaigns and community partnerships.',
      details: 'Our fundraising efforts focused on engaging local businesses, organizing community events, and leveraging social media to reach a wide audience. The funds raised have directly supported our various community programs and research initiatives.',
      icon: '',
      color: '#2563eb',
    },
    {
      id: 2,
      title: 'Diabetes Research',
      category: 'Research',
      description: 'Authored comprehensive research papers on diabetes prevalence and prevention strategies in San Joaquin County.',
      details: 'Our research team conducted extensive studies on diabetes patterns in our local community, analyzing data and developing recommendations for prevention and management. The findings have been shared with local health organizations.',
      icon: '',
      color: '#1e40af',
    },
    {
      id: 3,
      title: 'Technology Addiction Study',
      category: 'Research',
      description: 'Published research on the consequences of technology addiction, particularly among youth in our community.',
      details: 'This research project examined the impact of excessive technology use on mental health, academic performance, and social relationships. Our findings have informed local educational programs and parent workshops.',
      icon: '',
      color: '#3b82f6',
    },
    {
      id: 4,
      title: 'Tutoring Program',
      category: 'Education',
      description: 'Provided 550+ hours of tutoring to students across various subjects, focusing on STEM education.',
      details: 'Our tutoring program pairs high-achieving STEM students with peers who need additional support. We offer one-on-one and group sessions covering mathematics, science, and technology subjects.',
      icon: '',
      color: '#60a5fa',
    },
    {
      id: 5,
      title: 'Professional Shadowing',
      category: 'Career Development',
      description: 'Organized 100+ hours of professional shadowing experiences with local STEM professionals.',
      details: 'Students have had the opportunity to shadow doctors, engineers, researchers, and other professionals, gaining valuable insights into potential career paths and real-world applications of STEM knowledge.',
      icon: '',
      color: '#93c5fd',
    },
    {
      id: 6,
      title: 'Community Meal Program',
      category: 'Community Service',
      description: 'Collaborated with local NPOs to provide 2,000 meals to homeless and food-insecure individuals.',
      details: 'Working alongside other nonprofit organizations, we organized meal distribution events, food drives, and community kitchens. This initiative has strengthened our community partnerships and provided essential support to those in need.',
      icon: '',
      color: '#bfdbfe',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <FadedGridPattern />
        <div className="container">
          <ScrollAnimation direction="up">
            <h1 className="page-title">Our Projects</h1>
            <p className="page-subtitle">
              Exploring our initiatives in research, education, and community service
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} direction="up" delay={index * 0.1}>
                <motion.div
                  className="project-card"
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => openModal(project)}
                >
                  {project.icon && (
                    <div className="project-icon" style={{ background: `${project.color}20`, color: project.color }}>
                      {project.icon}
                    </div>
                  )}
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-link">
                    Learn More →
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
            >
              <button className="modal-close" onClick={closeModal}>×</button>
              <div className="modal-header">
                {selectedProject.icon && (
                  <div className="modal-icon" style={{ background: `${selectedProject.color}20`, color: selectedProject.color }}>
                    {selectedProject.icon}
                  </div>
                )}
                <div>
                  <div className="modal-category">{selectedProject.category}</div>
                  <h2>{selectedProject.title}</h2>
                </div>
              </div>
              <div className="modal-body">
                <p className="modal-description">{selectedProject.description}</p>
                <h4>Project Details</h4>
                <p>{selectedProject.details}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;

