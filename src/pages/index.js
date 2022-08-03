import * as React from "react"
import "../styles/style.css"
import "../js/app.js"
import ProjectGallery from "../components/ProjectGallery.js"
import wave from "../images/wave.png"
import resume from "../documents/Resume - Jeff Golota.pdf"
import triangle from "../images/triangle.png"
import ficon from "../images/j7.svg"
import { FaGithub, FaFileDownload, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { Helmet } from "react-helmet"


function mobile() {
  const hamburger = document.querySelector("#hamburger");
  const overlay = document.querySelector(".overlay");
  const mobileMenu = document.querySelector("#mobile");
  const mobileLinks = document.querySelector(".links");
  console.log("test");
  window.addEventListener("click", outsideClick);
  if (hamburger.classList.contains("active")) {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    mobileMenu.style.left = "-1000px";
    mobileLinks.style.opacity = "0";
    hamburger.classList.remove("active");
  } else {
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
    mobileLinks.style.opacity = "1";
    mobileMenu.style.left = "0";
    hamburger.classList.add("active");
  }
  mobileLinks.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      mobileMenu.style.left = "-1000px";
      mobileLinks.style.opacity = "0";
      hamburger.classList.remove("active");
    }
  });
  function outsideClick(e) {
    if (e.target == overlay) {
      if (hamburger.classList.contains("active")) {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
        mobileMenu.style.left = "-1000px";
        mobileLinks.style.opacity = "0";
        hamburger.classList.remove("active");
      }
    }
  }
}
// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Jeff Golota - Developer & Designer</title>
          <link rel="canonical" href="http://www.jeffgolota.com" />
          <link rel="icon" href={ficon} sizes="any" type="image/svg+xml" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-BW0MYT4KL3"></script>
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZ6KN3B6QD"></script>
          <script>
            window.dataLayer = window.dataLayer || []
            function gtag() {
              dataLayer.push(arguments)
            }
            gtag('js', new Date())

            gtag('config', 'G-PZ6KN3B6QD')
          </script>
      </Helmet>
      <nav id="mobile">
        <div id="hamburger" onClick={mobile}>
          <div className="lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className="links">
          <li><a href="#landing">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-links-container">
        <ul id="social-links">
          <li id="linkedin-section">
            <a href="https://www.linkedin.com/in/jeff-golota-405a00194/" target="_blank">
              <h3 className="label" id="linkedin">LinkedIn</h3>
              <FaLinkedin style={{"fontSize": "30px"}}/>
            </a>
          </li>
          <li id="github-section">
            <a href="https://github.com/JeffGolota7/" target="_blank">
              <h3 className="label" id="github">GitHub</h3>
              <FaGithub style={{"fontSize": "30px"}}/>
            </a>
          </li>
          <li id="resume-section">
            <a href={resume} download>
              <h3 className="label" id="resume">Resume</h3>
              <FaFileDownload style={{"fontSize": "30px"}}/>
            </a>
          </li>
        </ul>
      </div>
      <div className="overlay"></div>

      <div id="landing">
        <div id="landing-content">
          <div id="landing-logo-container">
            <svg id="landing-logo" x="0px" y="0px" viewBox="0 0 23.75 18.47">
              <g id="logo">
                <g id="logo">
                  <polygon className="green" style={{"fill": "#00ec18"}} points="3.41 0 3.41 4.51 11.87 4.51 9.46 13.41 15.17 10.22 17.81 0 3.41 0" />
                  <polygon className="grey" style={{"fill": "#515151"}} points="18.25 0 17.04 4.51 23.75 4.51 23.75 0 18.25 0" />
                  <polygon className="grey" style={{"fill": "#515151"}} points="14.95 10.77 13.41 16.93 10.55 18.47 0 18.47 4.51 14.07 9.35 14.07 14.95 10.77" />
                </g>
              </g>
            </svg>
            <h1>JEFF GOLOTA</h1>
            <h4>Developer & Designer</h4>
          </div>
          <div id="landing-links">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li><span>•</span></li>
              <li>
                <a href="#about">About</a>
              </li>
              <li><span>•</span></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="scroll">
        <h3>scroll down</h3>
        <span className="bounce"><FaChevronDown /></span>
      </div>
      <div id="projects">
        <img src={triangle} alt="polygon" className="triangle" />
        <h1 id="projects-title"><span>-</span>PROJECTS<span>-</span></h1>
        <ProjectGallery/>
      </div>
      <div id="about">
        <img src={wave} alt="wave" className="wave" />
        <h1 id="about-title"><span>-</span>ABOUT<span>-</span></h1>
        <div id="about-description">
          <div className="about-image-container"></div>
          <p>
            I'm Jeff Golota and I am currently pursuing a B.S. in Computer Science at Endicott College, in Beverly, MA.<br></br><br></br>
            I have been working with computer software for most of my life through computer gaming and classwork. Due to this exposure, I chose to major in Computer Science to deepen my knowledge in the subject.<br></br><br></br>
            After completing a web development course, I realized this was my passion. I dedicated that following summer to learning as much as I could about web development and I continue to expand that knowledge in my free time. I am currently learning more about UI/UX design both on my own and through courses, which will improve my visual skills when creating websites. I take pleasure in making visually appealing layouts and coding fun effects.<br></br><br></br>
            Some of my many interests include video games, working out, sports, and being with friends and family.
          </p>
        </div>
      </div>
      <div id="contact">
        <form className="contact-form" action="POST" data-netlify="true">
          <h1 className="contact-title"><span>-</span>CONTACT ME<span>-</span></h1>
          <div className="contact-input">
            <div className="name">
              <label className="label" for="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Enter Name Here" />
            </div>
            <div className="email">
              <label className="label" for="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Enter Email Here" />
            </div>
            <div className="message">
              <label className="label" for="message">Message</label>
              <textarea type="text" name="message" id="message" placeholder="Enter Message Here"></textarea>
            </div>
            <div>
              <div data-netlify-recaptcha="true"></div>
            </div>
            <button>SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default IndexPage
