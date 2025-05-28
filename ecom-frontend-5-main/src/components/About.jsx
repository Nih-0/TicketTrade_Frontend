import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaInstagram, FaLinkedin, FaTicketAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const developers = [
    {
      name: 'Nihal Yadav',
      role: 'Backend Developer',
      img: '/assets/nihal.JPG', // Make sure this is in your public folder
      github: 'https://github.com/Nih-0',
      instagram: 'https://www.instagram.com/not__nihal_?igsh=MTc3aWl0ZXQwMmQ2aw==',
      linkedin: 'https://www.linkedin.com/in/nihal-yadav-',
    },
    {
      name: 'Saumy Mishra',
      role: 'Frontend Developer',
      img: 'saumy.jpg', // Make sure this is in your public folder
      github: 'https://github.com/saumymishra',
      instagram: 'https://instagram.com/saumymishra',
      linkedin: 'https://linkedin.com/in/saumymishra',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="container my-5">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.h2 
          className="text-center mb-4 display-4 fw-bold text-gradient"
          variants={fadeIn}
          style={{
            background: 'linear-gradient(45deg, #3a7bd5, #00d2ff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          About the Team
        </motion.h2>

        <motion.div 
          className="d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-4 my-4"
          variants={fadeIn}
        >
          {developers.map((dev, idx) => (
            <motion.div
              key={idx}
              className="card p-3 text-center border-0 developer-card"
              style={{
                width: '280px',
                borderRadius: '15px',
                background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                y: -5,
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
              }}
            >
              <div className="position-relative">
                <div className="mx-auto" style={{ width: '120px', height: '120px', position: 'relative' }}>
                  <img
                    src={dev.img}
                    alt={dev.name}
                    className="rounded-circle border border-4 border-white shadow"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderColor: '#3a7bd5 !important'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${dev.name.split(' ').join('+')}&background=3a7bd5&color=fff&size=120`;
                    }}
                  />
                </div>
                <div 
                  className="mt-2 bg-primary text-white px-2 py-1 rounded-pill d-inline-block"
                  style={{ fontSize: '0.8rem' }}
                >
                  {dev.role}
                </div>
              </div>
              <h4 className="mb-2 fw-bold mt-2" style={{ fontSize: '1.2rem' }}>{dev.name}</h4>
              <div className="d-flex justify-content-center gap-3 fs-4 mt-2">
                <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-dark hover-scale">
                  <FaGithub />
                </a>
                <a href={dev.instagram} target="_blank" rel="noopener noreferrer" className="instagram-gradient hover-scale">
                  <FaInstagram />
                </a>
                <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover-scale">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-5 p-4 rounded-4 shadow-sm"
          style={{ backgroundColor: '#f8f9fa' }}
          variants={fadeIn}
        >
          <div className="d-flex align-items-center mb-4">
            <FaTicketAlt className="fs-1 me-3 text-primary" />
            <h2 className="fw-bold mb-0">About TicketTrade</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 bg-white rounded-3 h-100 shadow-sm">
                <h4 className="fw-bold mb-3">Our Mission</h4>
                <p className="lead">
                  Minimize last-minute panic and reduce ticket waste. Every year, thousands of tickets go unused while countless fans miss out on experiences. We're here to change that.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="p-4 bg-white rounded-3 h-100 shadow-sm">
                <h4 className="fw-bold mb-3">Why Choose Us?</h4>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="badge bg-primary me-2">✓</span>
                    <span>No more wasted tickets - sell unused tickets easily</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="badge bg-primary me-2">✓</span>
                    <span>Last-minute ticket availability for sold-out events</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="badge bg-primary me-2">✓</span>
                    <span>Secure and transparent transactions</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="badge bg-primary me-2">✓</span>
                    <span>Community-driven platform for real fans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded-3 shadow-sm">
            <p className="fs-5">
              <strong>Have an extra ticket you can't use? Looking for a last-minute entry to a sold-out event?</strong> TicketTrade is your go-to platform for hassle-free ticket buying and selling, designed to bring people together through the events they love.
            </p>
            <p className="fs-5">
              Join the TicketTrade community and make events more accessible, affordable, and exciting for everyone.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mt-5 p-4 rounded-4"
          variants={fadeIn}
          style={{ 
            background: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
            color: 'white'
          }}
        >
          <h3 className="fw-bold mb-4">Coming Soon</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-3 bg-white bg-opacity-10 rounded-3 h-100">
                <h5 className="fw-bold">Admin Dashboard</h5>
                <p>Enhanced management tools for content moderation and user administration.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-white bg-opacity-10 rounded-3 h-100">
                <h5 className="fw-bold">Voice Search</h5>
                <p>Find tickets faster with our voice-enabled search functionality.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 bg-white bg-opacity-10 rounded-3 h-100">
                <h5 className="fw-bold">Smart Recommendations</h5>
                <p>Personalized ticket suggestions based on your preferences.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.2);
        }
        .instagram-gradient {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-gradient {
          background: linear-gradient(45deg, #3a7bd5, #00d2ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;