import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => (
  <section>
    <h2>Projects</h2>

    <div className="projects-container">
      {/* Credit Card Fraud Detection Project */}
      <div className="project">
        <h3>Credit Card Fraud Detection</h3>
        <p>Detecting fraudulent credit card transactions in real-time is challenging due to complex patterns and large data volumes. The goal is to build a machine learning system that accurately identifies fraud, reducing financial risks and enhancing security for financial institutions and customers.</p>
      </div>

      {/* Fitness Tracker Project */}
      <div className="project">
        <h3>Fitness Tracker using Python</h3>
        <p>Tracking fitness progress manually is time-consuming and prone to errors. The goal is to develop a Python-based fitness tracker that automatically monitors key metrics such as steps, calories, and distance, offering users real-time feedback on their physical activity. This system aims to simplify fitness tracking, motivate users, and help them achieve their health goals efficiently.</p>
      </div>
    </div>
  </section>
);

export default Projects;
