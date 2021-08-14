import React, { useState } from 'react'
import Footer from '../components/Footer'

const About = () => {
  const [profileFlipped, setProfileFlipped] = useState(false)
  const [skillsFlipped, setSkillsFlipped] = useState(false)
  const [experienceFlipped, setExperienceFlipped] = useState(false)

  return (
    <>
      <section className="about">
        <div className="overlay">
          <h1>About</h1>
          <div className="about-container">
            <div className="about-card" onClick={() => setProfileFlipped(!profileFlipped)}>
              <div className={`${profileFlipped ? "about-card-inner is-flipped" : "about-card-inner"}`}>
                <div className="about-card-face about-card-face-front">
                  <h2>Profile</h2>
                </div>
                <div className="about-card-face about-card-face-back">
                  <p>A third-year undergraduate at Stanford University majoring in Computer Science and minoring in Economics (expected 06/2023). Interested in opportunities related to software engineering, web and app development.</p>
                </div>
              </div>
            </div>
            <div className="about-card" onClick={() => setSkillsFlipped(!skillsFlipped)}>
              <div className={`${skillsFlipped ? "about-card-inner is-flipped" : "about-card-inner"}`}>
                <div className="about-card-face about-card-face-front">
                  <h2>Skills</h2>
                </div>
                <div className="about-card-face about-card-face-back">
                  <p>A third-year undergraduate at Stanford University majoring in Computer Science and minoring in Economics (expected 06/2023). Interested in opportunities related to software engineering, web and app development.</p>
                </div>
              </div>
            </div>
            <div className="about-card" onClick={() => setExperienceFlipped(!experienceFlipped)}>
              <div className={`${experienceFlipped ? "about-card-inner is-flipped" : "about-card-inner"}`}>
                <div className="about-card-face about-card-face-front">
                  <h2>Experience</h2>
                </div>
                <div className="about-card-face about-card-face-back">
                  <p>A third-year undergraduate at Stanford University majoring in Computer Science and minoring in Economics (expected 06/2023). Interested in opportunities related to software engineering, web and app development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
