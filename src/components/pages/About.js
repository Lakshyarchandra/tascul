import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h1>Transforming the Future of Learning</h1>
        <p>
          At Tascul, we are dedicated to reshaping the educational landscape
          through innovative technology. Our mission is to deliver
          transformative solutions that make learning more accessible, engaging,
          and impactful for all.
        </p>
      </header>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          At Tascul, we envision a future where education is tailored to meet
          the diverse needs of every individual. Our goal is to leverage
          technology to create personalized learning experiences that spark
          curiosity, drive personal growth, and promote lifelong learning.
        </p>
        <p>
          We are committed to empowering businesses with advanced web
          development solutions and inspiring the next generation of developers
          by offering practical, hands-on experience.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <h3>Innovation</h3>
            <p>
              We are constantly pushing the boundaries of educational
              technology, embracing new ideas to foster growth and progress.
            </p>
          </div>
          <div className="mission-card">
            <h3>Inclusivity</h3>
            <p>
              We are dedicated to ensuring that learning opportunities are
              accessible to all, regardless of background or ability.
            </p>
          </div>
          <div className="mission-card">
            <h3>Collaboration</h3>
            <p>
              By collaborating with educators, learners, and industry leaders,
              we ensure our solutions address real-world challenges and deliver
              meaningful outcomes.
            </p>
          </div>
          <div className="mission-card">
            <h3>Excellence</h3>
            <p>
              We are committed to upholding the highest standards in every
              aspect of our work, from the quality of our products to the
              support we provide our users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
