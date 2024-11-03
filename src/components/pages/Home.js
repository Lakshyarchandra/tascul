import React, { useState } from "react";
import "../styles/Home.css";
import headerImage from "../../../src/assets/headerimg.png";
import videoSrc from "../../../src/assets/ProfileVideo.mp4";
import videoThumbnail from "../../../src/assets/thumbnail.png";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <div className="home">
      <header className="home-header">
        <div className="header-content">
          <h1>Welcome to TasCul</h1>
          <p>
            At Tascul, we are committed to delivering exceptional web
            development services. As a trusted partner with extensive technical
            expertise and industry insight, we enable our clients to stay ahead
            by proactively addressing challenges. Our tailored web solutions
            give businesses a distinct competitive edge, enhancing their digital
            presence and driving sustained online success.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <img src={headerImage} alt="Description" className="header-image" />
      </header>

      <section className="video-section">
        <h2>Know About Us</h2>
        <div className="video-card">
          <div className="video-thumbnail" onClick={toggleVideoModal}>
            <img
              src={videoThumbnail}
              alt="Video Thumbnail"
              className="video-thumbnail-img"
            />
            <div className="play-button">▶</div>
          </div>
          <div className="video-description">
            <h3>Tascul: Growing Together</h3>
            <ul>
              <li>Committed to excellence and innovation.</li>
              <li>A creative hub for fostering and growing together.</li>
              <li>
                Offering workshops and mentorship to enhance both personal and
                professional skills.
              </li>
              <li>
                Prioritizing long-term achievements through responsible business
                practices.
              </li>
              <li>
                Collaborating with top organizations to deliver impactful
                solutions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Tascul?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>MSME Certified</h3>
            <p>
              We are recognized by the MSME for our commitment to excellence in
              service.
            </p>
          </div>
          <div className="feature-card">
            <h3>Experienced Team</h3>
            <p>
              Our team consists of skilled professionals with years of
              experience in web development.
            </p>
          </div>
          <div className="feature-card">
            <h3>Client Satisfaction</h3>
            <p>
              We prioritize our clients' needs and ensure their satisfaction
              with our services.
            </p>
          </div>
          <div className="feature-card">
            <h3>Proven Track Record</h3>
            <p>
              We have successfully delivered numerous projects across various
              industries.
            </p>
          </div>
          <div className="feature-card">
            <h3>Transparent Communication</h3>
            <p>
              We maintain open lines of communication with our clients
              throughout the project lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        {[
          {
            question: "What services do you offer?",
            answer:
              "We provide web and mobile app development, UI/UX design, and custom software solutions tailored to EdTech needs.",
          },
          {
            question: "What is your pricing structure?",
            answer:
              "Our pricing depends on the project scope, complexity, and timeline. Contact us for a detailed quote.",
          },
          {
            question: "Do you provide maintenance after project completion?",
            answer:
              "Yes, we offer post-launch support and maintenance packages to ensure your platform performs optimally.",
          },
          {
            question: "How long does it take to complete a project?",
            answer:
              "Project timelines vary based on requirements. Smaller projects may take 4-6 weeks, while complex apps may take months.",
          },
          {
            question: "Do you offer custom designs?",
            answer:
              "Yes, we provide custom UI/UX designs tailored to your brand and user experience goals.",
          },
          {
            question: "What technology do you use for development?",
            answer:
              "We typically utilize ReactJS alongside Express as part of a full MERN stack architecture.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${openFaq === index ? "open" : ""}`}
          >
            <h3 onClick={() => toggleFaq(index)} className="faq-question">
              {faq.question}
            </h3>
            <p className={`faq-answer ${openFaq === index ? "show" : ""}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </section>

      {isVideoOpen && (
        <div className="video-modal" onClick={toggleVideoModal}>
          <video
            className="video-modal-content"
            src={videoSrc}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on video
          />
        </div>
      )}
    </div>
  );
}

export default Home;
