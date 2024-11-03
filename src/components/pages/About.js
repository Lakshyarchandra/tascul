import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h1>Transforming the Way People Learn</h1>
        <p>
          Welcome to Tascul, where we are dedicated to revolutionizing the way
          people learn and grow. Our mission is to provide cutting-edge
          solutions that make education more accessible, engaging, and effective
          for everyone.
        </p>
      </header>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          At Tascul, we envision a world where education transcends traditional
          boundaries and adapts to the needs of each individual. Our vision is
          to harness the power of technology to create personalized learning
          experiences that inspire curiosity and foster lifelong learning.
        </p>
        <p>
          Our vision is to empower businesses through cutting-edge web
          development solutions while shaping the future of technology by
          providing aspiring developers with hands-on, real-world experience.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <h3>Innovation</h3>
            <p>
              We constantly strive to push the boundaries of what’s possible in
              education, embracing new technologies and ideas to drive progress.
            </p>
          </div>
          <div className="mission-card">
            <h3>Inclusivity</h3>
            <p>
              We are committed to making learning accessible to everyone,
              regardless of background or ability.
            </p>
          </div>
          <div className="mission-card">
            <h3>Collaboration</h3>
            <p>
              We work closely with educators, learners, and partners to ensure
              our solutions meet real-world needs and deliver tangible results.
            </p>
          </div>
          <div className="mission-card">
            <h3>Excellence</h3>
            <p>
              We uphold the highest standards in everything we do, from the
              quality of our products to the support we provide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
