import React, { useState } from 'react'
import { projects } from '../data/projects'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  //eslint-disable-next-line
  const [cards, setCards] = useState(projects)

  return (
    <>
      <section className="projects">
        <h1>Projects</h1>
        <div className="cards">
          {cards.map(({ id, title, desc, github, image }) => (
            <article key={id}>
              <div className="card-outline">
                <img src={image} alt={title} className="card-image" />
                <h4>{title}</h4>
                <p>{desc}</p>
                <ul>
                  <li><a href={github} target="_blank" rel="noopener noreferrer" className="github"><FaGithub style={{ marginRight: 5 }} />Github</a></li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
