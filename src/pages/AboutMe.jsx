import React from "react";
import { FaFacebook } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src="./image/sytech_logo.png" />
      <h1>Welcome to SyTech</h1>
      <div className="about-info">
        <div className="about-data">
          <h2>Smitesh Tamboli</h2>
          <p>
            🚀 Software Developer | 📱 Digital Creator | 💼 Entrepreneur
            <br /> 🌟 Turning lines of code into digital wonders. <br />
            💡 Exploring the limitless possibilities of technology. <br />
            🌐 Building, creating, and innovating one project at a time. <br />
            <br />
            Join me on this exciting journey of tech and creativity! Let's make
            a digital impact together. 💻✨
          </p>
          <div className="social-link">
            <a href="https://www.facebook.com/sytech9">
              <FaFacebook />
            </a>
            <a href="https://www.facebook.com/smitesh.tech/">
              <FaFacebook />
            </a>
          </div>
        </div>
        <picture className="smitesh-image">
          <img src="./image/smitesh.png" />
        </picture>
      </div>
    </div>
  );
};

export default AboutMe;
