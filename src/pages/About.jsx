import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import FadedGridPattern from '../components/FadedGridPattern';
import '../styles/About.css';

function About() {
  const achievements = [
    {
      year: '2023',
      title: 'Organization Founded',
      description: 'Welfare for San Joaquin was established to empower STEM students in addressing local community issues.',
    },
    {
      year: '2024',
      title: 'Major Fundraising Success',
      description: 'Raised $8,000+ in just two months through community support and innovative fundraising initiatives.',
    },
    {
      year: '2024',
      title: 'Research Publications',
      description: 'Authored 10 research papers on critical local issues including diabetes and technology addiction.',
    },
    {
      year: '2024',
      title: 'Community Impact',
      description: 'Achieved 32,000+ community interactions and provided 2,000 meals to those in need.',
    },
    {
      year: '2025',
      title: 'Expanding Our Reach',
      description: 'Continuing to grow our impact and expand our programs to serve more communities across San Joaquin County.',
    },
    {
      year: '2025',
      title: 'New Research Initiatives',
      description: 'Launching new research projects and expanding our academic publications to address emerging local challenges.',
    },
  ];

  const values = [
    {
      title: 'STEM Innovation',
      description: 'Leveraging science, technology, engineering, and mathematics to solve real-world problems.',
    },
    {
      title: 'Community First',
      description: 'Putting the needs of our local community at the forefront of everything we do.',
    },
    {
      title: 'Education & Growth',
      description: 'Providing students with opportunities to learn, grow, and make a meaningful impact.',
    },
    {
      title: 'Innovation',
      description: 'Encouraging creative thinking and innovative solutions to complex challenges.',
    },
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <FadedGridPattern />
        <div className="container">
          <ScrollAnimation direction="up">
            <h1 className="page-title">About Us</h1>
            <p className="page-subtitle">
              Empowering the next generation of STEM leaders to create positive change
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <ScrollAnimation direction="left">
              <div className="mission-vision-card">
                <h2>Our Mission</h2>
                <p>
                  Welfare for San Joaquin is a consulting organization that began in 2023, dedicated to harnessing 
                  the STEM skills of high school students to identify, research, and solve 
                  pressing local issues. We believe that young minds, when properly empowered 
                  and mentored, can drive meaningful change in their communities.
                </p>
                <p>
                  Through a combination of academic research, community engagement, fundraising, 
                  and direct service, we create opportunities for students to develop their skills 
                  while making a tangible impact on the lives of those around them.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="mission-vision-card">
                <h2>Our Vision</h2>
                <p>
                  We envision a future where every student has the opportunity to apply their 
                  academic knowledge to real-world problems, where communities benefit from 
                  innovative solutions developed by passionate young leaders, and where the 
                  gap between education and practical impact is bridged.
                </p>
                <p>
                  Our goal is to create a sustainable model of student-led community improvement 
                  that can be replicated across the nation, inspiring the next generation of 
                  changemakers.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <ScrollAnimation direction="up">
            <h2 className="section-title">Our Values</h2>
          </ScrollAnimation>
          <div className="values-grid">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} direction="up" delay={index * 0.1}>
                <motion.div
                  className="value-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <ScrollAnimation direction="up">
            <h2 className="section-title">Our Journey</h2>
          </ScrollAnimation>
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <ScrollAnimation key={achievement.title} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{achievement.year}</div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <div className="container">
          <ScrollAnimation direction="up">
            <h2 className="section-title">Our Impact</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-number">$8,000+</div>
                <div className="impact-label">Fundraised</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">32,000+</div>
                <div className="impact-label">Community Interactions</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">10</div>
                <div className="impact-label">Research Papers</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">550+</div>
                <div className="impact-label">Tutoring Hours</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">100+</div>
                <div className="impact-label">Shadowing Hours</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">2,000</div>
                <div className="impact-label">Meals Provided</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

export default About;

