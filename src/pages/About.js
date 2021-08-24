import React, { useState } from 'react'
import { BiUserCircle, BiCog, BiBriefcase } from 'react-icons/bi'
import Carousel from 'react-elastic-carousel'
import Footer from '../components/Footer'

const About = () => {
  const [profileFlipped, setProfileFlipped] = useState(false)
  const [skillsFlipped, setSkillsFlipped] = useState(false)
  const [experienceFlipped, setExperienceFlipped] = useState(false)

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
  ]

  return (
    <>
      <section className="about">
        <div className="overlay">
          <h1>About</h1>
          <div className="carousel-container">
            <div className="carousel">
              <Carousel breakPoints={breakPoints} itemsToScroll={1} itemPadding={[0, 20, 0, 20]}>
                <div className="about-card" onClick={() => setProfileFlipped(!profileFlipped)}>
                  <div className={`${profileFlipped ? "about-card-inner is-flipped" : "about-card-inner"}`}>
                    <div className="about-card-face about-card-face-front">
                      <BiUserCircle className="about-card-icon" />
                      <h2>Profile</h2>
                    </div>
                    <div className="about-card-face about-card-face-back">
                      <div className="about-text-center">
                        <p><strong>Los Altos, CA</strong></p>
                      </div>
                      <div className="about-text-center">
                        <p><strong>(650) 305-8034</strong></p>
                      </div>
                      <div className="about-text-center">
                        <p><strong>aawang99@stanford.edu</strong></p>
                      </div>
                      <div className="about-text-center">
                        <p><strong>Stanford University</strong></p>
                        <p>BS Computer Science</p>
                        <p>GPA 3.45</p>
                        <p>09/2018 - Present</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-card" onClick={() => setSkillsFlipped(!skillsFlipped)}>
                  <div className={`${skillsFlipped ? "about-card-inner is-flipped" : "about-card-inner"}`}>
                    <div className="about-card-face about-card-face-front">
                      <BiCog className="about-card-icon" />
                      <h2>Skills</h2>
                    </div>
                    <div className="about-card-face about-card-face-back">
                      <div className="skills-title">
                        <p><strong>HTML / CSS / JS</strong></p>
                        <p>80%</p>
                      </div>
                      <div class="skills-bar-container">
                        <div class="skills-bar bar-80"></div>
                      </div>
                      <div className="skills-title">
                        <p><strong>C++, Java, Python</strong></p>
                        <p>60%</p>
                      </div>
                      <div class="skills-bar-container">
                        <div class="skills-bar bar-60"></div>
                      </div>
                      <div className="skills-title">
                        <p><strong>React, Handlebars</strong></p>
                        <p>60%</p>
                      </div>
                      <div class="skills-bar-container">
                        <div class="skills-bar bar-60"></div>
                      </div>
                      <div className="skills-title">
                        <p><strong>Mongo, Express, Node.js</strong></p>
                        <p>40%</p>
                      </div>
                      <div class="skills-bar-container">
                        <div class="skills-bar bar-40"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-card" onClick={() => setExperienceFlipped(!experienceFlipped)}>
                  <div className={`${experienceFlipped ? "about-card-inner is-flipped" : "about-card-inner"}`}>
                    <div className="about-card-face about-card-face-front">
                      <BiBriefcase className="about-card-icon" />
                      <h2>Experience</h2>
                    </div>
                    <div className="about-card-face about-card-face-back">
                      <div className="about-text-center">
                        <p><strong>Engineering Intern @ Sunway Education Group</strong></p>
                        <p>12/2020 - 04/2021</p>
                        <p>Kuala Lumpur, Malaysia</p>
                      </div>
                      <div className="about-text-center">
                        <p><strong>IoT Intern @ YPCloud, Inc.</strong></p>
                        <p>06/2020 - 09/2020</p>
                        <p>Taipei, Taiwan</p>
                      </div>
                      <div className="about-text-center">
                        <p><strong>YouTuber & Webpage Developer</strong></p>
                        <p>09/2017 - Present</p>
                        <p>Palo Alto, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
