import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="overlay">
        <h1>Tristan Wang</h1>
        <p>Software Engineer, Web Developer</p>
        <ul>
          <li><a href="https://github.com/aawang1999" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/tristan-wang-b86676154/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Homepage