import { motion } from 'framer-motion';
import StatsCard from '../components/StatsCard';
import FadedGridPattern from '../components/FadedGridPattern';
import CursorInteractions from '../components/CursorInteractions';
import ScrollAnimation from '../components/ScrollAnimation';
import { stats } from '../data/stats';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <CursorInteractions />
      {/* Hero Section */}
      <section className="hero">
        <FadedGridPattern />
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welfare for San Joaquin
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering STEM students to solve local issues and make a difference in our community
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#stats" className="btn btn-primary">
              Our Impact
            </a>
            <a href="/projects" className="btn btn-secondary">
              View Projects
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="container">
          <ScrollAnimation direction="up">
            <h2 className="section-title">Our Impact</h2>
            <p className="section-subtitle">
              Making a difference through STEM innovation and community engagement
            </p>
          </ScrollAnimation>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <ScrollAnimation key={stat.label} direction="up" delay={index * 0.1}>
                <StatsCard
                  label={stat.label}
                  value={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <ScrollAnimation direction="left">
              <div className="mission-text">
                <h2>Our Mission</h2>
                <p>
                  We are a consulting organization that harnesses the power of high schoolers' 
                  STEM skills to address and solve pressing local issues. Through research, 
                  innovation, and community engagement, we create meaningful change in San Joaquin County.
                </p>
                <p>
                  Our work spans from fundraising and community outreach to academic research 
                  and direct service, all while providing students with valuable experience 
                  and mentorship opportunities.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="mission-highlights">
                <div className="highlight-card">
                  <h3>Research</h3>
                  <p>10 papers authored on critical local issues</p>
                </div>
                <div className="highlight-card">
                  <h3>Education</h3>
                  <p>550+ hours of tutoring and mentorship</p>
                </div>
                <div className="highlight-card">
                  <h3>Community</h3>
                  <p>32,000+ interactions and 2,000 meals provided</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollAnimation direction="up">
            <div className="cta-content">
              <h2>Join Us in Making a Difference</h2>
              <p>Get involved with Welfare for San Joaquin and help us create positive change</p>
              <a href="/contact" className="btn btn-primary btn-large">
                Get Involved
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

export default Home;

