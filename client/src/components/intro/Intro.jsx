import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/Workspace.gif";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>IITM Certification: Full Stack Developer- MERN</h5>
              <small>6 months</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed Projects</small>
            </article>
          </div>
          <p>
            Passionate and enthusiastic developer with real-world experience
            creating robust applications, eager to use MERN stack expertise.
            Competent in developing scalable backend solutions with Node.js and
            designing user-friendly interfaces with React. Knowledgeable about
            MongoDB for efficient data management.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
