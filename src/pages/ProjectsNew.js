import React, { useState } from 'react'
import { projects } from '../data/projects'
import { FaGithub } from 'react-icons/fa'
import Footer from '../components/Footer'

const ProjectsNew = () => {
  const [searchFilter, setSearchFilter] = useState('')
  const [selectFilter, setSelectFilter] = useState('')

  const searchText = (event) => {
    setSearchFilter(event.target.value)
  }

  const selectText = (event) => {
    setSelectFilter(event.target.value)
  }

  let dataSearch = projects.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchFilter.toString().toLowerCase())) && Object.keys(item).some(key => item[key].toString().toLowerCase().includes(selectFilter.toString().toLowerCase()))
  })

  return (
    <>
      <section className="projects-new">
        <div className="overlay">
          <h1>Projects</h1>
          <div className="s-container">
            <input
              type="text"
              className="s-bar"
              placeholder="Search"
              value={searchFilter}
              onChange={searchText.bind(this)}
            />
            <select className="s-dropdown" onChange={selectText.bind(this)}>
              <option value="">Select</option>
              <option value="js">JavaScript</option>
              <option value="react">React</option>
              <option value="angular">Angular</option>
            </select>
          </div>
          <div className="c-container">
            {dataSearch.map((item, index) => {
              return (
                <article key={item.id} className="c-outer">
                  <div className="card-outline">
                    <img src={item.image} alt={item.title} className="card-image" />
                    <div className="card-text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                    <ul>
                      <li><a href={item.github} target="_blank" rel="noopener noreferrer" className="github"><FaGithub style={{ marginRight: 5 }} />Github</a></li>
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjectsNew