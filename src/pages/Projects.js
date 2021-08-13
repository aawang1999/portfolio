import React, { useState } from 'react'
import { projects } from '../data/projects'
import { FaGithub } from 'react-icons/fa'
import Carousel from 'react-elastic-carousel'

const Projects = () => {
  //eslint-disable-next-line
  const [cards, setCards] = useState(projects)

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
  ]

  return (
    <>
      <section className="projects">
        <h1>Projects</h1>
        <div className="carousel-container">
          <div className="carousel">
            <Carousel breakPoints={breakPoints} itemsToScroll={3} itemPadding={[0, 20, 0, 20]}>
              {cards.map(({ id, title, desc, github, image }) => (
                <article key={id}>
                  <div className="card-outline">
                    <img src={image} alt={title} className="card-image" />
                    <div className="card-text">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                    <ul>
                      <li><a href={github} target="_blank" rel="noopener noreferrer" className="github"><FaGithub style={{ marginRight: 5 }} />Github</a></li>
                    </ul>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects