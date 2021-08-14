import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://github.com/aawang1999" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/tristan-wang-b86676154/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="footer-copyright">Tristan Wang © 2021</div>
      </div>
    </section>
  )
}

export default Footer
